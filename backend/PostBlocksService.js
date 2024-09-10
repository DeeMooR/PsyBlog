import db from './index.js';

class PostFieldsService {
  async getOne(id) {
    const [response] = await db.query('SELECT * FROM post_blocks WHERE id = ?', [id]);
    return response[0];
  }
  async getOnePostId(post_id) {
    const [fields] = await db.query('SELECT * FROM post_blocks WHERE post_id = ?', [post_id]);
    return fields;
  }
  async create(body) {
    const { post_id, table_name, table_id } = body;
    const sql = 'INSERT INTO post_blocks (post_id, table_name, table_id) VALUES (?, ?, ?)';
    const [result] = await db.query(sql, [post_id, table_name, table_id]);
    const id = result.insertId;
    return this.getOne(id);
  }
}

export default new PostFieldsService();