import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Cakes.css";

export default function Cakes() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("best");

  // Fetch products from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Sorting
  const items = useMemo(() => {
    const arr = [...products];
    if (sortBy === "price-asc") arr.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") arr.sort((a, b) => b.price - a.price);
    return arr;
  }, [products, sortBy]);

  return (
    <div className="cakes-page">
      {/* Full-bleed banner */}
      <section className="cakes-hero">
        <div className="cakes-hero-inner">
          <p className="cakes-eyebrow">CAKES</p>
          <h1 className="cakes-title">Gâteaux</h1>
        </div>
      </section>

      {/* Sort control */}
      <div className="cakes-toolbar">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="best">Best selling</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Grid */}
      <section className="cakes-grid">
        {items.map((p) => {
          const card = (
            <>
              <div className="cake-imgwrap">
                <img
                  src={p.images[0]} // first image from MongoDB
                  alt={p.name}
                  width={1200}
                  height={1200}
                  className="cake-img"
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
              </div>
              <div className="cake-name">{p.name}</div>
              <div className="cake-price">${p.price.toFixed(2)}</div>
            </>
          );

          return (
            <Link key={p._id} to={`/products/${p._id}`} className="cake-card">
              {card}
            </Link>
          );
        })}
      </section>
    </div>
  );
}
