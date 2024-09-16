import { db } from './index.js';
import { promises as fsPromises } from 'fs';
import { formatISOToDate, postWithTrueDate } from './helpers.js';
import PostFieldsService from "./PostBlocksService.js";

class PostService {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM posts');
    const posts = rows.map(post => postWithTrueDate(post));
    return posts;
  }
  async getOne(id) {
    const [response] = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
    if (!response.length) throw new Error(`Статья с ID ${id} не найден`);
    const post = response[0];
    return postWithTrueDate(post);
  }
  async getFullPost(id) {
    let post = await this.getOne(id);
    post.blocks = [];
    const [post_blocks] = await db.query('SELECT table_name, block_number, table_id FROM post_blocks WHERE post_id = ?', [id]);
    const sorted_blocks = post_blocks.sort((a, b) => a.block_number - b.block_number);
    const blocksPromises = sorted_blocks.map(async ({ table_name, block_number, table_id }) => {
      if (table_name === 'list') {
        const fields = await PostFieldsService.getList(table_id);
        return {table_name, block_number, fields}
      }
      const [block] = await db.query(`SELECT * FROM ${table_name} WHERE id = ${table_id}`);
      const {id, ...fields} = block[0];
      return {table_name, block_number, fields: {...fields}};
    });
    post.blocks = await Promise.all(blocksPromises);
    return post;
  }
  async getShortPosts() {
    const [rows] = await db.query('SELECT id, title, image FROM posts WHERE isActive = true');
    return rows;
  }
  async getShortPostsTop() {
    const [rows] = await db.query('SELECT id, title, image FROM posts WHERE topPriority = true AND isActive = true');
    return rows;
  }
  async getShortPostsAdmin() {
    const [rows] = await db.query('SELECT id, title, image, isActive FROM posts');
    return rows;
  }
  async create(body) {
    const { title, isActive, topPriority } = body;
    const date = formatISOToDate(body.date);
    const sql = 'INSERT INTO posts (title, date, isActive, topPriority) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(sql, [title, date, isActive, topPriority]);
    const id = result.insertId;
    return this.getFullPost(id);
  }
  async createImage(post_id, image) {
    await db.query(`UPDATE posts SET image = ? WHERE id = ?`, [image, post_id]);
    return this.getFullPost(post_id);
  }
  async updateImage(post_id, image) {
    const [post] = await db.query('SELECT image FROM posts WHERE id = ?', [post_id]);
    const url = new URL(post[0].image);
    const filePath = url.pathname.substring(1);
    try {
      await fsPromises.unlink(filePath);
      await db.query('UPDATE posts SET image = ? WHERE id = ?', [image, post_id]);
    } catch (err) {
      throw new Error(`Ошибка при обновлении изображения: ${err.message}`);
    }
    return this.getFullPost(post_id);
  }
  async update(id, body) {
    let data = {...body}
    if (body.date) {
      const date = formatISOToDate(body.date);
      data.date = date;
    }
    
    const fields = Object.keys(data).map(key => `${key} = ?`);
    const values = Object.values(data);
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
    if (table_name === 'list') {
      return PostFieldsService.createList(post_id, body)
    }

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