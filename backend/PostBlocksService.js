import { db } from './index.js';

class PostFieldsService {
  async getOne(id) {
    const [response] = await db.query('SELECT * FROM post_blocks WHERE id = ?', [id]);
    return response[0];
  }
  async getOnePostId(post_id) {
    const [fields] = await db.query('SELECT * FROM post_blocks WHERE post_id = ?', [post_id]);
    return fields;
  }
  async getList(table_id) {
    const [listTable] = await db.query(`SELECT * FROM list WHERE id = ?`, [table_id]);
    const {id: list_id, text, type} = listTable[0];
    const [ItemTable] = await db.query(`SELECT * FROM list_item WHERE list_id = ?`, [list_id]);
    const items = ItemTable.map(({ item }) => item);
    return {text, type, items};
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
  async createListItem(list_id, item) {
    const sql = `INSERT INTO list_item (list_id, item) VALUES (?, ?)`;
    await db.query(sql, [list_id, item]);
  }
  async createList(post_id, body) {
    const sql = `INSERT INTO list (text, type) VALUES (?, ?)`;
    const [result] = await db.query(sql, [body.text, body.type]);
    const list_id = result.insertId;
 
    body.items.map((item) => {
      this.createListItem(list_id, item);
    });

    return this.create({post_id, table_name: 'list', table_id: list_id});
  }
  async updateList(table_id, body) {
    if ('text' in body) await db.query(`UPDATE list SET text = ? WHERE id = ?`, [body.text, table_id]);
    if ('type' in body) await db.query(`UPDATE list SET type = ? WHERE id = ?`, [body.type, table_id]);
    if ('items' in body) {
      await db.query('DELETE FROM list_item WHERE list_id = ?', [table_id]);
      body.items.map((item) => {
        this.createListItem(table_id, item);
      });
    }
  }
  async updateBlock(post_id, block_number, body) {
    const fields = Object.keys(body).map(key => `${key} = ?`);
    const values = Object.values(body);

    const [response] = await db.query('SELECT * FROM post_blocks WHERE post_id = ? AND block_number = ?', [post_id, block_number]);
    const {table_name, table_id} = response[0];

    if (table_name === 'list') {
      return this.updateList(table_id, body);
    }

    const [block] = await db.query(`UPDATE ${table_name} SET ${fields.join(', ')} WHERE id = ?`, [...values, table_id]);
    return block[0];
  }
  async deleteBlock(post_id, block_number) {
    const [response] = await db.query('DELETE FROM post_blocks WHERE post_id = ? AND block_number = ?', [post_id, block_number]);
    return response.affectedRows > 0;
  }
}

export default new PostFieldsService();