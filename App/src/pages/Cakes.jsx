import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Cakes.css";

/** Static items (no admin/user/DB). Use images from /public */
const CAKE_ITEMS = [
  { name: "Noisette Noir",        price: 56, img: "/Noisette Noir.png", to: "" },
  { name: "Lumière Cheesecake",   price: 36, img: "/Lumiere Cheesecake.png",     to: "" },
  { name: "Coconut Dream",        price: 55, img: "./cake/Coconut.png",           to: "" },
  { name: "Fraisier",             price: 45, img: "/Fraisier.png",  to: "" },
  // add more items here when you have images
];

export default function Cakes() {
  const [sortBy, setSortBy] = useState("best");

  const items = useMemo(() => {
    const arr = [...CAKE_ITEMS];
    if (sortBy === "price-asc")  arr.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") arr.sort((a, b) => b.price - a.price);
    return arr;
  }, [sortBy]);

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
                  src={p.img}
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
          // If you add real product pages later, put the URL in p.to
          return p.to ? (
            <Link key={p.name} to={p.to} className="cake-card">
              {card}
            </Link>
          ) : (
            <div key={p.name} className="cake-card">
              {card}
            </div>
          );
        })}
      </section>
    </div>
  );
}
