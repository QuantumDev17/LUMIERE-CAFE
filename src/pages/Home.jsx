import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const gateauxImg = "/Noisette%20Noir.png";
const petitGateauxImg = "/Sweet.png";
const petitFoursImg = "/Bitters.png";

const featureBig = "/tiramisuhome.png";
const featureSmall = "/cherry.png";

// 🔁 CHANGE these to your bread images in /public
const boulangerie1 = "/Plain-Sourdough.png";
const boulangerie2 = "/bakershelf.png";
const boulangerie3 = "/Delicatessen.png";

const styles = {
  container: { maxWidth: 1240, margin: "0 auto", padding: "0 24px" },
  containerWide: { maxWidth: 1440, margin: "0 auto", padding: "0 24px" },

  header: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    background: "#fff", borderBottom: "1px solid #eee", transition: "box-shadow .2s ease",
  },
  headerBar: {
    width: "98%", padding: "18px 24px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
  },
  headerInner: { height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" },
  logoBox: { flex: "0 0 auto", display: "flex", alignItems: "center" },
  logoLink: { display: "inline-flex", alignItems: "center" },
  logoImg: { height: 80, width: "auto", display: "block" },

  navWrap: { flex: "1 1 auto", display: "flex", justifyContent: "center" },
  nav: { display: "flex", alignItems: "center", gap: 80, fontSize: 18 },
  navLink: { color: "#202020", textDecoration: "none", fontWeight: 600 },
  right: { flex: "0 0 auto", display: "flex", alignItems: "center", gap: 50 },
  accountLink: { color: "#202020", textDecoration: "none", fontWeight: 600, fontSize: 18 },
  iconBtn: { background: "transparent", border: "none", padding: 0, cursor: "pointer", lineHeight: 0 },

  hero: { position: "relative", minHeight: 520, height: "calc(100vh)", overflow: "hidden" },
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
  badgeSub: { margin: "4px 0 0", fontSize: 15, fontWeight: 600, color: "#333" },
};

function Header({ onHeight }) {
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
    <header ref={ref} style={{ ...styles.header, boxShadow: scrolled ? "0 2px 18px rgba(0,0,0,0.06)" : "none" }}>
      <div style={styles.headerBar}>
        <div style={styles.logoBox}>
          <Link to="/" style={styles.logoLink} aria-label="Lumière Patisserie – Home">
            <img src="/lumiere.png" alt="Lumière Patisserie" style={styles.logoImg} />
          </Link>
        </div>

        <div style={styles.navWrap}>
          <nav style={styles.nav}>
            {["E-Boutique", "Our Story", "Contact", "Lumière Gift Card"].map((item) => (
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

function Hero({ offsetTop }) {
  return (
    <section style={{ ...styles.hero, marginTop: offsetTop }}>
      <img style={styles.heroImg} alt="Hero dessert" src="/desserts.jpg" />
      <div style={styles.heroOverlay} />
      <div style={{ ...styles.container, ...styles.heroInner }}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroH1}>Artfully Crafted, Made for Sharing</h1>
          <a href="#" style={styles.cta}>BROWSE E-BOUTIQUE</a>
        </div>
      </div>
    </section>
  );
}

function Patisserie() {
  const cats = [
    { title: "GÂTEAUX", sub: "Cakes", img: gateauxImg },
    { title: "PETIT GÂTEAUX", sub: "Personal Desserts", img: petitGateauxImg },
    { title: "PETIT FOURS", sub: "One-Bite Assortments", img: petitFoursImg },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.containerWide}>
        <h2 style={{ margin: "0 0 28px", fontSize: 28, fontWeight: 500, color: "#4b4b4b" }}>Patisserie</h2>
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

function FeatureBand() {
  return (
    <section style={{ padding: "96px 0", fontFamily: '"Filson Pro", sans-serif' }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: 64,
        }}
      >
        <div style={{ alignSelf: "center", marginTop: "-450px" }}>
          <h2 style={{ fontSize: "34px", fontWeight: 700, lineHeight: 1.25, margin: "0 0 12px", color: "#1d1d1f" }}>
            A little treat for the senses
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#3e3e3e", margin: "0 0 22px", maxWidth: 520 }}>
            Paired with a steaming cappuccino, it is a true cinematic experience of the aromas and flavours of Paris
          </p>
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              fontWeight: 700,
              fontSize: 14,
              borderRadius: 4,
              background: "linear-gradient(90deg,#fbc2eb 0%,#a6c1ee 100%)",
              color: "#000",
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            }}
          >
            SEE PETITS GÂTEAUX
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateRows: "auto auto", rowGap: 40 }}>
          <img src={featureBig} alt="Feature large" style={{ width: "80%", height: "auto", boxShadow: "0 18px 40px rgba(0,0,0,0.12)" }} />
          <img
            src={featureSmall}
            alt="Feature small"
            style={{ width: "50%", height: "auto", boxShadow: "0 14px 32px rgba(0,0,0,0.1)", justifySelf: "start", marginLeft: "-70%" }}
          />
        </div>
      </div>
    </section>
  );
}

/* NEW: Boulangerie, Delicatessen & Biscuits (bread band) */
function Boulangerie() {
  const items = [
    { title: "BOULANGERIE", sub: "Artisanal Breads", img: boulangerie1 },
    { title: "ÉTAGÈRE DE BOULANGERIE", sub: "Bakery Shelf", img: boulangerie2 },
    { title: "DELICATESSEN", sub: "Spreads & Quiches", img: boulangerie3 },
  ];

  return (
    <section style={{ padding: "84px 0" }}>
      <div style={styles.containerWide}>
        <h2 style={{ margin: "0 0 28px", fontSize: 28, fontWeight: 500, color: "#4b4b4b" }}>
          Boulangerie, Delicatessen & Biscuits
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {items.map((c) => (
            <div
              key={c.title}
              style={{ position: "relative", overflow: "hidden", cursor: "pointer", borderRadius: 6 }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector("img").style.transform = "scale(1.04)";
                e.currentTarget.querySelector(".line").style.width = "100%";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector("img").style.transform = "scale(1)";
                e.currentTarget.querySelector(".line").style.width = "0";
              }}
            >
              <div style={{ position: "relative" }}>
                <img src={c.img} alt={c.sub} style={{ width: "100%", height: "auto", display: "block", transition: "transform .35s ease" }} />
                <span className="line" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 3, width: 0, background: "#000", transition: "width .3s ease" }} />
              </div>

              <div
                style={{
                  position: "absolute",
                  left: 22,
                  bottom: 22,
                  background: "#fff",
                  padding: "14px 16px",
                  borderRadius: 8,
                  boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
                }}
              >
                <h3 style={{ margin: 0, fontSize: 16, letterSpacing: 0.6, fontWeight: 700 }}>{c.title}</h3>
                <p style={{ margin: "6px 0 0", fontSize: 18, fontWeight: 700, color: "#2b2b2b" }}>{c.sub}</p>
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
  const [headerH, setHeaderH] = useState(0);
  return (
    <div>
      <Header onHeight={setHeaderH} />
      <Hero offsetTop={headerH} />
      <Patisserie />
      <FeatureBand />
      <Boulangerie /> {/* <- NEW bread band with hover */}
      <Footer />
    </div>
  );
}
