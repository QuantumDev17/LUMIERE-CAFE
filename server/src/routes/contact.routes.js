import { Router } from 'express';
import { validate } from '../validators/validate.js';
import { contactSchema } from '../validators/contact.validator.js';
import { createMessage } from '../controllers/contact.controller.js';

const r = Router();
r.post('/', validate(contactSchema), createMessage);

export default r;
