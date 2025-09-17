// src/products/productSamples.js
import slugify from "slugify";

const raw = [
  // CAKES
  { name: "Noisette Noir",        price: 56, imageUrl: "/Noisette Noir.png",        category: "cakes" },
  { name: "Lumière Cheesecake",   price: 36, imageUrl: "/Lumière.png",              category: "cakes" },
  { name: "Coconut Dream",        price: 55, imageUrl: "/cake/Coconut.png",         category: "cakes" },
  { name: "Fraisier",             price: 45, imageUrl: "/Fraisier.png",             category: "cakes" },

  // PERSONAL DESSERTS
  { name: "Sweet Pleasure",       price: 12, imageUrl: "/Sweet.png",                category: "personal-desserts" },
  { name: "Tiramichoux",          price: 8,  imageUrl: "/personal_dessert/Tiramichoux.png", category: "personal-desserts" },

  // ONE-BITE
  { name: "Petit Fours (Box of 12)", price: 54, imageUrl: "/Bitters.png", category: "onebite" },
  { name: "Petit Fours (Box of 4)",  price: 18, imageUrl: "/Bitters.png", category: "onebite" },

  // PASTRIES
  { name: "Butter Croissant",     price: 4.5, imageUrl: "/pastry/croissant.jpg",    category: "pastries" },

  // BREAD / SHELF (examples)
  { name: "Country Sourdough",    price: 7.5, imageUrl: "/bread/sourdough.jpg",     category: "bread" },
  { name: "Lemon Madeleines",     price: 6,   imageUrl: "/shelf/madeleines.jpg",    category: "bakery-shelf" }
];

const samples = raw.map((p, i) => ({
  ...p,
  id: String(i + 1),
  slug: slugify(p.name, { lower: true, strict: true })
}));

export default samples;
