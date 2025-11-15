# Configuração AWS - JG Bioestética

## 📋 Informações do Projeto

- **Nome**: JGBioestetica
- **Região AWS**: sa-east-1 (São Paulo)
- **Account ID**: 850995565500
- **Application ARN**: arn:aws:resource-groups:sa-east-1:850995565500:group/JGBioestetica/0bj5z0s104m82b6lb3vzlgbip6

## 🏗️ Infraestrutura AWS

### Serviços Utilizados

1. **Amazon ECR** (Elastic Container Registry)
   - Repositório: `jgbioestetica`
   - URL: `850995565500.dkr.ecr.sa-east-1.amazonaws.com/jgbioestetica`

2. **Amazon ECS** (Elastic Container Service)
   - Cluster: `JGBioesteticaCluster`
   - Service: `JGBioesteticaService`
   - Task Definition: `jgbioestetica-task`
   - Launch Type: **FARGATE**

3. **CloudWatch Logs**
   - Log Group: `/ecs/jgbioestetica`

## 🔐 Secrets Necessários no GitHub

Para o deploy automático funcionar, você precisa configurar os seguintes secrets no GitHub:

### Como Adicionar Secrets:

1. Vá para: `Settings` → `Secrets and variables` → `Actions`
2. Clique em `New repository secret`
3. Adicione os seguintes secrets:

#### AWS_ACCESS_KEY_ID
- **Descrição**: Access Key do usuário IAM com permissões para ECS/ECR
- **Permissões necessárias**:
  - AmazonEC2ContainerRegistryFullAccess
  - AmazonECS_FullAccess
  - IAMReadOnlyAccess (para assumir roles)

#### AWS_SECRET_ACCESS_KEY
- **Descrição**: Secret Access Key correspondente ao Access Key acima

### Como Criar as Credenciais:

1. Acesse o **AWS Console** → **IAM** → **Users**
2. Crie um novo usuário (ex: `github-actions-jgbioestetica`)
3. Attach as seguintes policies:
   - `AmazonEC2ContainerRegistryFullAccess`
   - `AmazonECS_FullAccess`
4. Vá em **Security credentials** → **Create access key**
5. Escolha: **Application running outside AWS**
6. Copie o **Access Key ID** e **Secret Access Key**
7. Adicione-os como secrets no GitHub

## 🚀 Deploy Automático

### Trigger do Deploy

O deploy automático é acionado quando há **push na branch `main`**.

### Processo de Deploy

1. **Checkout do código**
2. **Autenticação na AWS**
3. **Login no ECR**
4. **Build da imagem Docker**
   - Usa o Dockerfile na raiz do projeto
   - Tag: hash do commit (SHA)
5. **Push da imagem para o ECR**
6. **Atualização da Task Definition**
   - Usa `.aws/task-definition.json`
   - Insere a nova imagem
7. **Deploy no ECS**
   - Registra nova versão da task
   - Atualiza o serviço
   - Aguarda estabilidade

### Workflow File

Localização: `.github/workflows/aws.yml`

## 📦 Configuração do Container

### Recursos

- **CPU**: 256 unidades (0.25 vCPU)
- **Memória**: 512 MB

### Porta

- **Container Port**: 3001
- **Protocol**: TCP

### Health Check

- **Endpoint**: `/api/status`
- **Intervalo**: 30 segundos
- **Timeout**: 5 segundos
- **Retries**: 3
- **Start Period**: 60 segundos

### Variáveis de Ambiente

```
NODE_ENV=production
PORT=3001
```

## 🔧 Pré-requisitos na AWS

Antes de fazer o primeiro deploy, certifique-se de que os seguintes recursos existem na AWS:

### 1. ECR Repository
```bash
aws ecr create-repository \
  --repository-name jgbioestetica \
  --region sa-east-1
```

### 2. ECS Cluster
```bash
aws ecs create-cluster \
  --cluster-name JGBioesteticaCluster \
  --region sa-east-1
```

### 3. CloudWatch Log Group
```bash
aws logs create-log-group \
  --log-group-name /ecs/jgbioestetica \
  --region sa-east-1
```

### 4. IAM Roles

#### ecsTaskExecutionRole

Este role já deve existir ou ser criado com as seguintes policies:
- `AmazonECSTaskExecutionRolePolicy`

Se não existir:
```bash
aws iam create-role \
  --role-name ecsTaskExecutionRole \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": {"Service": "ecs-tasks.amazonaws.com"},
      "Action": "sts:AssumeRole"
    }]
  }'

aws iam attach-role-policy \
  --role-name ecsTaskExecutionRole \
  --policy-arn arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy
```

### 5. ECS Service

O serviço ECS precisa ser criado manualmente (ou via Terraform/CloudFormation). Exemplo básico:

```bash
# Primeiro, registre a task definition
aws ecs register-task-definition \
  --cli-input-json file://.aws/task-definition.json \
  --region sa-east-1

# Depois, crie o service (ajuste os IDs de subnet e security group)
aws ecs create-service \
  --cluster JGBioesteticaCluster \
  --service-name JGBioesteticaService \
  --task-definition jgbioestetica-task \
  --desired-count 1 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={
    subnets=[subnet-xxxxx,subnet-yyyyy],
    securityGroups=[sg-xxxxx],
    assignPublicIp=ENABLED
  }" \
  --region sa-east-1
```

**IMPORTANTE**: Você precisa configurar:
- **Subnets**: Use subnets públicas se quiser acesso direto
- **Security Groups**: Libere porta 3001 (ou a porta que usar)
- **Load Balancer** (Opcional): Configure um ALB para acesso HTTP/HTTPS

## 🌐 Acesso à Aplicação

### Sem Load Balancer

Se configurou `assignPublicIp=ENABLED`, a aplicação terá um IP público dinâmico. Para encontrá-lo:

```bash
aws ecs list-tasks \
  --cluster JGBioesteticaCluster \
  --service-name JGBioesteticaService \
  --region sa-east-1

aws ecs describe-tasks \
  --cluster JGBioesteticaCluster \
  --tasks <task-arn> \
  --region sa-east-1
```

Acesse: `http://<PUBLIC-IP>:3001`

### Com Application Load Balancer (Recomendado)

1. Crie um **Application Load Balancer**
2. Configure **Target Group** apontando para porta 3001
3. Associe ao ECS Service
4. Configure um domínio no Route 53 (opcional)
5. Configure SSL/TLS com Certificate Manager (opcional)

## 📊 Monitoramento

### CloudWatch Logs

Acesse os logs em:
```
AWS Console → CloudWatch → Log groups → /ecs/jgbioestetica
```

### ECS Console

Monitore o serviço em:
```
AWS Console → ECS → Clusters → JGBioesteticaCluster → Services → JGBioesteticaService
```

## 🔄 Workflow de Deploy

```
1. Push para main
   ↓
2. GitHub Actions inicia
   ↓
3. Build da imagem Docker
   ↓
4. Push para ECR
   ↓
5. Atualiza Task Definition
   ↓
6. ECS faz rolling update
   ↓
7. Health checks verificam a nova versão
   ↓
8. Deploy completo! ✅
```

## ⚠️ Troubleshooting

### Deploy Falha

1. Verifique os logs no CloudWatch
2. Verifique se os secrets estão configurados corretamente
3. Verifique se o ECR repository existe
4. Verifique se o ECS service existe

### Container Não Inicia

1. Verifique os logs do container no CloudWatch
2. Verifique se as variáveis de ambiente estão corretas
3. Verifique se a porta 3001 está correta
4. Verifique o health check endpoint `/api/status`

### Security Group

Certifique-se de que o Security Group permite:
- **Inbound**: Porta 3001 (ou sua porta) de qualquer lugar (0.0.0.0/0) ou do ALB
- **Outbound**: Todo tráfego (para npm install durante build, etc.)

## 💰 Custos Estimados

Com Fargate (0.25 vCPU + 512 MB):
- **São Paulo (sa-east-1)**: ~$15-20/mês rodando 24/7
- **ECR**: Primeiros 500 MB gratuitos, depois ~$0.10/GB/mês

**Dica**: Use Auto Scaling para reduzir custos em horários de baixo tráfego.

## 📚 Referências

- [AWS ECS Documentation](https://docs.aws.amazon.com/ecs/)
- [AWS ECR Documentation](https://docs.aws.amazon.com/ecr/)
- [GitHub Actions AWS Deploy](https://github.com/aws-actions)
