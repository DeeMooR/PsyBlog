import db from './index.js';
import PostFieldsService from "./PostFieldsService.js";

class PostService {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM posts');
    return rows;
  }
  async getOne(id) {
    const [response] = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
    return response[0];
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
    const { title, description, image, date, isActive } = body;
    const sql = 'INSERT INTO posts (title, description, image, date, isActive) VALUES (?, ?, ?, ?, ?)';
    const [result] = await db.query(sql, [title, description, image, date, isActive]);
    const id = result.insertId;
    return this.getOne(id);
  }
  async update(id, body) {
    const { title, description, image, date, isActive } = body;
    const sql = `UPDATE posts SET title = ?, description = ?, image = ?, date = ?, isActive = ? WHERE id = ?`;
    const [result] = await db.query(sql, [title, description, image, date, isActive, id]);
    if (result.affectedRows === 0) throw new Error(`Пост с ID ${id} не найден`);
    return this.getOne(id);
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