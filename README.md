# Plataforma de Gerenciamento de Tarefas

Uma aplicação de gerenciamento de tarefas construída com NestJS, onde você pode criar, editar, visualizar e excluir tarefas. Além disso, a aplicação notifica o usuário sobre tarefas pendentes.

## Tecnologias Utilizadas

- **NestJS**: Framework para construir aplicações Node.js eficientes e escaláveis.
- **TypeScript**: Linguagem de programação que é um superconjunto de JavaScript.
- **Prisma**: ORM (Object-Relational Mapping) que simplifica o acesso ao banco de dados.
- **SQLite**: Banco de dados leve e de fácil configuração.
- **Docker**: Para criação e gerenciamento de contêineres.
- **Docker Compose**: Para orquestração dos contêineres da aplicação.

## Estrutura do Projeto

- **/reminders-service**
  - **em constrção...**
- **tasks_service**
  - **src**
    

  - **/tasks** 
  - tasks.controller.ts # Controlador para gerenciar as tarefas - tasks.service.ts # Lógica de negócios para tarefas - tasks.module.ts # Módulo de tarefas /notifications - notifications.service.ts # Serviço para gerenciar notificações - notifications.module.ts # Módulo de notificações

app.module.ts # Módulo principal da aplicação
main.ts # Ponto de entrada da aplicação


## Funcionalidades

- **Gerenciamento de Tarefas**:
  - Criar novas tarefas.
  - Editar tarefas existentes.
  - Visualizar tarefas.
  - Excluir tarefas.

- **Notificações**:
  - Notificações automáticas para tarefas pendentes.

## Como Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu_usuario/nome_do_repositorio.git
   cd nome_do_repositorio


Instale as dependências:

bash
Copy code
npm install
Configure o ambiente:

Crie um arquivo .env na raiz do projeto e adicione suas variáveis de ambiente (se necessário).
Execute com Docker:

Certifique-se de que o Docker e o Docker Compose estejam instalados.
Para iniciar a aplicação com Docker Compose, execute:
bash
Copy code
docker-compose up --build
Acesse a aplicação:

A aplicação estará disponível em http://localhost:3000.
Como Contribuir
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou um pull request.

Licença
Este projeto está licenciado sob a MIT License.

Contato
Se você tiver alguma dúvida ou sugestão, entre em contato:

Seu Nome: amaral.lucas.lotar@gmail.com
LinkedIn: 