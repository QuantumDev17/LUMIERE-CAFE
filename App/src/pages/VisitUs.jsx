// src/components/VisitUs.jsx
import React from "react";

export default function VisitUs() {
  const wrap = { maxWidth: 1240, margin: "0 auto", padding: "0 24px" };

  const h2 = {
    fontSize: 56,
    lineHeight: 1.1,
    fontWeight: 400,
    color: "#2f2f2f",
    margin: 0,
    letterSpacing: "-0.01em",
  };

  const blurb = {
    marginTop: 18,
    maxWidth: 760,
    fontSize: 18,
    lineHeight: 1.8,
    color: "#4b4b4b",
  };

  const row = {
    marginTop: 28,
    display: "flex",
    gap: 18,
    flexWrap: "wrap",
  };

  const btn = {
    appearance: "none",
    cursor: "pointer",
    borderRadius: 10,
    padding: "14px 22px",
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: ".05em",
    textTransform: "none",
    border: "1px solid transparent",
    transition: "transform .15s ease, box-shadow .2s ease, background .2s ease",
  };

  const filled = {
    ...btn,
    background: "linear-gradient(90deg,#fbc2eb 0%,#a6c1ee 100%)",
    color: "#000",
    boxShadow: "0 8px 24px rgba(0,0,0,.08)",
  };

  const outline = {
    ...btn,
    background: "#fff",
    color: "#1e1e1e",
    border: "2px solid #1e1e1e",
  };

  const hoverUp = (e) => (e.currentTarget.style.transform = "translateY(-2px)");
  const hoverDown = (e) => (e.currentTarget.style.transform = "translateY(0)");

  return (
    <section style={{ padding: "90px 0 70px" }}>
      <div style={wrap}>
        <h2 style={h2}>Visit us</h2>

        <p style={blurb}>
          We are located in Thornhill, Ontario. Come by to experience the rich
          flavours of Ontario inspired by the craft of France.
        </p>

        <div style={row}>
          <a
            href="/pages/contact"
            style={filled}
            onMouseEnter={hoverUp}
            onMouseLeave={hoverDown}
          >
            Contact us
          </a>

          <a
            href="https://goo.gl/maps/ME3Q97uCYjqjKLKb6"
            style={outline}
            onMouseEnter={hoverUp}
            onMouseLeave={hoverDown}
          >
            Directions on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
