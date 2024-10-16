# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY ./tasks_service/package.json ./tasks_service/package-lock.json ./


# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY /tasks_service ./

# Execute o build da aplicação NestJS
RUN npm run build

# Exponha a porta do NestJS
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
