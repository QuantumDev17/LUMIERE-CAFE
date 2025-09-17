import React from "react";
import "../styles/Pastries.css";

export default function Pastries() {
  return (
    <div className="pastries-page">
      {/* Full-bleed banner */}
      <section className="pastries-hero">
        <div className="pastries-hero-inner">
          <h1 className="pastries-title">Pastries</h1>
          <div className="pastries-underline" />
        </div>
      </section>

      {/* Empty collection note */}
      <div className="pastries-empty">
        Sorry, there are no products in this collection
      </div>
    </div>
  );
}
