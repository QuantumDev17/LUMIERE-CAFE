import { Product } from '../models/Product.js';

// GET /api/products
export const getProducts = async (req, res) => {
  const {
    q,
    category,
    sort = 'createdAt', // 'price', '-price', 'bestSelling'
    page = 1,
    limit = 12
  } = req.query;

  const filter = {};
  if (category) filter.category = category;
  if (q) filter.$text = { $search: q };

  const sortMap = {
    createdAt: { createdAt: -1 },
    price: { price: 1 },
    '-price': { price: -1 },
    bestSelling: { salesCount: -1, createdAt: -1 },
    title: { title: 1 }
  };
  const sortSpec = sortMap[sort] || { createdAt: -1 };

  const skip = (Number(page) - 1) * Number(limit);
  const [items, total] = await Promise.all([
    Product.find(filter).sort(sortSpec).skip(skip).limit(Number(limit)),
    Product.countDocuments(filter)
  ]);

  res.json({ items, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
};

// GET /api/products/slug/:slug
export const getBySlug = async (req, res) => {
  const item = await Product.findOne({ slug: req.params.slug, isActive: true });
  if (!item) return res.status(404).json({ message: 'Product not found' });
  res.json(item);
};

// POST /api/products (simple, no auth yet)
export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  const saved = await product.save();
  res.status(201).json(saved);
};

// PUT /api/products/:id
export const updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Product not found' });
  res.json(updated);
};

// DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Product not found' });
  res.json({ ok: true });
};