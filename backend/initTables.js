import db from './index.js';

export const createTables = async () => {
  const posts = `
    CREATE TABLE IF NOT EXISTS posts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      date VARCHAR(255) NOT NULL
    );
  `;
  const postFields = `
    CREATE TABLE IF NOT EXISTS post_fields (
      id INT AUTO_INCREMENT PRIMARY KEY,
      post_id INT NOT NULL,
      table_name VARCHAR(20) NOT NULL,
      table_id INT NOT NULL
    );
  `;
  try {
    await db.query(posts);
    await db.query(postFields);
    console.log('Успешная загрузка таблиц.')
  } catch (err) {
    console.error('Ошибка при создании таблицы.', err);
  }
};