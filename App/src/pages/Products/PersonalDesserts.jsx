import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Collection.css";

const PERSONAL_ITEMS = [
  { name: "Sweet Pleasure",  price: 12, img: "/Sweet.png", to: "" },
  { name: "Black Forest",    price: 12, img: "./cake/Black Forest.png", to: "" },
  { name: "Tiramichoux",     price: 8,  img: "./personal_dessert/Tiramichoux.png", to: "" },
  { name: "Paris Brest",     price: 10, img: "./personal_dessert/Paris Brest.png", to: "" },
  { name: "Peaches & Cream", price: 11, img: "./personal_dessert/Peaches & Cream.png", to: "" },
  { name: "Petit Berry Tart",price: 9,  img: "./personal_dessert/Creme Berry Tart.png", to: "" },
  { name: "Pistachio Lemon Meringue (Dairy Free & Gluten Free)", price: 10, img: "./personal_dessert/Lemon Pistachio Meringue.png", to: "" },
  { name: "Cream & Crumb",   price: 9,  img: "./personal_dessert/Cream & Crumb.png", to: "" },
];

export default function PersonalDesserts() {
  const [sortBy, setSortBy] = useState("best");
  const items = useMemo(() => {
    const arr = [...PERSONAL_ITEMS];
    if (sortBy === "price-asc")  arr.sort((a,b)=>a.price-b.price);
    if (sortBy === "price-desc") arr.sort((a,b)=>b.price-a.price);
    return arr;
  }, [sortBy]);

  return (
    <div>
      <section
        className="collection-hero"
        style={{ backgroundImage: 'url("/Sweet.png")' }}
      >
        <div className="collection-hero-inner">
          <h1 className="collection-title">PERSONAL DESSERTS</h1>
          <div className="collection-underline" />
        </div>
      </section>

      <div className="collection-toolbar">
        <label htmlFor="pd-sort">Sort by:</label>
        <select id="pd-sort" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="best">Best selling</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <section className="collection-grid">
        {items.map((p) => {
          const card = (
            <>
              <div className="collection-imgwrap">
                <img src={p.img} alt={p.name} width={1200} height={1200} className="collection-img"
                     onError={(e)=> (e.currentTarget.src = "/placeholder.png")} />
              </div>
              <div className="collection-name">{p.name}</div>
              <div className="collection-price">${p.price.toFixed(2)}</div>
            </>
          );
          return p.to
            ? <Link key={p.name} to={p.to} className="collection-card">{card}</Link>
            : <div key={p.name} className="collection-card">{card}</div>;
        })}
      </section>
    </div>
  );
}
