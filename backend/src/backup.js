import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { formatISOToDateTime } from './helpers.js';
import { db, __dirname } from '../index.js';

export const backupDatabase = () => {
  try {
    const backupFilePath = path.join(__dirname, 'backups', `backup-${formatISOToDateTime(new Date())}.sql`);

    const backupCommand = `mysqldump -u ${process.env.MYSQL_USER} -p${process.env.MYSQL_PASSWORD} ${process.env.MYSQL_DATABASE}`;

    const output = fs.createWriteStream(backupFilePath);
    const child = exec(backupCommand);
    child.stdout.pipe(output);

    child.on('close', (code) => {
      if (code !== 0) console.error(`Процесс завершился с кодом: ${code}`);
      else console.log(`Бэкап успешно создан: ${backupFilePath}`);
    });
  } catch (e) {
    console.error(`Ошибка: ${e.message}`);
  }
};

export const clearExpiredTokens = async () => {
  try {
    await db.query('DELETE FROM token_blacklist');
    console.log('Очистка завершена.');
  } catch (error) {
    console.error('Ошибка при очистке токенов:', error.message);
  }
}