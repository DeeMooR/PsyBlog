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
    const blocks = await this.getOnePostId(post_id);
    let max_number = blocks.length ? Math.max(...blocks.map(block => block.block_number)) : 0;
    const sql = 'INSERT INTO post_blocks (post_id, block_number, table_name, table_id) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(sql, [post_id, ++max_number, table_name, table_id]);
    const id = result.insertId;
    return this.getOne(id);
  }
  async deleteBlock(post_id, block_number) {
    const [response] = await db.query('DELETE FROM post_blocks WHERE post_id = ? AND block_number = ?', [post_id, block_number]);
    return response.affectedRows > 0;
  }
}

export default new PostFieldsService();