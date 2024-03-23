# Dockerfile : aplikasi di convert jadi image docker

FROM node:18-alpine3.19

COPY package*.json ./

WORKDIR /app

# Copy all files
COPY . .

RUN npm install

EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "docker"]