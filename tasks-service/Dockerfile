# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e package-lock.json (ou yarn.lock) e instale as dependências
COPY package.json package-lock.json ./
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Execute o build da aplicação NestJS
RUN npm run build

# Exponha a porta do NestJS
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
