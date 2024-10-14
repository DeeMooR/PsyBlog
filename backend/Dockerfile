FROM node:18.17.0

WORKDIR /usr/backend

COPY ./backend/package*.json ./

RUN npm install

COPY ./backend .

EXPOSE 5000

CMD ["npm", "start"]