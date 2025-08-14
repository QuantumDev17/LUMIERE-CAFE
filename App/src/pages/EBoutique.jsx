import React from "react";
import { Link } from "react-router-dom";
import "../styles/EBoutique.css";

const CATEGORIES = [
  { name: "Cakes",              img: "/Noisette%20Noir.png",  to: "/cakes" },
  { name: "Personal Desserts",  img: "/Sweet.png",            to: "/personal-desserts" },
  { name: "One-Bite Creations", img: "/Bitters.png",          to: "/onebite" },
  { name: "Pastries",           img: "/pastry/pastry.png",    to: "/pastries" },
  { name: "Breads",             img: "/plain.png",            to: "/bread" },
  { name: "Delicatessen",       img: "/Delicatessen.png",     to: "/delicatessen" },
  { name: "Bakery Shelf",       img: "/bakershelf.png",       to: "/bakery-shelf" }
];

const IMG_W = 1200;
const IMG_H = 900;

function Card({ name, img, to }) {
  const body = (
    <>
      <div className="eb-card-imgwrap">
        <img
          src={img}
          alt={name}
          className="eb-card-img"
          width={IMG_W}
          height={IMG_H}
          loading="eager"
        />
      </div>
      <div className="eb-card-caption">{name}</div>
    </>
  );

  return to ? (
    <Link to={to} className="eb-card">{body}</Link>
  ) : (
    <div className="eb-card">{body}</div>
  );
}

export default function EBoutique() {
  return (
    <main className="eb-page">
      <h1 className="eb-title">E-Boutique</h1>
      <div className="eb-title-underline" />
      <section className="eb-grid">
        {CATEGORIES.map((c) => <Card key={c.name} {...c} />)}
      </section>
    </main>
  );
}
