# Claude AI Instructions - JG Bioestética Project

Este arquivo contém instruções específicas para o assistente Claude AI ao trabalhar no projeto JG Bioestética.

## 📁 Sobre o Projeto

Este é o repositório do site institucional da JG Bioestética - um projeto Node.js/Express com painel de administração (CMS) customizado para gerenciar conteúdo dinâmico do site.

## 🛠️ Task-Master MCP Tool

**IMPORTANTE**: Neste projeto utilizamos a ferramenta **Task-Master MCP** para gerenciamento de tarefas e planejamento de desenvolvimento.

### Como usar Task-Master:
- Use as funções Task-Master MCP para criar, gerenciar e rastrear tarefas
- Mantenha um registro estruturado de todas as atividades de desenvolvimento
- Utilize tags para organizar tarefas por contexto (features, bugs, refactoring, etc.)
- Sempre documente o progresso das tarefas para manter visibilidade do projeto

## 🎨 Identidade Visual

### Paleta de Cores:
- **Verde Musgo (Principal)**: `#556B2F`
- **Bege (Fundo)**: `#F5F5DC` 
- **Amarelo Claro (Destaque)**: `#EDE5B0`
- **Dourado (Acentos)**: `#E2B850`

## 🏗️ Tecnologias do Projeto

- **Backend**: Node.js, Express.js
- **View Engine**: EJS (Embedded JavaScript)
- **Banco de Dados**: LowDB (padrão) ou SQLite (configurável)
- **Upload de Arquivos**: Multer
- **Otimização de Imagens**: Sharp
- **Segurança**: csurf (CSRF), bcrypt.js (hashing), express-validator (validações)
- **Desenvolvimento**: nodemon

## 📂 Estrutura Principal

```
src/
├── app.js              # Configuração principal da aplicação
├── server.js           # Inicialização do servidor
├── config/             # Configurações gerais
├── middlewares/        # Middlewares de autenticação, CSRF, validação
├── services/           # Serviços (imagens, cache)
├── models/             # Modelos de dados (Content, User)
├── controllers/        # Controladores MVC
├── routes/             # Rotas da aplicação
├── views/              # Templates EJS
└── public/             # Arquivos estáticos
```

## 🚀 Comandos Importantes

```bash
# Desenvolvimento
npm run dev

# Produção
npm start

# Popular banco de dados
npm run seed

# Lint (verificar se existe)
npm run lint

# Testes (verificar se existe)
npm test
```

## 🔐 Configuração de Ambiente

Arquivo `.env` necessário com:
- `SESSION_SECRET`: Segredo para sessões
- `BASE_URL`: URL base da aplicação
- `ADMIN_USER`: Usuário administrador
- `ADMIN_PASSWORD`: Senha do administrador

## 📝 Diretrizes de Desenvolvimento

1. **Segurança**: Sempre manter proteções CSRF e validações
2. **MVC Pattern**: Seguir a estrutura MVC existente
3. **Otimização**: Usar Sharp para processamento de imagens
4. **Convenções**: Manter consistência com o código existente
5. **Task Management**: Utilizar Task-Master MCP para todas as atividades

## 🎯 Acesso ao Painel Admin

- URL: `/login`
- Painel: `/admin` (após autenticação)
- Gerencia: Hero, Sobre, Serviços, Galeria, Contato

---

**Nota**: Este projeto foca em funcionalidades de bioestética e deve manter um design elegante e profissional condizente com o segmento.