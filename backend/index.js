import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import createRouter from './router.js';
import {createTables} from './initTables.js';

// const __filename = url.fileURLToPath(import.meta.url);
// export const __dirname = path.dirname(__filename);

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

app.use(cors());
app.use(express.json());
app.use(express.static('images'));

const router = createRouter(upload);
app.use('/api', router);
// app.use('/images', express.static(path.join(__dirname, 'images')));

// Создаем пул соединений с базой данных
export const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

createRouter(upload);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Неизвестная ошибка');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
  createTables();
});