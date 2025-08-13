import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/PersonalDesserts.css";

/** Static items only (no admin/user/DB). Use images from /public */
const PERSONAL_ITEMS = [
  { name: "Sweet Pleasure",  price: 12, img: "/Sweet.png",                to: "" },
  { name: "Black Forest",    price: 12, img: "./cake/Black Forest.png",         to: "" },
  { name: "Tiramichoux",     price: 8,  img: "./personal_dessert/Tiramichoux.png",               to: "" },
  { name: "Paris Brest",     price: 10, img: "./personal_dessert/Paris Brest.png",                to: "" },
  { name: "Peaches & Cream", price: 11, img: "./personal_dessert/Peaches & Cream.png",               to: "" },
  { name: "Petit Berry Tart",price: 9,  img: "./personal_dessert/Creme Berry Tart.png",         to: "" },
  { name: "Pistachio Lemon Meringue (Dairy Free & Gluten Free)", price: 10, img: "./personal_dessert/Lemon Pistachio Meringue.png", to: "" },
  { name: "Cream & Crumb",   price: 9,  img: "./personal_dessert/Cream & Crumb.png",      to: "" },
];

export default function PersonalDesserts() {
  const [sortBy, setSortBy] = useState("best");

  const items = useMemo(() => {
    const arr = [...PERSONAL_ITEMS];
    if (sortBy === "price-asc")  arr.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") arr.sort((a, b) => b.price - a.price);
    return arr;
  }, [sortBy]);

  return (
    <div className="pd-page">
      {/* Full-bleed banner */}
      <section className="pd-hero">
        <div className="pd-hero-inner">
          <p className="pd-eyebrow">PERSONAL DESSERTS</p>
          <h1 className="pd-title">Petit Gâteaux</h1>
        </div>
      </section>

      {/* Sort control */}
      <div className="pd-toolbar">
        <label htmlFor="pd-sort">Sort by:</label>
        <select
          id="pd-sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="best">Best selling</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Grid */}
      <section className="pd-grid">
        {items.map((p) => {
          const card = (
            <>
              <div className="pd-imgwrap">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1200}
                  height={1200}
                  className="pd-img"
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
              </div>
              <div className="pd-name">{p.name}</div>
              <div className="pd-price">${p.price.toFixed(2)}</div>
            </>
          );
          return p.to ? (
            <Link key={p.name} to={p.to} className="pd-card">
              {card}
            </Link>
          ) : (
            <div key={p.name} className="pd-card">
              {card}
            </div>
          );
        })}
      </section>
    </div>
  );
}
