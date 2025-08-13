import { prisma } from '../prisma.js';
import { sendContactEmail } from '../services/email.service.js';
import { env } from '../config/env.js';

export async function createMessage(req, res, next) {
  try {
    const { name, email, phone, message } = req.body;

    // save to DB (optional but recommended)
    const saved = await prisma.contactMessage.create({
      data: { name, email, phone, message },
      select: { id: true, createdAt: true },
    });

    // send email notification (dev will log to console)
    await sendContactEmail({ name, email, phone, message });

    return res.status(201).json({
      ok: true,
      id: saved.id,
      createdAt: saved.createdAt,
      deliveredTo: env.DEV_EMAIL_SINK === 'console' ? 'console' : env.EMAIL_TO
    });
  } catch (err) {
    next(err);
  }
}
