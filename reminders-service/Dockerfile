# Use a versão oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de configuração e instale as dependências
COPY package.json package-lock.json ./
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta do serviço
EXPOSE 3001

# Comando para rodar o serviço
CMD ["npm", "start"]
