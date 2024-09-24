import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

const getMailOptions = (body) => {
  return {
    from: process.env.EMAIL_USER,
    to: 'deemoor4@gmail.com',
    subject: 'Новая заявка на консультацию!',
    html: `
      <h2>Заявка на консультацию</h2>
      <table>
        <tr>
          <td>Имя</td>
          <td>${body.name}</td>
        </td>
        <tr>
          <td>Почта</td>
          <td>${body.email}</td>
        </tr>
        <tr>
          <td>Телефон</td>
          <td>${body.phone}</td>
        </tr>
      </table>
    `
  }
}

export const sendEmail = async (body) => {
  await transporter.sendMail(getMailOptions(body));
};