import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../index.js';

class AdminService {
  async createAdmin(body) {
    const { login, password } = body;
    const [existingAdmin] = await db.query('SELECT * FROM admin LIMIT 1');
    if (existingAdmin.length > 0) throw new Error('Администратор уже существует.');

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO admin (login, password) VALUES (?, ?)';
    await db.query(sql, [login, hashedPassword]);
  }
  async checkAdmin({login, password}) {
    const [admin] = await db.query('SELECT login, password FROM admin LIMIT 1');
    if (admin.length === 0) throw new Error('Администратор не найден.');

    const isMatch = login === admin[0].login && await bcrypt.compare(password, admin[0].password);
    if (isMatch) {
      const accessToken = jwt.sign({ login }, process.env.JWT_SECRET, { expiresIn: '10s' });
      return accessToken;
    } else {
      throw new Error('Неправильный логин или пароль.');
    }
  }
  async checkToken(token) {
    const [blacklistedToken] = await db.query('SELECT * FROM token_blacklist WHERE token = ?', [token]);
    if (blacklistedToken.length > 0) throw new Error('Токен был аннулирован.');

    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return true;
    } catch { 
      throw new Error('Срок действия токена истёк.');
    }
  }
  async logout(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const expiresAt = new Date(decoded.exp * 1000);
      const [result] = await db.query('INSERT INTO token_blacklist (token, expiresAt) VALUES (?, ?)', [token, expiresAt]);
      return result.affectedRows > 0;
    } catch (e) {
      throw new Error('Неверный или истёкший токен.');
    }
  }

  async clearExpiredTokens() {
    await db.query('DELETE FROM token_blacklist');
  }
}

export default new AdminService();