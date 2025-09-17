<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";

const EB_LINKS = [
  { label: "Cakes", to: "/cakes", keys: ["cake", "cakes"] },
  { label: "Personal Desserts", to: "/personal-desserts", keys: ["personal", "petit", "dessert", "desserts"] },
  { label: "One-Bite Creations", to: "/onebite", keys: ["one bite", "one-bite", "biters", "one bite creations"] },
  { label: "Bread", to: "/bread", keys: ["bread", "breads", "loaf"] },
  { label: "Pastries", to: "/pastries", keys: ["pastry", "pastries", "croissant"] },
  { label: "Shelf", to: "/bakery-shelf", keys: ["shelf", "bakery shelf"] },
];

=======
// src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const EB_LINKS = [
  { label: "Cakes", to: "/cakes" },
  { label: "Personal Desserts", to: "/personal-desserts" },
  { label: "One-Bite Creations", to: "/onebite" },
  { label: "Bread", to: "/bread" },
  { label: "Pastries", to: "/pastries" },
  { label: "Shelf", to: "/bakery-shelf" },
  { label: "DELICATESSEN", to: "/delicatessen" },
];

// Adjust these: negative = left, positive = right
const EB_SHIFT = -150;
const CONTACT_SHIFT = -40;

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
    width: "100%",
    maxWidth: "none",
    margin: 0,
    padding: "0 clamp(10px, 2vw, 20px)",
    display: "grid",
    gridTemplateColumns: "auto minmax(0,1fr) auto",
    alignItems: "center",
    columnGap: 16,
  },

  // Logo
  logoBox: { display: "flex", alignItems: "center" },
  logoLink: { display: "inline-flex", alignItems: "center" },
  logoImg: { height: 75, width: "auto", display: "block" },

  // Center nav
  navWrap: {
    display: "flex",
    justifyContent: "center",
    justifySelf: "center",
    minWidth: 0,
    position: "relative",
    zIndex: 200, // below right icons (201)
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

  // Underline + dropdown
  ebWrap: { position: "relative" },
  underline: {
    position: "absolute", left: 6, right: 6, bottom: 1,
    height: 4, borderRadius: 999,
    background: "linear-gradient(90deg,#f6a,#f9e36b,#7ae1c9,#8ab6ff)",
    transform: "scaleX(.45)", opacity: 0,
    transition: "opacity .16s ease, transform .16s ease",
    pointerEvents: "none",
  },
  underlineVisible: { transform: "scaleX(1)", opacity: 1 },

  dropdown: {
    position: "absolute",
    top: "100%",
    left: -12,
    minWidth: 220,
    background: "#fff",
    boxShadow: "0 10px 20px rgba(0,0,0,.08), 0 2px 6px rgba(0,0,0,.06)",
    padding: "10px 0",
    paddingTop: 10, // hover bridge
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

  // Right icons
  right: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    justifySelf: "end",
    minWidth: 44,
    position: "relative",
    zIndex: 201,                           // above nav/dropdown
    marginRight: "calc(var(--sbw, 0px) + 12px)",
  },
  iconBtn: {
    background: "transparent",   // ← no white fill
    border: "none",              // ← no border
    boxShadow: "none",           // ← no shadow halo
    padding: 0,
    cursor: "pointer",
    lineHeight: 0,
    color: "#495057",            // icon color
    width: 36, height: 36,       // good tap target
    display: "grid",
    placeItems: "center",
  },
};

>>>>>>> origin/main
export default function Header({ onHeight }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);
<<<<<<< HEAD
  const [hoverHome, setHoverHome] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");

  const ebRef = useRef(null);
  const searchRef = useRef(null);
  const rootRef = useRef(null);
  const inputRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isEBActive = ["/e-boutique", "/pages/e-boutique"]
    .concat(EB_LINKS.map(l => l.to))
    .some(p => location.pathname.startsWith(p));
  const isContactActive = location.pathname.startsWith("/contact");
  const isHomeActive = location.pathname === "/";

  // shadow on scroll + report height
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const measure = () => onHeight?.(rootRef.current?.offsetHeight || 0);
    onScroll(); measure();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", measure);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", measure); };
  }, [onHeight]);

  // outside click, keyboard shortcuts
  useEffect(() => {
    const onDocClick = (e) => {
      if (ebRef.current && !ebRef.current.contains(e.target)) setOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") { setOpen(false); setSearchOpen(false); inputRef.current?.blur(); }
      if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setSearchOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDocClick); document.removeEventListener("keydown", onKey); };
  }, []);

  const runSearch = (term) => {
    const s = term.trim().toLowerCase();
    if (!s) return;
    for (const link of EB_LINKS) {
      if (link.keys?.some((k) => s.includes(k))) { navigate(link.to); setSearchOpen(false); return; }
    }
    const params = new URLSearchParams({ q: s });
    navigate(`/e-boutique?${params.toString()}`);
    setSearchOpen(false);
  };
  const submitSearch = (e) => { e.preventDefault(); runSearch(q); };

  return (
    <header
      ref={rootRef}
      className={`site-header ${scrolled ? "is-scrolled" : ""}`}
      role="banner"
      aria-label="Lumière Pastries global header"
    >
      <div className="header-bar">
        <div className="header-grid">
          {/* Left — logo */}
          <div className="logo-box">
            <Link to="/" className="logo-link" aria-label="Lumière Pastries – Home">
              <img src="/lumiere.png" alt="Lumière Pastries" className="logo-img" />
            </Link>
          </div>

          {/* Center — nav */}
          <nav className="nav-wrap" aria-label="Primary">
            <ul className="nav">
              <li
                className="nav-item"
                onMouseEnter={() => setHoverHome(true)}
                onMouseLeave={() => setHoverHome(false)}
              >
                <Link to="/" className="nav-link">Home</Link>
                <span className={`nav-underline ${hoverHome || isHomeActive ? "visible" : ""}`} />
              </li>

              <li
                ref={ebRef}
                className={`nav-item eb ${open ? "open" : ""}`}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <Link to="/e-boutique" className="nav-link" aria-haspopup="menu" aria-expanded={open}>Menu</Link>
                <span className={`nav-underline ${open || isEBActive ? "visible" : ""}`} />
                <div className="dropdown" role="menu">
=======
  const ebRef = useRef(null);
  const ref = useRef(null);

  // small close delay
  const closeTimer = useRef(null);
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

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
    const onDocClick = (e) => { if (!ebRef.current?.contains(e.target)) setOpen(false); };
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
                style={{ ...styles.ebWrap, transform: `translateX(${EB_SHIFT}px)` }}
                onMouseEnter={() => { cancelClose(); setOpen(true); }}
                onMouseLeave={scheduleClose}
              >
                <Link
                  to="/e-boutique"
                  style={styles.navLink}
                  aria-haspopup="menu"
                  aria-expanded={open}
                  onMouseDown={() => { cancelClose(); setOpen(true); }}
                  onFocus={() => { cancelClose(); setOpen(true); }}
                >
                  E-Boutique
                </Link>

                <span style={{ ...styles.underline, ...(open ? styles.underlineVisible : null) }} />

                <div
                  style={{ ...styles.dropdown, ...(open ? styles.dropdownOpen : null) }}
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
>>>>>>> origin/main
                  {EB_LINKS.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
<<<<<<< HEAD
                      className="dropdown-link"
                      role="menuitem"
=======
                      style={styles.ddLink}
                      onMouseEnter={cancelClose}
                      onFocus={cancelClose}
>>>>>>> origin/main
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>

<<<<<<< HEAD
              <li
                className="nav-item"
                onMouseEnter={() => setHoverContact(true)}
                onMouseLeave={() => setHoverContact(false)}
              >
                <Link to="/contact" className="nav-link">Contact Us</Link>
                <span className={`nav-underline ${hoverContact || isContactActive ? "visible" : ""}`} />
              </li>
            </ul>
          </nav>

          {/* Right — search (overlay; width reserved so nav is always centered) */}
          <div className="right">
            <form
              ref={searchRef}
              onSubmit={submitSearch}
              className={`search ${searchOpen ? "is-open" : ""}`}
              onFocus={() => setSearchOpen(true)}
            >
              <button
                type="submit"
                className="search-btn"
                aria-label="Search"
                title="Search (press / to focus)"
                onClick={() => {
                  if (!searchOpen) {
                    setSearchOpen(true);
                    setTimeout(() => inputRef.current?.focus(), 0);
                  }
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#495057" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              <input
                ref={inputRef}
                type="search"
                className="search-input"
                placeholder={searchOpen ? "Search cakes, pastries…" : ""}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onBlur={() => setSearchOpen(false)}
                aria-label="Search products"
              />
            </form>
=======
              {/* Contact with hover underline — shifted independently */}
              <li
                style={{ ...styles.ebWrap, transform: `translateX(${CONTACT_SHIFT}px)` }}
                onMouseEnter={() => setHoverContact(true)}
                onMouseLeave={() => setHoverContact(false)}
              >
                <Link to="/contact" style={styles.navLink}>Contact</Link>
                <span style={{ ...styles.underline, ...(hoverContact ? styles.underlineVisible : null) }} />
              </li>
            </ul>
          </div>

          {/* Right: Search */}
          <div style={styles.right}>
            <button aria-label="Search" style={styles.iconBtn}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
>>>>>>> origin/main
          </div>
        </div>
      </div>
    </header>
  );
}
