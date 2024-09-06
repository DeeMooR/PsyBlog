import db from './index.js';

class PostService {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM posts');
    return rows;
  }
  async getOne(id) {
    const [response] = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
    return response[0];
  }
  async create(body) {
    const { title, description, image, date } = body;
    const sql = 'INSERT INTO posts (title, description, image, date) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(sql, [title, description, image, date]);
    const id = result.insertId;
    return getOne(id);
  }
  async addBLock(params, body) {
    const { title, description, image, date } = body;
    const sql = 'INSERT INTO posts (title, description, image, date) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(sql, [title, description, image, date]);
    const id = result.insertId;
    return getOne(id);
  }
  async addBlock(params, body) {
    const fields = Object.keys(body);
    const values = Object.values(body);

    const fieldNames = fields.join(', ');
    const placeholders = fields.map(() => '?').join(', ');
    const sql = `INSERT INTO posts (${fieldNames}) VALUES (${placeholders})`;
    const [result] = await db.query(sql, values);
    const id = result.insertId;
    
  }
}

export default new PostService();