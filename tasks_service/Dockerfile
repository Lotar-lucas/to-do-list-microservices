# Use the official Node.js image as the base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY ./tasks_service/package.json ./tasks_service/package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY /tasks_service ./

# Run the NestJS application build
RUN npm run build

# Expose the NestJS port
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "start:prod"]