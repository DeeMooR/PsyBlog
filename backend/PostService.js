import db from './index.js';
import PostFieldsService from "./PostBlocksService.js";

class PostService {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM posts');
    return rows;
  }
  async getOne(id) {
    const [response] = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
    if (!response.length) throw new Error(`Статья с ID ${id} не найден`);
    return response[0];
  }
  async getFullPost(id) {
    let post = await this.getOne(id);
    post.blocks = [];
    const [post_blocks] = await db.query('SELECT table_name, table_id FROM post_blocks WHERE post_id = ?', [id]);
    const blocksPromises = post_blocks.map(async ({ table_name, table_id }) => {
      const [block] = await db.query(`SELECT * FROM ${table_name} WHERE id = ${table_id}`);
      const {id, ...fields} = block[0];
      return {table_name, fields: {...fields}};
    });
    post.blocks = await Promise.all(blocksPromises);
    return post;
  }
  async getShortPosts() {
    const [rows] = await db.query('SELECT id, title, image FROM posts WHERE isActive = true');
    return rows;
  }
  async getShortPostsAdmin() {
    const [rows] = await db.query('SELECT id, title, image, isActive FROM posts');
    return rows;
  }
  async create(body) {
    const { title, image, date, isActive } = body;
    const sql = 'INSERT INTO posts (title, image, date, isActive) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(sql, [title, image, date, isActive]);
    const id = result.insertId;
    return this.getFullPost(id);
  }
  async update(id, body) {
    const fields = Object.keys(body).map(key => `${key} = ?`);
    const values = Object.values(body);
    if (fields.length === 0) throw new Error('Нет данных для обновления');
    const sql = `UPDATE posts SET ${fields.join(', ')} WHERE id = ?`;
    const [result] = await db.query(sql, [...values, id]);
    if (result.affectedRows === 0) throw new Error(`Статья с ID ${id} не найден`);
    return this.getFullPost(id);
  }
  async delete(id) {
    const [response] = await db.query('DELETE FROM posts WHERE id = ?', [id]);
    return response.affectedRows > 0;
  }
  async addBlock(post_id, table_name, body) {
    const fields = Object.keys(body);
    const values = Object.values(body);

    const fieldNames = fields.join(', ');
    const placeholders = fields.map(() => '?').join(', ');
    const sql = `INSERT INTO ${table_name} (${fieldNames}) VALUES (${placeholders})`;
    const [result] = await db.query(sql, values);
    const table_id = result.insertId;
    return PostFieldsService.create({post_id, table_name, table_id})
  }
}

export default new PostService();