import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import cron from 'node-cron';
import { fileURLToPath } from 'url';
import createRouter from './src/router.js';
import { createTables } from './src/initTables.js';
import { backupDatabase, clearExpiredTokens } from './src/backup.js';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
export const upload = multer({ storage: storage });

dotenv.config();
const port = 5000;
const app = express();

const router = createRouter(upload);
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use('/images', express.static('images'));

export const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

app.use((err, res) => {
  console.error(err.stack);
  res.status(500).send('Неизвестная ошибка');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
  createTables();
});


cron.schedule('00 12 * * *', async () => {
  console.log('Запуск очистки истекших токенов...');
  await clearExpiredTokens();
  console.log('Запуск создания бэкапа...');
  await backupDatabase();
});