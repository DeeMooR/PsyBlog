import { db } from './index.js';

export const createTables = async () => {
  const posts = `
    CREATE TABLE IF NOT EXISTS posts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      image VARCHAR(255),
      date DATE NOT NULL,
      isActive BOOLEAN NOT NULL DEFAULT false
    );
  `;
  const post_blocks = `
    CREATE TABLE IF NOT EXISTS post_blocks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      post_id INT NOT NULL,
      block_number INT NOT NULL,
      table_name VARCHAR(20) NOT NULL,
      table_id INT NOT NULL
    );
  `;
  const title = `
    CREATE TABLE IF NOT EXISTS title (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL
    );
  `;
  const text = `
    CREATE TABLE IF NOT EXISTS text (
      id INT AUTO_INCREMENT PRIMARY KEY,
      text VARCHAR(2000) NOT NULL
    );
  `;
  const title_and_text = `
    CREATE TABLE IF NOT EXISTS title_and_text (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      text VARCHAR(2000) NOT NULL
    );
  `;
  const quote = `
    CREATE TABLE IF NOT EXISTS quote (
      id INT AUTO_INCREMENT PRIMARY KEY,
      quote VARCHAR(255) NOT NULL
    );
  `;
  const list = `
    CREATE TABLE IF NOT EXISTS list (
      id INT AUTO_INCREMENT PRIMARY KEY,
      text VARCHAR(255),
      type VARCHAR(255) NOT NULL
    );
  `;
  const list_item = `
    CREATE TABLE IF NOT EXISTS list_item (
      id INT AUTO_INCREMENT PRIMARY KEY,
      list_id INT NOT NULL,
      item VARCHAR(2000) NOT NULL
    );
  `;
  try {
    await db.query(posts);
    await db.query(post_blocks);
    await db.query(title);
    await db.query(text);
    await db.query(title_and_text);
    await db.query(quote);
    await db.query(list);
    await db.query(list_item);
    console.log('Успешная загрузка таблиц.')
  } catch (err) {
    console.error('Ошибка при создании таблицы.', err);
  }
};