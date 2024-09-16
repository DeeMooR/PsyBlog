import { db } from './index.js';
import { sendEmail } from './email.js';

class UserService {
  async create(body) {
    const { name, email, phone } = body;
    const sql = 'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)';
    const [user] = await db.query(sql, [name, email, phone]);
    await sendEmail(body);
    return user.insertId;
  }
}

export default new UserService();