import express from 'express';
import { getProducts, getBySlug, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/slug/:slug', getBySlug);

// Admin endpoints (add auth later)
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;