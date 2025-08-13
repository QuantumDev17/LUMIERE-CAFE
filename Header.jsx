// src/components/Header.jsx
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

  headerBar: {
    width: "100%",                     // span full width
    padding: "10px 20px",               // thinner height
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
  },

  logoBox: { display: "flex", alignItems: "center" },
  logoLink: { display: "inline-flex", alignItems: "center" },
  logoImg: { height: 56, width: "auto", display: "block" },

  navWrap: {
    display: "flex",
    justifyContent: "center",
    justifySelf: "center",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 40,
    fontSize: 16,
  },
  navLink: { color: "#202020", textDecoration: "none", fontWeight: 600 },

  right: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  accountLink: {
    color: "#202020",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 16,
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
    const measure = () => {
      if (!ref.current) return;
      onHeight?.(ref.current.offsetHeight || 0);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [onHeight]);

  return (
    <header
      ref={ref}
      style={{
        ...styles.header,
        boxShadow: scrolled ? "0 2px 18px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div style={styles.headerBar}>
        {/* Left: Logo flush left */}
        <div style={styles.logoBox}>
          <Link to="/" style={styles.logoLink} aria-label="Lumière Patisserie – Home">
            <img src="/lumiere.png" alt="Lumière Patisserie" style={styles.logoImg} />
          </Link>
        </div>

        {/* Center: Nav */}
        <div style={styles.navWrap}>
          <nav style={styles.nav}>
            <Link to="/" style={styles.navLink}>Menu</Link>
            <Link to="/" style={styles.navLink}>Our Story</Link>
            <Link to="/pages/contact" style={styles.navLink}>Contact</Link>
            <Link to="/" style={styles.navLink}>Lumière Gift Card</Link>
          </nav>
        </div>

        {/* Right: Icons flush right */}
        <div style={styles.right}>
          <Link to="/" style={styles.accountLink}>Account</Link>
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
    </header>
  );
}
