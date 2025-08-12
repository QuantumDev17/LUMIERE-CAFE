import nodemailer from 'nodemailer';
import { env } from '../config/env.js';

let transporter = null;

if (env.DEV_EMAIL_SINK === 'console') {
  // dev: print emails instead of sending
  transporter = {
    sendMail: async (opts) => {
      console.log('--- EMAIL (dev console) ---');
      console.log('From:', opts.from);
      console.log('To:', opts.to);
      console.log('Subject:', opts.subject);
      console.log('Text:', opts.text);
      console.log('HTML:', opts.html);
      console.log('---------------------------');
      return { messageId: 'dev-console' };
    },
  };
} else {
  transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
  });
}

export async function sendContactEmail({ name, email, phone, message }) {
  const subject = `New contact from ${name}`;
  const text = `Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}

${message}
`;
  const html = `
    <h2>New contact</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone || 'N/A'}</p>
    <pre style="font-family:inherit;white-space:pre-wrap">${message}</pre>
  `;
  return transporter.sendMail({
    from: env.EMAIL_FROM,
    to: env.EMAIL_TO,
    subject,
    text,
    html,
  });
}
