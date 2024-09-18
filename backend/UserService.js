import { db } from './index.js';
import { sendEmail } from './email.js';

class UserService {
  async getAll() {
    const [users] = await db.query('SELECT * FROM users');
    return users;
  }
  async create(body) {
    const { name, email, phone } = body;
    const sql = 'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)';
    const [user] = await db.query(sql, [name, email, phone]);
    await sendEmail(body);
    return user.insertId;
  }
  async delete(id) {
    const [response] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    return response.affectedRows > 0;
  }
}

export default new UserService();