import { db } from './index.js';

class PostBlocksService {
  async getBlocksPostId(post_id) {
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
  async createListItem(list_id, item) {
    const sql = `INSERT INTO list_item (list_id, item) VALUES (?, ?)`;
    await db.query(sql, [list_id, item]);
  }
  async createList(body) {
    const sql = `INSERT INTO list (text, type) VALUES (?, ?)`;
    const [result] = await db.query(sql, [body.text, body.type]);
    const list_id = result.insertId;
    body.items.map(async (item) => {
      await this.createListItem(list_id, item);
    });
    return list_id;
  }
  async createTable(table_name, body) {
    const fields = Object.keys(body);
    const values = Object.values(body);
    const fieldNames = fields.join(', ');
    const placeholders = fields.map(() => '?').join(', ');
    const sql = `INSERT INTO ${table_name} (${fieldNames}) VALUES (${placeholders})`;
    const [result] = await db.query(sql, values);
    const table_id = result.insertId;
    return table_id;
  }
  async createBlock(post_id, table_name, body) {
    const table_id = (table_name === 'list') ? await this.createList(body) : await this.createTable(table_name, body)
    
    const blocks = await this.getBlocksPostId(post_id);
    let max_number = blocks.length ? Math.max(...blocks.map(block => block.block_number)) : 0;
    const sql = 'INSERT INTO post_blocks (post_id, block_number, table_name, table_id) VALUES (?, ?, ?, ?)';
    await db.query(sql, [post_id, ++max_number, table_name, table_id]);
  }
  async updateList(table_id, body) {
    if ('text' in body) await db.query(`UPDATE list SET text = ? WHERE id = ?`, [body.text, table_id]);
    if ('type' in body) await db.query(`UPDATE list SET type = ? WHERE id = ?`, [body.type, table_id]);
    if ('items' in body) {
      await db.query('DELETE FROM list_item WHERE list_id = ?', [table_id]);
      body.items.map(async (item) => {
        await this.createListItem(table_id, item);
      });
    }
  }
  async updateBlock(post_id, block_number, body) {
    const fields = Object.keys(body).map(key => `${key} = ?`);
    const values = Object.values(body);

    const [response] = await db.query('SELECT * FROM post_blocks WHERE post_id = ? AND block_number = ?', [post_id, block_number]);
    const {table_name, table_id} = response[0];

    if (table_name === 'list') {
      await this.updateList(table_id, body);
    } else {
      await db.query(`UPDATE ${table_name} SET ${fields.join(', ')} WHERE id = ?`, [...values, table_id]);
    }
  }
  async deleteBlock(post_id, block_number) {
    await db.query('DELETE FROM post_blocks WHERE post_id = ? AND block_number = ?', [post_id, block_number]);
  }
}

export default new PostBlocksService();