# Node.js official image as the base image
FROM node:18

# working directory inside the container
WORKDIR /app

# Copying package.json and package-lock.json to the working directory
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copying the rest of the application code to the working directory
COPY . .

# Exposing the port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
