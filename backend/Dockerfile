FROM node:18-alpine

WORKDIR /usr/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
