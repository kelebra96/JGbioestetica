# Usando uma imagem Node.js oficial
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências de produção
RUN npm ci --only=production

# Copiar código fonte
COPY . .

# Expor porta (padrão 3001, mas pode ser sobrescrito via env)
EXPOSE 3001

# Variável de ambiente para produção
ENV NODE_ENV=production
ENV PORT=3001

# Comando para iniciar o servidor
CMD ["node", "src/server.js"]
