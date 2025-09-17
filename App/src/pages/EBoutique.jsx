// src/pages/EBoutique.jsx
import React, { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const tiles = [
  { label: "Cakes",              to: "/cakes",            img: "/Noisette%20Noir.png" },
  { label: "Personal Desserts",  to: "/personal-desserts", img: "/Sweet.png" },
  { label: "One-Bite Creations", to: "/onebite",           img: "/Bitters.png" },
  { label: "Pastries",           to: "/pastries",          img: "/pastry/pastry.png" },
  { label: "Breads",             to: "/bread",             img: "/plain.png" },
  { label: "Bakery Shelf",       to: "/bakery-shelf",      img: "/bakershelf.png" },
];

export default function EBoutique() {
  const { search } = useLocation();
  const q = useMemo(() => new URLSearchParams(search).get("q") || "", [search]);

  useEffect(() => {
    if (q) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [q]);

  return (
    <div
      style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "0 24px 80px", // 👈 80px bottom padding for space before footer
      }}
    >
      <h1 style={{ textAlign: "center", margin: "36px 0 12px" }}>Menu</h1>

      {q && (
        <p style={{ textAlign: "center", color: "#666", marginBottom: 24 }}>
          Showing categories related to <strong>“{q}”</strong>
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0,1fr))",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        {tiles.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            style={{
              display: "block",
              textDecoration: "none",
              color: "#222",
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid #eee",
              background: "#fff",
            }}
          >
            <div style={{ aspectRatio: "4 / 3", background: "#f6f6f6" }}>
              <img
                src={t.img}
                alt={t.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="eager"
              />
            </div>
            <div
              style={{
                padding: "10px 12px",
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              {t.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
