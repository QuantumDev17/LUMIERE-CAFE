import React from "react";
import "../styles/Delicatessen.css";

export default function Delicatessen() {
  return (
    <div className="deli-page">
      {/* Full-bleed banner */}
      <section className="deli-hero">
        <div className="deli-hero-inner">
          <h1 className="deli-title">Delicatessen</h1>
          <div className="deli-underline" />
        </div>
      </section>

      {/* Empty collection note */}
      <div className="deli-empty">
        Sorry, there are no products in this collection
      </div>
    </div>
  );
}
