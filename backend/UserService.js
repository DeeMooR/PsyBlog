import { db } from './index.js';
import { sendEmail } from './email.js';

class UserService {
  async getAll() {
    const [users] = await db.query('SELECT * FROM users');
    return users.reverse();
  }
  async create(body) {
    const { name, email, phone, date } = body;
    const sql = 'INSERT INTO users (name, email, phone, date) VALUES (?, ?, ?, ?)';
    const [user] = await db.query(sql, [name, email, phone, date]);
    await sendEmail(body);
    return user.insertId;
  }
  async delete(id) {
    const [response] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    return response.affectedRows > 0;
  }
}

export default new UserService();