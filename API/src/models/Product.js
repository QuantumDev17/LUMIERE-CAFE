import mongoose from 'mongoose';
import slugify from 'slugify';

const ImageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    alt: { type: String, default: '' },
    width: Number,
    height: Number
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, default: 'cakes', index: true },
    price: { type: Number, required: true, min: 0 }, // in CAD
    currency: { type: String, default: 'CAD' },
    servingSize: { type: String }, // e.g., "Serves 10–12"

    // Content shown on the product page
    description: { type: String },
    ingredients: { type: String },
    allergens: { type: String },

    images: { type: [ImageSchema], default: [] },
    thumbnailUrl: { type: String },

    // Optional storefront helpers
    tags: { type: [String], default: [] },
    isActive: { type: Boolean, default: true },
    salesCount: { type: Number, default: 0 },

    // SEO
    seo: {
      title: String,
      description: String
    }
  },
  { timestamps: true }
);

// Auto-generate slug from title if not provided
ProductSchema.pre('validate', function (next) {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

export const Product = mongoose.model('Product', ProductSchema);