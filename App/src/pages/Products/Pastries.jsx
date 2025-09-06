import React from "react";
import "../../styles/Collection.css";

export default function Pastries() {
  return (
    <div className="pastries-page">
      {/* Full-bleed banner */}
      <section
        className="collection-hero"
        style={{ backgroundImage: 'url("/pastry/croisants.jpg")' }}
      >
        <div className="collection-hero-inner">
          <h1 className="collection-title">PASTRIES</h1>
          <div className="collection-underline" />
        </div>
      </section>

      {/* Empty collection note */}
      <div className="collection-empty">Sorry, there are no products in this collection</div>
    </div>
  );
}