import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import router from './router.js';
import {createTables} from './initTables.js';

dotenv.config();
const app = express();
const port = 5000;

app.use(express.json());
app.use('/api', router);

// Создаем пул соединений с базой данных
const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Неизвестная ошибка');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
  createTables();
});

export default db;