FROM node:18-alpine

WORKDIR /usr/backend

# COPY package*.json ./

COPY . .

RUN npm install --production

EXPOSE 5000

CMD ["npm", "start"]
