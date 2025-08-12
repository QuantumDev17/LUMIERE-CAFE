export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const msg = result.error.issues?.[0]?.message || 'Invalid request';
    return res.status(400).json({ error: msg });
  }
  req.body = result.data; // sanitized
  next();
};
