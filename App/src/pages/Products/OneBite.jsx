import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Collection.css";

const ONEBITE_ITEMS = [
  { name: "Petit Fours (Box of 12)", price: 54, img: "/Bitters.png", to: "" },
  { name: "Petit Fours (Box of 4)",  price: 18, img: "/Bitters.png", to: "" },
];

export default function OneBite() {
  const [sortBy, setSortBy] = useState("best");
  const items = useMemo(() => {
    const arr = [...ONEBITE_ITEMS];
    if (sortBy === "price-asc")  arr.sort((a,b)=>a.price-b.price);
    if (sortBy === "price-desc") arr.sort((a,b)=>b.price-a.price);
    return arr;
  }, [sortBy]);

  return (
    <div>
      <section
        className="collection-hero"
        style={{ backgroundImage: 'url("/Bites.jpg")' }}
      >
        <div className="collection-hero-inner">
          <h1 className="collection-title">ONE BITERS</h1>
          <div className="collection-underline" />
        </div>
      </section>

      <div className="collection-toolbar">
        <label htmlFor="ob-sort">Sort by:</label>
        <select id="ob-sort" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
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
