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

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = ['http://localhost:3000', 'http://87.228.19.145'];
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

const router = createRouter(upload);
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
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
  console.log(`Сервер запущен на порте ${port}`);
  // чтобы бд точно успела загрузиться
  setTimeout(async () => {
    await createTables();
  }, 5000);
});


cron.schedule('00 12 * * *', async () => {
  console.log('Запуск очистки истекших токенов...');
  await clearExpiredTokens();
  console.log('Запуск создания бэкапа...');
  await backupDatabase();
});