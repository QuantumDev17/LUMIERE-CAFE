import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/OneBite.css";

/** Static items only (no admin/user/DB) */
const ONEBITE_ITEMS = [
  { name: "Petit Fours (Box of 12)", price: 54, img: "/Bitters.png", to: "" },
  { name: "Petit Fours (Box of 4)",  price: 18, img: "/Bitters.png", to: "" },
];

export default function OneBite() {
  const [sortBy, setSortBy] = useState("best");

  const items = useMemo(() => {
    const arr = [...ONEBITE_ITEMS];
    if (sortBy === "price-asc")  arr.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") arr.sort((a, b) => b.price - a.price);
    return arr;
  }, [sortBy]);

  return (
    <div className="ob-page">
      {/* Full-bleed hero banner */}
      <section className="ob-hero">
        <div className="ob-hero-inner">
          <p className="ob-eyebrow">BITE-SIZED CREATIONS</p>
          <h1 className="ob-title">Petit Fours</h1>
        </div>
      </section>

      {/* Sort control */}
      <div className="ob-toolbar">
        <label htmlFor="ob-sort">Sort by:</label>
        <select
          id="ob-sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="best">Best selling</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* 2-across grid */}
      <section className="ob-grid">
        {items.map((p) => {
          const card = (
            <>
              <div className="ob-imgwrap">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1200}
                  height={1200}
                  className="ob-img"
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
              </div>
              <div className="ob-name">{p.name}</div>
              <div className="ob-price">${p.price.toFixed(2)}</div>
            </>
          );
          return p.to ? (
            <Link key={p.name} to={p.to} className="ob-card">
              {card}
            </Link>
          ) : (
            <div key={p.name} className="ob-card">
              {card}
            </div>
          );
        })}
      </section>
    </div>
  );
}
