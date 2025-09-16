# JG Bioestética - Site Institucional & CMS

Este é o repositório do site institucional da JG Bioestética. O projeto foi desenvolvido com Node.js e Express, e inclui um painel de administração (CMS) customizado para gerenciar todo o conteúdo do site de forma dinâmica e segura.

## ✨ Principais Funcionalidades

- **Painel de Administração (CMS)**: Uma área segura (`/admin`) para gerenciar o conteúdo das seções do site sem precisar alterar o código.
- **Gerenciamento de Conteúdo Dinâmico**: Edite textos, títulos, imagens e listas para as seções: Hero, Sobre, Serviços, Galeria e Contato.
- **Autenticação Segura**: Login e logout para o administrador com armazenamento de senha em hash.
- **Upload e Otimização de Imagens**: Envio de imagens através do painel com processamento (resize/compressão) automático para melhor performance.
- **Segurança**: Proteção contra ataques CSRF em todos os formulários e validação de dados de entrada.
- **Estrutura Organizada**: O código segue o padrão MVC (Model-View-Controller), separando responsabilidades e facilitando a manutenção.

## 🎨 Paleta de Cores

A identidade visual do site é baseada nas seguintes cores:

| Verde Musgo (Principal) | Bege (Fundo) | Amarelo Claro (Destaque) | Dourado (Acentos) |
| :---: | :---: | :---: | :---: |
| <img src="https://placehold.co/150x50/556B2F/556B2F.png" alt="#556B2F"> | <img src="https://placehold.co/150x50/F5F5DC/F5F5DC.png" alt="#F5F5DC"> | <img src="https://placehold.co/150x50/EDE5B0/EDE5B0.png" alt="#EDE5B0"> | <img src="https://placehold.co/150x50/E2B850/E2B850.png" alt="#E2B850"> |
| `#556B2F` | `#F5F5DC` | `#EDE5B0` | `#E2B850` |

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js, Express.js
- **View Engine**: EJS (Embedded JavaScript)
- **Banco de Dados**: LowDB (padrão) ou SQLite (configurável)
- **Upload de Arquivos**: Multer
- **Otimização de Imagens**: Sharp
- **Segurança**: csurf (CSRF), bcrypt.js (hashing), express-validator (validações)
- **Desenvolvimento**: nodemon

## 📂 Estrutura do Projeto

<details>
<summary>Clique para expandir e ver a árvore de diretórios</summary>

```
jgbioestetica-site/
│
├── .env
├── package.json
├── README.md
│
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── config/
│   │   ├── index.js
│   │   └── multer.js
│   │
│   ├── middlewares/
│   │   ├── auth.js
│   │   ├── csrf.js
│   │   └── validate.js
│   │
│   ├── services/
│   │   ├── imageService.js
│   │   └── cacheService.js
│   │
│   ├── models/
│   │   ├── db.js
│   │   ├── Content.js
│   │   └── User.js
│   │
│   ├── controllers/
│   │   ├── public.controller.js
│   │   ├── admin.controller.js
│   │   └── auth.controller.js
│   │
│   ├── routes/
│   │   ├── public.routes.js
│   │   ├── admin.routes.js
│   │   └── auth.routes.js
│   │
│   ├── views/
│   │   ├── layout.ejs
│   │   ├── partials/
│   │   ├── public/
│   │   └── admin/
│   │
│   ├── public/
│   │   ├── css/
│   │   ├── js/
│   │   └── uploads/
│   │
│   └── seed/
│       └── content.seed.json
│
└── storage/
    └── db.json
```

</details>

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/jgbioestetica-site.git
    cd jgbioestetica-site
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto, copiando o conteúdo de `.env.example` (se houver) ou usando o modelo abaixo:

    ```env
    # Segredo para a sessão de usuário
    SESSION_SECRET=seu_segredo_de_sessao_super_secreto

    # URL base da aplicação
    BASE_URL=http://localhost:3000

    # Credenciais do administrador
    ADMIN_USER=admin
    ADMIN_PASSWORD=senha_inicial_forte
    ```
    > **Importante**: Altere `SESSION_SECRET` e `ADMIN_PASSWORD` para valores seguros em um ambiente de produção.

4.  **Popule o banco de dados (opcional):**
    Para carregar o conteúdo inicial no banco de dados, execute o script de seed:
    ```bash
    npm run seed
    ```

5.  **Inicie o servidor:**
    ```bash
    # Para desenvolvimento (com recarregamento automático)
    npm run dev

    # Para produção
    npm start
    ```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## 🔑 Acesso ao Painel de Administração

-   **URL**: [http://localhost:3000/login](http://localhost:3000/login)
-   **Usuário**: O valor que você definiu em `ADMIN_USER` no arquivo `.env`.
-   **Senha**: O valor que você definiu em `ADMIN_PASSWORD` no arquivo `.env`.

## 📜 Scripts Disponíveis

-   `npm start`: Inicia o servidor em modo de produção.
-   `npm run dev`: Inicia o servidor em modo de desenvolvimento usando `nodemon`.
-   `npm run seed`: Executa o script para popular o banco de dados com o conteúdo do arquivo `src/seed/content.seed.json`.

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
