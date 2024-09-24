import { db } from '../index.js';
import { sendEmail } from '../email.js';

class UserService {
  async getAllUsers() {
    const [users] = await db.query('SELECT * FROM users');
    return users.reverse();
  }
  async createUser(body) {
    const { name, email, phone, date } = body;
    const sql = 'INSERT INTO users (name, email, phone, date) VALUES (?, ?, ?, ?)';
    await db.query(sql, [name, email, phone, date]);
    sendEmail(body);
  }
  async deleteUser(id) {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    if (result.affectedRows === 0) throw new Error('Пользователь не найден.');
  }
}

export default new UserService();