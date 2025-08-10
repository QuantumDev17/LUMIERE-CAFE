import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* Use files from /public directly (no imports) */
const gateauxImg = "/Noisette%20Noir.png";
const petitGateauxImg = "/Sweet.png";
const petitFoursImg = "/Bitters.png";

const styles = {
  container: { maxWidth: 1240, margin: "0 auto", padding: "0 24px" },
  containerWide: { maxWidth: 1440, margin: "0 auto", padding: "0 24px" },

  header: {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 100,
    height: 110,
    background: "#fff",
    borderBottom: "1px solid #eee",
    transition: "box-shadow .2s ease"
  },
  headerInner: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // space between left, center, right sections
  },
  logoBox: {
    flex: "0 0 auto", // fixed to content
    display: "flex",
    alignItems: "center",
  },
  logoLink: { display: "inline-flex", alignItems: "center" },
  logoImg: { height: 80, width: "auto", display: "block" },

  navWrap: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "center",
  },
  nav: { display: "flex", alignItems: "center", gap: 80, fontSize: 18 },
  navLink: { color: "#202020", textDecoration: "none", fontWeight: 600 },

  right: {
  flex: "0 0 auto", // fixed to content
  display: "flex",
  alignItems: "center",
  gap: 50
},
  accountLink: { color: "#202020", textDecoration: "none", fontWeight: 600, fontSize: 18 },
  iconBtn: { background: "transparent", border: "none", padding: 0, cursor: "pointer", lineHeight: 0 },

  hero: {
    position: "relative",
    marginTop: 110,
    height: "calc(100vh - 110px)",
    minHeight: 520,
    overflow: "hidden"
  },
  heroImg: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" },
  heroOverlay: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)" },
  heroInner: { position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" },
  heroContent: { textAlign: "center", color: "#fff" },
  heroH1: { fontFamily: "'Filson Pro', sans-serif", fontSize: 64, fontWeight: 400, lineHeight: 1.1, margin: 0, textShadow: "0 2px 12px rgba(0,0,0,0.35)" },
  cta: { display: "inline-block", marginTop: 28, padding: "14px 26px", background: "#fff", color: "#111", borderRadius: 3, border: "1px solid #ddd", fontWeight: 700, letterSpacing: "0.08em", fontSize: 14 },

  section: { padding: "72px 0" },
  foot: { borderTop: "1px solid #eee", padding: "36px 0", color: "#555", fontSize: 14 },

  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 },
  item: { position: "relative", overflow: "hidden" },
  imgWrap: { position: "relative" },
  img: { width: "100%", height: "auto", display: "block", transition: "transform .35s ease" },
  hoverLine: { position: "absolute", left: 0, right: 0, bottom: 0, height: 4, width: 0, background: "#222", transition: "width .3s ease", margin: "0 auto" },
  badge: { position: "absolute", left: 16, bottom: 16, background: "rgba(255,255,255,0.92)", padding: "10px 14px", borderRadius: 6 },
  badgeTitle: { margin: 0, fontSize: 16, fontWeight: 700, letterSpacing: .5 },
  badgeSub: { margin: "4px 0 0", fontSize: 15, fontWeight: 600, color: "#333" }
};

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{ ...styles.header, boxShadow: scrolled ? "0 2px 18px rgba(0,0,0,0.06)" : "none" }}>
      <div style={{ ...styles.container, ...styles.headerInner }}>
        <div style={styles.logoBox}>
          <Link to="/" style={styles.logoLink} aria-label="Lumière Patisserie – Home">
            <img src="/lumiere.png" alt="Lumière Patisserie" style={styles.logoImg} />
          </Link>
        </div>

        <div style={styles.navWrap}>
          <nav style={styles.nav}>
            {["E‑Boutique", "Our Story", "Contact", "Lumière Gift Card"].map((item) => (
              <Link key={item} to="/" style={styles.navLink}>{item}</Link>
            ))}
          </nav>
        </div>

        <div style={styles.right}>
          <Link to="/" style={styles.accountLink}>Account</Link>
          <button aria-label="Search" style={styles.iconBtn}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button aria-label="Cart" style={styles.iconBtn}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={styles.hero}>
      <img
        style={styles.heroImg}
        alt="Hero dessert"
        src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2400&auto=format&fit=crop"
      />
      <div style={styles.heroOverlay} />
      <div style={{ ...styles.container, ...styles.heroInner }}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroH1}>Artfully Crafted, Made for Sharing</h1>
          <a href="#" style={styles.cta}>BROWSE E‑BOUTIQUE</a>
        </div>
      </div>
    </section>
  );
}

function Patisserie() {
  const cats = [
    { title: "GÂTEAUX", sub: "Cakes", img: gateauxImg },
    { title: "PETIT GÂTEAUX", sub: "Personal Desserts", img: petitGateauxImg },
    { title: "PETIT FOURS", sub: "One-Bite Assortments", img: petitFoursImg }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.containerWide}>
        <h2 style={{ margin: "0 0 28px", fontSize: 28, fontWeight: 500, color: "#4b4b4b" }}>
          Patisserie
        </h2>
        <div style={styles.grid}>
          {cats.map((c, i) => (
            <div
              key={i}
              style={{ ...styles.item, cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector("img").style.transform = "scale(1.04)";
                e.currentTarget.querySelector(".line").style.width = "100%";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector("img").style.transform = "scale(1)";
                e.currentTarget.querySelector(".line").style.width = "0";
              }}
            >
              <div style={styles.imgWrap}>
                <img src={c.img} alt={c.sub} style={styles.img} />
                <span className="line" style={styles.hoverLine} />
              </div>
              <div style={styles.badge}>
                <h3 style={styles.badgeTitle}>{c.title}</h3>
                <p style={styles.badgeSub}>{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.foot}>
      <div style={styles.container}>© {new Date().getFullYear()} Lumière Patisserie – Demo</div>
    </footer>
  );
}

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Patisserie />
      <Footer />
    </div>
  );
}
