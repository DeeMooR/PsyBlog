import { db } from './index.js';
import { objsEqual } from './helpers.js';

class AdminService {
  async create(body) {
    const { login, password } = body;
    const sql = 'INSERT INTO admin (login, password) VALUES (?, ?)';
    const [admin] = await db.query(sql, [login, password]);
    return admin.insertId;
  }
  async check(body) {
    const [admin] = await db.query('SELECT login, password FROM admin');
    const bool = objsEqual(body, admin[0])
    return bool;
  }
}

export default new AdminService();