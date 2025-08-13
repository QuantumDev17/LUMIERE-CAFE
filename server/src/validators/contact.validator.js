import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().trim().optional().default(''),
  message: z.string().min(5, 'Message is required'),
});
