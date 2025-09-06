// src/pages/BakeryShelf.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Collection.css";

const SHELF_ITEMS = [
  { name: "Pecan Tart", price: 25, img: "/bakershelf.png", to: "" },
  // add more items here as you get photos
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
    <div>
      {/* Full-bleed hero */}
      <section
        className="collection-hero"
        style={{ backgroundImage: 'url("/bakershelf.png")' }}
      >
        <div className="collection-hero-inner">
          <h1 className="collection-title">BAKERY SHELF</h1>
          <div className="collection-underline" />
        </div>
      </section>

      {/* Sort bar */}
      <div className="collection-toolbar">
        <label htmlFor="shelf-sort">Sort by:</label>
        <select
          id="shelf-sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="best">Best selling</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Grid */}
      <section className="collection-grid">
        {items.map((p) => {
          const card = (
            <>
              <div className="collection-imgwrap">
                <img
                  src={p.img}
                  alt={p.name}
                  className="collection-img"
                  width={1200}
                  height={1200}
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
              </div>
              <div className="collection-name">{p.name}</div>
              <div className="collection-price">${p.price.toFixed(2)}</div>
            </>
          );
          return p.to ? (
            <Link key={p.name} to={p.to} className="collection-card">
              {card}
            </Link>
          ) : (
            <div key={p.name} className="collection-card">
              {card}
            </div>
          );
        })}
      </section>
    </div>
  );
}
