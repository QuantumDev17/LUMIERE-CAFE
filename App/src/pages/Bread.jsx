import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Bread.css";

/** Static items (no API, no auth). Swap images with your real /public assets. */
const BREAD_ITEMS = [
  { name: "100% whole Wheat & Seeds",                         price: 7.50, img: "./bread/Sourdough.png",        to: "" },
  { name: "Country Loaf with Sundried Tomatoes & Garlic",     price: 7.50, img: "./bread/Plain-Sourdough.png",   to: "" },
  { name: "Rye & Walnuts",                                    price: 7.50, img: "./bread/Rye.png",        to: "" },
  { name: "Classic Challah (Fridays Only)",                    price: 7.50, img: "./bread/Classic Challah.jpg",        to: "" },
  { name: "German Baguette",                                   price: 6.00, img: "./bread/germanbaguette.jpg",        to: "" },
  { name: "Tartine",                                           price: 7.00, img: "./bread/tartine.png",        to: "" },
  { name: "Country Loaf With Greek Olives",                    price: 7.50, img: "./bread/country-loaf.png",        to: "" },
  { name: "Japanese Milk Bread",                               price:10.50, img: "./bread/japanesemilkbread.jpg",        to: "" },
];

export default function Bread() {
  const [sortBy, setSortBy] = useState("best");

  const items = useMemo(() => {
    const arr = [...BREAD_ITEMS];
    if (sortBy === "price-asc")  arr.sort((a,b) => a.price - b.price);
    if (sortBy === "price-desc") arr.sort((a,b) => b.price - a.price);
    return arr;
  }, [sortBy]);

  return (
    <div className="bread-page">
      {/* Hero */}
      <section className="bread-hero">
        <div className="bread-hero-inner">
          <p className="bread-eyebrow">BREADS & BUNS</p>
          <h1 className="bread-title">Boulangerie</h1>
        </div>
      </section>

      {/* Sort */}
      <div className="bread-toolbar">
        <label htmlFor="bread-sort">Sort by:</label>
        <select id="bread-sort" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="best">Best selling</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Grid */}
      <section className="bread-grid">
        {items.map((p) => {
          const card = (
            <>
              <div className="bread-imgwrap">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1200}
                  height={1200}
                  className="bread-img"
                  onError={(e)=> (e.currentTarget.src = "/placeholder.png")}
                />
              </div>
              <div className="bread-name">{p.name}</div>
              <div className="bread-price">${p.price.toFixed(2)}</div>
            </>
          );
          return p.to ? (
            <Link key={p.name} to={p.to} className="bread-card">{card}</Link>
          ) : (
            <div key={p.name} className="bread-card">{card}</div>
          );
        })}
      </section>
    </div>
  );
}
