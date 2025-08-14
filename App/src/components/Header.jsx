// src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const EB_LINKS = [
  { label: "Cakes", to: "/cakes" },
  { label: "Personal Desserts", to: "/personal-desserts" },
  { label: "One-Bite Creations", to: "/onebite" },
  { label: "Bread", to: "/bread" },
  { label: "Pastries", to: "/pastries" },
  { label: "Shelf", to: "/bakery-shelf" },
  { label: "DELICATESSEN", to: "/delicatessen" },
];

const styles = {
  header: {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 100,
    background: "#fff",
    borderBottom: "1px solid #eee",
    transition: "box-shadow .2s ease",
  },
  headerBar: { width: "100%", padding: "10px 0" },
  container: {
    maxWidth: 1240, margin: "0 auto", padding: "0 24px",
    display: "grid",
    gridTemplateColumns: "auto minmax(0,1fr) auto",
    alignItems: "center", columnGap: 16,
  },

  /* Logo */
  logoBox: { display: "flex", alignItems: "center" },
  logoLink: { display: "inline-flex", alignItems: "center" },
  logoImg: { height: 75, width: "auto", display: "block" },

  /* Center nav */
  navWrap: {
    display: "flex",
    justifyContent: "center",
    justifySelf: "center",
    minWidth: 0,
    overflow: "visible",
  },
  nav: {
    display: "flex", alignItems: "center",
    gap: "clamp(12px, 3vw, 36px)", flexWrap: "wrap",
    margin: 0, padding: 0, listStyle: "none",
  },
  navLink: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    height: 44,
    padding: "0 6px",
    color: "#202020",
    textDecoration: "none",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },

  /* underline + dropdown */
  ebWrap: { position: "relative" }, // reuse for Contact underline
  underline: {
    position: "absolute", left: 6, right: 6, bottom: -10,
    height: 4, borderRadius: 999,
    background: "linear-gradient(90deg,#f6a,#f9e36b,#7ae1c9,#8ab6ff)",
    transform: "scaleX(.45)", opacity: 0,
    transition: "opacity .16s ease, transform .16s ease",
    pointerEvents: "none",
  },
  underlineVisible: { transform: "scaleX(1)", opacity: 1 },

  dropdown: {
    position: "absolute",
    top: "calc(100% + 10px)",
    left: -12,
    minWidth: 220,
    background: "#fff",
    boxShadow: "0 10px 20px rgba(0,0,0,.08), 0 2px 6px rgba(0,0,0,.06)",
    padding: "10px 0",
    opacity: 0,
    transform: "translateY(6px)",
    pointerEvents: "none",
    transition: "opacity .16s ease, transform .16s ease",
    zIndex: 200,
  },
  dropdownOpen: { opacity: 1, transform: "translateY(0)", pointerEvents: "auto" },

  ddLink: {
    display: "block",
    padding: "12px 16px",
    textDecoration: "none",
    color: "#222",
    whiteSpace: "nowrap",
    borderRadius: 6,
    margin: "2px 8px",
    outline: "none",
  },
  ddLinkHover: { background: "#f7f7f7" },
  ddLinkActive: { background: "#eef3ff", fontWeight: 600, color: "#0a3cff" },

  /* Right icons */
  right: { display: "flex", alignItems: "center", gap: 14, justifySelf: "end", minWidth: 0 },
  accountLink: { color: "#202020", textDecoration: "none", fontWeight: 600, fontSize: 16, whiteSpace: "nowrap" },
  iconBtn: { background: "transparent", border: "none", padding: 0, cursor: "pointer", lineHeight: 0 },
};

export default function Header({ onHeight }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoverContact, setHoverContact] = useState(false); // NEW
  const ebRef = useRef(null);
  const ref = useRef(null);
  const location = useLocation();

  const isEBActive = ["/e-boutique", "/pages/e-boutique"]
    .concat(EB_LINKS.map(l => l.to))
    .some(p => location.pathname.startsWith(p));

  const isContactActive = location.pathname.startsWith("/contact"); // NEW

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

  useEffect(() => {
    const onDocClick = (e) => {
      if (!ebRef.current) return;
      if (!ebRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

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
              {/* E-Boutique with dropdown */}
              <li
                ref={ebRef}
                style={styles.ebWrap}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <Link
                  to="/e-boutique"
                  style={styles.navLink}
                  aria-haspopup="menu"
                  aria-expanded={open}
                  onMouseDown={() => setOpen(true)}
                  onFocus={() => setOpen(true)}
                >
                  E-Boutique
                </Link>

                <span
                  style={{
                    ...styles.underline,
                    ...(open || isEBActive ? styles.underlineVisible : null),
                  }}
                />

                <div style={{ ...styles.dropdown, ...(open ? styles.dropdownOpen : null) }}>
                  {EB_LINKS.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="dropdown-link"
                      style={styles.ddLink}
                      onMouseEnter={() => setOpen(true)}
                      onClick={() => setOpen(false)}
                      onFocus={() => setOpen(true)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>

              {/* <li><Link to="/our-story" style={styles.navLink}>Our Story</Link></li> */}

              {/* Contact with rainbow underline (NO dropdown) */}
              <li
                style={styles.ebWrap}
                onMouseEnter={() => setHoverContact(true)}
                onMouseLeave={() => setHoverContact(false)}
              >
                <Link to="/contact" style={styles.navLink}>Contact</Link>
                <span
                  style={{
                    ...styles.underline,
                    ...((hoverContact || isContactActive) ? styles.underlineVisible : null),
                  }}
                />
              </li>

              {/* <li><Link to="/gift-card" style={styles.navLink}>Lumière Gift Card</Link></li> */}
            </ul>
          </div>

          {/* Right: Account + search + cart */}
          <div style={styles.right}>
            {/* <Link to="/account" style={styles.accountLink}>Account</Link> */}

            <button aria-label="Search" style={styles.iconBtn}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="#495057" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* <button aria-label="Cart" style={styles.iconBtn}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#495057" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10h16l-1.5 9a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2L4 10z" />
                <path d="M8 10l4-6 4 6" />
                <circle cx="12" cy="16.5" r="0.8" />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
