import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BakeryShelf.css";

/* Static items (swap imgs with your /public assets) */
const SHELF_ITEMS = [
  { name: "Pecan Tart",          price: 25.00, img: "/bakershelf.png", to: "" },
  { name: "Chocolate Crinkles",  price: 12.00, img: "./baker_shelf/Chocolate Crinkles.png", to: "" },
  { name: "Hazelnut Cookies",    price: 12.00, img: "./baker_shelf/Hazelnut Cookies.png", to: "" },
  { name: "Chocolate Nemesis",   price: 25.00, img: "./baker_shelf/Chocolate Nemesis.png", to: "" },
  { name: "Pear Breton",         price: 24.00, img: "./baker_shelf/Pear Breton.png", to: "" },
  // add more as needed
];

export default function BakeryShelf() {
  const [sortBy, setSortBy] = useState("best");

  const items = useMemo(() => {
    const arr = [...SHELF_ITEMS];
    if (sortBy === "price-asc")  arr.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") arr.sort((a, b) => b.price - a.price);
    return arr;
  }, [sortBy]);

  return (
    <div className="bs-page">
      {/* Hero */}
      <section className="bs-hero">
        <div className="bs-hero-inner">
          <p className="bs-eyebrow">BAKERY SHELF</p>
          <h1 className="bs-title">Étagère de boulangerie</h1>
        </div>
      </section>

      {/* Sort (centered like other collection pages) */}
      <div className="bs-toolbar">
        <label htmlFor="bs-sort">Sort by:</label>
        <select
          id="bs-sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="best">Best selling</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* 3-across grid (matches the reference) */}
      <section className="bs-grid">
        {items.map((p) => {
          const card = (
            <>
              <div className="bs-imgwrap">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1200}
                  height={1200}
                  className="bs-img"
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
              </div>
              <div className="bs-name">{p.name}</div>
              <div className="bs-price">${p.price.toFixed(2)}</div>
            </>
          );
          return p.to ? (
            <Link key={p.name} to={p.to} className="bs-card">
              {card}
            </Link>
          ) : (
            <div key={p.name} className="bs-card">
              {card}
            </div>
          );
        })}
      </section>
    </div>
  );
}
