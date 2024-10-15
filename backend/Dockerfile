FROM node:18.17.0

WORKDIR /usr/backend

# COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]
