# 🚀 Guia Prático de Deploy na AWS

Este guia vai te levar passo a passo para colocar a aplicação JG Bioestética rodando na AWS.

## 📋 Pré-requisitos

- [ ] Conta AWS ativa
- [ ] Acesso ao AWS Console
- [ ] Acesso de admin ao repositório GitHub

---

## PASSO 1: Criar Usuário IAM na AWS

### 1.1 Acessar IAM
1. Faça login no [AWS Console](https://console.aws.amazon.com)
2. Busque por "IAM" no topo
3. Clique em **IAM** (Identity and Access Management)

### 1.2 Criar Usuário
1. No menu lateral, clique em **Users**
2. Clique em **Create user**
3. Nome do usuário: `github-actions-jgbioestetica`
4. Clique em **Next**

### 1.3 Adicionar Permissões
1. Selecione: **Attach policies directly**
2. Procure e marque as seguintes policies:
   - ✅ `AmazonEC2ContainerRegistryFullAccess`
   - ✅ `AmazonECS_FullAccess`
   - ✅ `IAMReadOnlyAccess`
3. Clique em **Next**
4. Clique em **Create user**

### 1.4 Criar Access Key
1. Clique no usuário que acabou de criar
2. Vá na aba **Security credentials**
3. Role até **Access keys**
4. Clique em **Create access key**
5. Selecione: **Application running outside AWS**
6. Clique em **Next**
7. (Opcional) Adicione uma descrição: "GitHub Actions Deploy"
8. Clique em **Create access key**

### 1.5 IMPORTANTE - Salvar Credenciais
⚠️ **Você só verá a Secret Access Key UMA VEZ!**

```
Access key ID: AKIA...
Secret access key: wJalr...
```

**Copie e salve em um local seguro** (vamos usar no próximo passo).

---

## PASSO 2: Configurar Secrets no GitHub

### 2.1 Acessar Secrets
1. Vá para: https://github.com/kelebra96/JGbioestetica
2. Clique em **Settings** (no topo do repositório)
3. No menu lateral, clique em **Secrets and variables** → **Actions**

### 2.2 Adicionar AWS_ACCESS_KEY_ID
1. Clique em **New repository secret**
2. Name: `AWS_ACCESS_KEY_ID`
3. Secret: Cole o **Access key ID** do passo anterior
4. Clique em **Add secret**

### 2.3 Adicionar AWS_SECRET_ACCESS_KEY
1. Clique em **New repository secret** novamente
2. Name: `AWS_SECRET_ACCESS_KEY`
3. Secret: Cole o **Secret access key** do passo anterior
4. Clique em **Add secret**

✅ Pronto! Secrets configurados.

---

## PASSO 3: Criar Recursos na AWS

### Opção A: Via AWS Console (Mais Fácil para Iniciantes)

#### 3.1 Criar ECR Repository

1. No AWS Console, busque por **ECR**
2. Clique em **Elastic Container Registry**
3. No menu lateral, clique em **Repositories**
4. Clique em **Create repository**
5. Configurações:
   - **Repository name**: `jgbioestetica`
   - **Tag immutability**: Disabled
   - **Scan on push**: Enabled (opcional)
6. Clique em **Create repository**

✅ Anote o URI do repositório (ex: `850995565500.dkr.ecr.sa-east-1.amazonaws.com/jgbioestetica`)

#### 3.2 Criar VPC e Subnets (se não tiver)

Se você já tem uma VPC na região sa-east-1, pode pular este passo.

1. Busque por **VPC**
2. Clique em **Create VPC**
3. Selecione: **VPC and more**
4. Configurações:
   - **Name tag**: `JGBioestetica-VPC`
   - **IPv4 CIDR**: `10.0.0.0/16`
   - **Number of Availability Zones**: 2
   - **Number of public subnets**: 2
   - **Number of private subnets**: 0
   - **NAT gateways**: None
   - **VPC endpoints**: None
5. Clique em **Create VPC**

✅ Anote os IDs das **2 public subnets** (vamos usar no passo 3.5)

#### 3.3 Criar Security Group

1. Ainda em VPC, clique em **Security Groups** no menu lateral
2. Clique em **Create security group**
3. Configurações:
   - **Name**: `jgbioestetica-sg`
   - **Description**: `Security group for JG Bioestetica ECS tasks`
   - **VPC**: Selecione a VPC criada acima (ou sua VPC existente)
4. **Inbound rules** - Clique em **Add rule**:
   - **Type**: Custom TCP
   - **Port range**: 3001
   - **Source**: Anywhere IPv4 (0.0.0.0/0)
   - (Se tiver Load Balancer, em vez de Anywhere, selecione o Security Group do ALB)
5. **Outbound rules**: Manter padrão (All traffic)
6. Clique em **Create security group**

✅ Anote o **Security Group ID** (ex: `sg-0123456789abcdef`)

#### 3.4 Criar CloudWatch Log Group

1. Busque por **CloudWatch**
2. No menu lateral, clique em **Logs** → **Log groups**
3. Clique em **Create log group**
4. **Log group name**: `/ecs/jgbioestetica`
5. Clique em **Create**

#### 3.5 Criar ECS Cluster

1. Busque por **ECS** (Elastic Container Service)
2. Clique em **Clusters** no menu lateral
3. Clique em **Create cluster**
4. Configurações:
   - **Cluster name**: `JGBioesteticaCluster`
   - **Infrastructure**: AWS Fargate (serverless)
5. Clique em **Create**

#### 3.6 Verificar IAM Role

1. Busque por **IAM**
2. Clique em **Roles**
3. Procure por `ecsTaskExecutionRole`
   - ✅ Se existir, perfeito!
   - ❌ Se NÃO existir, continue:

**Criar ecsTaskExecutionRole:**
1. Clique em **Create role**
2. **Trusted entity type**: AWS service
3. **Use case**: Selecione **Elastic Container Service** → **Elastic Container Service Task**
4. Clique em **Next**
5. Adicione a policy: `AmazonECSTaskExecutionRolePolicy`
6. Clique em **Next**
7. **Role name**: `ecsTaskExecutionRole`
8. Clique em **Create role**

#### 3.7 Registrar Task Definition

**Via AWS Console:**
1. Em ECS, clique em **Task definitions**
2. Clique em **Create new task definition** → **Create new task definition with JSON**
3. Copie todo o conteúdo do arquivo `.aws/task-definition.json` do seu projeto
4. Cole no editor JSON
5. Clique em **Create**

**OU via AWS CLI:**
```bash
aws ecs register-task-definition \
  --cli-input-json file://.aws/task-definition.json \
  --region sa-east-1
```

#### 3.8 Criar ECS Service

1. Ainda em ECS, clique em **Clusters** → **JGBioesteticaCluster**
2. Na aba **Services**, clique em **Create**
3. **Deployment configuration**:
   - **Task definition**: Selecione `jgbioestetica-task`
   - **Service name**: `JGBioesteticaService`
   - **Desired tasks**: 1

4. **Networking**:
   - **VPC**: Selecione sua VPC
   - **Subnets**: Selecione as 2 public subnets
   - **Security group**: Selecione `jgbioestetica-sg` (criado no passo 3.3)
   - **Public IP**: ENABLED (importante!)

5. **Load balancing** (Opcional agora, recomendado depois):
   - Se quiser, configure um Application Load Balancer
   - Por ora, pode deixar **None** para testar

6. Clique em **Create**

⏳ Aguarde alguns minutos. O ECS vai:
- Baixar a imagem (pode falhar no primeiro deploy porque ainda não fizemos push)
- Criar a task
- Executar o container

---

### Opção B: Via AWS CLI (Mais Rápido)

Se você tem AWS CLI configurado:

```bash
# 1. Criar ECR Repository
aws ecr create-repository --repository-name jgbioestetica --region sa-east-1

# 2. Criar CloudWatch Log Group
aws logs create-log-group --log-group-name /ecs/jgbioestetica --region sa-east-1

# 3. Criar ECS Cluster
aws ecs create-cluster --cluster-name JGBioesteticaCluster --region sa-east-1

# 4. Registrar Task Definition
aws ecs register-task-definition \
  --cli-input-json file://.aws/task-definition.json \
  --region sa-east-1

# 5. Criar Service (SUBSTITUA subnet-xxx e sg-xxx pelos seus IDs)
aws ecs create-service \
  --cluster JGBioesteticaCluster \
  --service-name JGBioesteticaService \
  --task-definition jgbioestetica-task \
  --desired-count 1 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-xxxxx,subnet-yyyyy],securityGroups=[sg-xxxxx],assignPublicIp=ENABLED}" \
  --region sa-east-1
```

---

## PASSO 4: Fazer Deploy Inicial

### 4.1 Fazer Push para Main

O deploy automático só acontece quando há push na branch **main**.

**Via Pull Request (Recomendado):**
1. Vá para: https://github.com/kelebra96/JGbioestetica/pull/new/claude/setup-aws-deployment-01MvsiL4VCsMh7Rj57P7wcmb
2. Crie um Pull Request
3. Revise as mudanças
4. Clique em **Merge pull request**
5. Clique em **Confirm merge**

**OU via Git direto:**
```bash
git checkout main
git merge claude/setup-aws-deployment-01MvsiL4VCsMh7Rj57P7wcmb
git push origin main
```

### 4.2 Acompanhar o Deploy

1. Vá para: https://github.com/kelebra96/JGbioestetica/actions
2. Você verá um workflow rodando chamado "Deploy JGBioestetica to Amazon ECS"
3. Clique nele para ver o progresso
4. O deploy leva cerca de 5-10 minutos:
   - Build da imagem Docker
   - Push para ECR
   - Atualização do ECS Service

### 4.3 Verificar no ECS

1. Vá para AWS Console → ECS → Clusters → JGBioesteticaCluster
2. Clique em **Services** → **JGBioesteticaService**
3. Na aba **Tasks**, você verá uma task rodando
4. Clique na task
5. Na seção **Configuration**, você verá:
   - **Public IP**: Anote este IP!

---

## PASSO 5: Acessar a Aplicação

### 5.1 Obter o IP Público

**Via Console:**
1. ECS → Clusters → JGBioesteticaCluster → Services → JGBioesteticaService
2. Aba **Tasks** → Clique na task
3. Na seção **Network**, copie o **Public IP**

**Via CLI:**
```bash
# Listar tasks
aws ecs list-tasks \
  --cluster JGBioesteticaCluster \
  --service-name JGBioesteticaService \
  --region sa-east-1

# Descrever task (substitua TASK_ID)
aws ecs describe-tasks \
  --cluster JGBioesteticaCluster \
  --tasks TASK_ID \
  --region sa-east-1 \
  | grep -A 5 networkInterfaces
```

### 5.2 Testar

Abra no navegador:
```
http://SEU_IP_PUBLICO:3001
```

Ou teste o health check:
```bash
curl http://SEU_IP_PUBLICO:3001/api/status
```

Deve retornar:
```json
{"status":"Server is running"}
```

🎉 **Sucesso!** Sua aplicação está rodando na AWS!

---

## 🔄 Próximos Deploys (Automático)

Agora que está tudo configurado, o deploy é automático:

1. Faça suas alterações no código
2. Commit e push para a branch `main`
3. GitHub Actions automaticamente:
   - Faz build da nova imagem
   - Faz push para ECR
   - Atualiza o ECS Service
4. ECS faz rolling update (zero downtime)
5. Nova versão em produção!

---

## ⚠️ Problemas Comuns

### Deploy Falha no GitHub Actions

**Erro: "no basic auth credentials"**
- ✅ Verifique se os secrets AWS_ACCESS_KEY_ID e AWS_SECRET_ACCESS_KEY estão corretos

**Erro: "AccessDeniedException"**
- ✅ Verifique se o usuário IAM tem as policies corretas

### Task Não Inicia no ECS

**Status: STOPPED**
1. Clique na task
2. Veja os **Stopped reason** e **Logs**
3. Causas comuns:
   - Imagem não existe no ECR (faça o primeiro deploy via GitHub Actions)
   - Security Group bloqueando tráfego
   - Falta de recursos (aumente CPU/Memory na task definition)

### Não Consigo Acessar pelo IP

**Timeout ao acessar IP:3001**
- ✅ Verifique se `assignPublicIp=ENABLED`
- ✅ Verifique se o Security Group permite entrada na porta 3001
- ✅ Verifique se está usando subnets públicas
- ✅ Verifique se a task está RUNNING

---

## 🌐 Melhorias Futuras (Opcional)

### 1. Application Load Balancer
- URL fixa (em vez de IP dinâmico)
- SSL/HTTPS com certificado
- Health checks automáticos
- Melhor distribuição de tráfego

### 2. Domínio Personalizado
- Registrar domínio no Route 53
- Apontar para o Load Balancer
- Certificado SSL gratuito via AWS Certificate Manager

### 3. Auto Scaling
- Escalar baseado em CPU/Memória
- Reduzir custos em horários de baixo tráfego
- Aumentar capacidade automaticamente quando necessário

### 4. CI/CD Completo
- Testes automatizados antes do deploy
- Deploy em ambiente de staging primeiro
- Rollback automático em caso de falha

---

## 📊 Monitoramento

### CloudWatch Logs
```
AWS Console → CloudWatch → Log groups → /ecs/jgbioestetica
```

Aqui você vê todos os logs da aplicação (console.log, erros, etc).

### CloudWatch Metrics
```
AWS Console → CloudWatch → Metrics → ECS
```

Monitore CPU, Memória, Network, etc.

### ECS Console
```
AWS Console → ECS → Clusters → JGBioesteticaCluster
```

Veja status das tasks, deployments, eventos.

---

## 💰 Custos

**Fargate (0.25 vCPU + 512 MB) em sa-east-1:**
- ~$15-20/mês rodando 24/7
- ~$0.50/dia

**ECR:**
- Primeiros 500 MB gratuitos
- ~$0.10/GB/mês depois

**CloudWatch Logs:**
- Primeiros 5 GB gratuitos
- ~$0.50/GB/mês depois

**Total estimado: $15-25/mês**

**Dica:** Use Auto Scaling para reduzir para 0 tasks em horários de pouco tráfego e economizar até 70%.

---

## 📞 Ajuda

Se encontrar problemas:

1. Verifique logs no CloudWatch
2. Verifique GitHub Actions logs
3. Verifique Task stopped reason no ECS
4. Consulte AWS_SETUP.md para troubleshooting detalhado

Boa sorte! 🚀
