import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: "#fff",
    borderBottom: "1px solid #eee",
    transition: "box-shadow .2s ease",
  },

  // Outer bar spans full width; inner container centers content
  headerBar: {
    width: "100%",
    padding: "10px 0",
  },
  container: {
    maxWidth: 1240,
    margin: "0 auto",
    padding: "0 24px",
    display: "grid",
    gridTemplateColumns: "auto minmax(0,1fr) auto", // ⬅ prevents center overflow
    alignItems: "center",
    columnGap: 16,
  },

  logoBox: { display: "flex", alignItems: "center" },
  logoLink: { display: "inline-flex", alignItems: "center" },
  logoImg: { height: 65, width: "auto", display: "block" }, // a bit smaller

  navWrap: {
    display: "flex",
    justifyContent: "center",
    justifySelf: "center",
    minWidth: 0, // ⬅ allow shrink inside grid
    overflow: "hidden",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(12px, 3vw, 36px)", // responsive gap
    flexWrap: "wrap",              // ⬅ wrap instead of pushing Account
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  navLink: { color: "#202020", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap" },

  right: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    justifySelf: "end",
    minWidth: 0,
  },
  accountLink: {
    color: "#202020",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 16,
    whiteSpace: "nowrap",
  },
  iconBtn: {
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
    lineHeight: 0,
  },
};

export default function Header({ onHeight }) {
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const measure = () => onHeight?.(ref.current?.offsetHeight || 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [onHeight]);

  return (
    <header
      ref={ref}
      style={{ ...styles.header, boxShadow: scrolled ? "0 2px 18px rgba(0,0,0,0.06)" : "none" }}
    >
      <div style={styles.headerBar}>
        <div style={styles.container}>
          {/* Left: Logo */}
          <div style={styles.logoBox}>
            <Link to="/" style={styles.logoLink} aria-label="Lumière Patisserie – Home">
              <img src="/lumiere.png" alt="Lumière Patisserie" style={styles.logoImg} />
            </Link>
          </div>

          {/* Center: Nav */}
          <div style={styles.navWrap}>
            <ul style={styles.nav}>
              <li><Link to="/pages/e-boutique" style={styles.navLink}>E-Boutique</Link></li>
              <li><Link to="/pages/about" style={styles.navLink}>Our Story</Link></li>
              <li><Link to="/contact" style={styles.navLink}>Contact</Link></li> {/* ← match route */}
              <li><Link to="/products/lumiere-gift-card" style={styles.navLink}>Lumière Gift Card</Link></li>
            </ul>
          </div>

          {/* Right: Actions */}
          <div style={styles.right}>
            <Link to="/account" style={styles.accountLink}>Account</Link>
            <button aria-label="Search" style={styles.iconBtn}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button aria-label="Cart" style={styles.iconBtn}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* tiny responsive tweak to keep right side tidy */}
      <style>{`
        @media (max-width: 860px) {
          .right-actions .label { display: none; }
        }
      `}</style>
    </header>
  );
}
