import { db } from './index.js';

export const createTables = async () => {
  const queries = [
    `
      CREATE TABLE IF NOT EXISTS admin (
        id INT AUTO_INCREMENT PRIMARY KEY,
        login VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `,
    `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        date VARCHAR(30) NOT NULL
      );
    `,
    `
      CREATE TABLE IF NOT EXISTS posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        image VARCHAR(255),
        date DATE NOT NULL,
        isActive BOOLEAN NOT NULL DEFAULT false,
        topPriority BOOLEAN NOT NULL DEFAULT false
      );
    `,
    `
      CREATE TABLE IF NOT EXISTS post_blocks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        post_id INT NOT NULL,
        block_number INT NOT NULL,
        table_name VARCHAR(20) NOT NULL,
        table_id INT NOT NULL
      );
    `,
    `
      CREATE TABLE IF NOT EXISTS title (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL
      );
    `,
    `
      CREATE TABLE IF NOT EXISTS text (
        id INT AUTO_INCREMENT PRIMARY KEY,
        text VARCHAR(2000) NOT NULL
      );
    `,
    `
      CREATE TABLE IF NOT EXISTS title_and_text (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        text VARCHAR(2000) NOT NULL
      );
    `,
    `
      CREATE TABLE IF NOT EXISTS quote (
        id INT AUTO_INCREMENT PRIMARY KEY,
        quote VARCHAR(255) NOT NULL
      );
    `,
    `
      CREATE TABLE IF NOT EXISTS list (
        id INT AUTO_INCREMENT PRIMARY KEY,
        text VARCHAR(255),
        type VARCHAR(255) NOT NULL
      );
    `,
    `
      CREATE TABLE IF NOT EXISTS list_item (
        id INT AUTO_INCREMENT PRIMARY KEY,
        list_id INT NOT NULL,
        item VARCHAR(2000) NOT NULL
      );
    `,
  ];
  try {
    await Promise.all(queries.map(query => db.query(query)));
    console.log('Успешная загрузка таблиц.')
  } catch (err) {
    console.error('Ошибка при создании таблицы.', err);
  }
};