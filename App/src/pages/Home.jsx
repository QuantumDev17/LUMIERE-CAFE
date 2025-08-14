import React, { useEffect } from "react";
import FavouritesCarousel from "../components/FavouritesCarousel";
import ShowcaseImage from "../components/ShowcaseImage";
import VisitUs from "../components/VisitUs";

/* public/ images */
const gateauxImg = "/Noisette%20Noir.png";
const petitGateauxImg = "/Sweet.png";
const petitFoursImg = "/Bitters.png";
const featureBig = "/tiramisuhome.png";
const featureSmall = "/cherry.png";

/* bread band images */
const boulangerie1 = "/plain.png";
const boulangerie2 = "/bakershelf.png";
const boulangerie3 = "/Delicatessen.png";

const styles = {
  container: { maxWidth: 1240, margin: "0 auto", padding: "0 24px" },
  containerWide: { maxWidth: 1440, margin: "0 auto", padding: "0 24px" },

  /* ✅ Full-bleed hero with scrollbar compensation */
  hero: {
    width: "calc(100vw - var(--sbw, 0px))",
    marginLeft: "calc(50% - 50vw + var(--sbw, 0px) / 2)",
    marginRight: "calc(50% - 50vw + var(--sbw, 0px) / 2)",
    position: "relative",
    minHeight: 520,
    height: "min(80vh, 720px)",
    overflow: "clip",
  },
  heroImg: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" },
  heroOverlay: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)" },
  heroInner: { position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" },
  heroContent: { textAlign: "center", color: "#fff" },
  heroH1: {
    fontFamily: "'Filson Pro', system-ui, sans-serif",
    fontSize: 64,
    fontWeight: 400,
    lineHeight: 1.1,
    margin: 0,
    textShadow: "0 2px 12px rgba(0,0,0,0.35)",
  },
  cta: {
    display: "inline-block",
    marginTop: 28,
    padding: "14px 26px",
    background: "#fff",
    color: "#111",
    borderRadius: 3,
    border: "1px solid #ddd",
    fontWeight: 700,
    letterSpacing: "0.08em",
    fontSize: 14,
    textDecoration: "none",
  },

  section: { padding: "72px 0" },

  grid3: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 },
  grid3Wide: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 },

  card: { position: "relative", overflow: "hidden", borderRadius: 6 },
  cardImg: { width: "100%", height: "auto", display: "block", transition: "transform .35s ease" },

  overlayFlush: {
    position: "absolute",
    left: 0,
    bottom: 0,
    background: "rgba(255,255,255,0.94)",
    borderTopRightRadius: 12,
    padding: "16px 20px",
    zIndex: 2,
  },
  titleLarge: { margin: 0, color: "#0c0c0c", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".02em", fontSize: 28 },
  titleSmall: { margin: 0, color: "#0c0c0c", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".02em", fontSize: 22 },
  sub: { marginTop: 8, fontWeight: 700, fontSize: 16, color: "#111" },

  featGrid: {
    maxWidth: 1240,
    margin: "0 auto",
    padding: "0 24px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: 64,
  },
  featLeft: { alignSelf: "center", marginTop: -300 },
  featH2: { fontSize: 34, fontWeight: 700, lineHeight: 1.25, margin: "0 0 12px", color: "#1d1d1f" },
  featP: { fontSize: 16, lineHeight: 1.75, color: "#3e3e3e", margin: "0 0 22px", maxWidth: 520 },
  featBtn: {
    display: "inline-block",
    padding: "12px 18px",
    fontWeight: 700,
    fontSize: 14,
    borderRadius: 4,
    background: "linear-gradient(90deg,#fbc2eb 0%,#a6c1ee 100%)",
    color: "#000",
    textDecoration: "none",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  },

  featRight: { display: "grid", gridTemplateRows: "auto auto", rowGap: 40, overflow: "visible" },
  featBig: { width: "80%", height: "auto", boxShadow: "0 18px 40px rgba(0,0,0,0.12)" },
  featSmall: {
    width: "50%",
    height: "auto",
    boxShadow: "0 14px 32px rgba(0,0,0,0.1)",
    justifySelf: "start",
    transform: "translateX(-102%)",
  },

  giftGrid: {
    maxWidth: 1240,
    margin: "0 auto",
    padding: "0 24px",
    display: "grid",
    gridTemplateColumns: "1.05fr .95fr",
    gap: 64,
    alignItems: "center",
  },
  giftImgWrap: {
    width: "95%",
    aspectRatio: "1 / 1",
    overflow: "hidden",
    boxShadow: "0 22px 48px rgba(0,0,0,.12)",
  },
  giftImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  giftTextCol: { textAlign: "center" },
  giftH2: { fontSize: 44, fontWeight: 400, letterSpacing: ".01em", color: "#3a3a3a", margin: "0 0 14px" },
  giftAccent: { width: 44, height: 3, borderRadius: 2, margin: "0 auto 18px", background: "linear-gradient(90deg,#f6a6d5,#c7b3ff,#9ad3ff)" },
  giftP: { maxWidth: 520, margin: "0 auto 26px", color: "#444", lineHeight: 1.7, fontSize: 16 },
  giftBtn: {
    display: "inline-block",
    padding: "12px 22px",
    fontWeight: 700,
    fontSize: 14,
    borderRadius: 6,
    textDecoration: "none",
    color: "#111",
    background: "linear-gradient(90deg,#fbc2eb 0%,#f7b3c9 35%,#f1b8a3 100%)",
    boxShadow: "0 10px 28px rgba(0,0,0,.10)",
  },
};

function Hero() {
  return (
    <section style={styles.hero}>
      <img style={styles.heroImg} alt="Hero dessert" src="/desserts.jpg" />
      <div style={styles.heroOverlay} />
      <div style={{ ...styles.container, ...styles.heroInner }}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroH1}>Artfully Crafted, Made for Sharing</h1>
          <a href="/e-boutique" style={styles.cta}>BROWSE MENU</a>
        </div>
      </div>
    </section>
  );
}

function Patisserie() {
  const cats = [
    { title: "Cakes", img: gateauxImg },
    { title: "Personal Desserts", img: petitGateauxImg },
    { title: "One-Bite Assortments", img: petitFoursImg },
  ];
  return (
    <section style={styles.section}>
      <div style={styles.containerWide}>
        <h2 style={{ margin: "0 0 28px", fontSize: 28, fontWeight: 500, color: "#4b4b4b" }}>Patisserie</h2>
        <div style={styles.grid3}>
          {cats.map((c) => (
            <div
              key={c.title}
              style={styles.card}
              onMouseEnter={(e) => { e.currentTarget.querySelector("img").style.transform = "scale(1.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.querySelector("img").style.transform = "scale(1)"; }}
            >
              <img src={c.img} alt={c.sub} style={styles.cardImg} />
              <div className="overlay__content has-button" style={styles.overlayFlush}>
                <h2 className="line-1" style={styles.titleLarge}>{c.title}</h2>
                <div className="line-3" style={styles.sub}>{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBand() {
  const mq = `
    @media (max-width: 1000px) {
      .featureGrid { grid-template-columns: 1fr; gap: 32px; }
      .featSmall { transform: none; }
    }
  `;
  return (
    <>
      <style>{mq}</style>
      <section style={{ padding: "96px 0", fontFamily: '"Filson Pro", system-ui, sans-serif' }}>
        <div style={styles.featGrid} className="featureGrid">
          <div style={styles.featLeft}>
            <h2 style={styles.featH2}>A little treat for the senses</h2>
            <p style={styles.featP}>
              Paired with a steaming cappuccino, it is a true cinematic experience of the aromas
              and flavours of Paris
            </p>
            <a href="#" style={styles.featBtn}>SEE PETITS GÂTEAUX</a>
          </div>
          <div style={styles.featRight}>
            <img src={featureBig} alt="Feature large" style={styles.featBig} />
            <img src={featureSmall} alt="Feature small" style={styles.featSmall} className="featSmall" />
          </div>
        </div>
      </section>
    </>
  );
}

function Boulangerie() {
  const breads = [
    { title: "BOULANGERIE", sub: "Artisanal Breads", img: boulangerie1 },
    { title: "ÉTAGÈRE DE BOULANGERIE", sub: "Bakery Shelf", img: boulangerie2 },
    { title: "DELICATESSEN", sub: "Spreads & Quiches", img: boulangerie3 },
  ];
  return (
    <section style={{ padding: "72px 0" }}>
      <div style={styles.containerWide}>
        <h2 style={{ margin: "0 0 28px", fontSize: 28, fontWeight: 500, color: "#4b4b4b" }}>
          Boulangerie, Delicatessen & Biscuits
        </h2>
        <div style={styles.grid3Wide}>
          {breads.map((b) => (
            <div key={b.title} style={styles.card}>
              <img src={b.img} alt={b.sub} style={styles.cardImg} />
              <div className="overlay__content" style={styles.overlayFlush}>
                <h3 style={styles.titleSmall}>{b.title}</h3>
                <div style={styles.sub}>{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GiftBoxes() {
  return (
    <section style={{ padding: "96px 0" }}>
      <div style={styles.giftGrid}>
        <div style={styles.giftImgWrap}>
          <img src={petitFoursImg} alt="Gift box selection" style={styles.giftImg} />
        </div>
        <div style={styles.giftTextCol}>
          <h2 style={styles.giftH2}>Illuminate a moment</h2>
          <div style={styles.giftAccent} />
          <p style={styles.giftP}>
            Immerse yourself in the artistry of taste and embark on a journey of unparalleled pleasure
          </p>
          <a href="/collections/petit-gateaux-personal-desserts" style={styles.giftBtn}>
            SEE OUR GIFT BOXES
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  // Set --sbw for the full-bleed hero so it lines up perfectly with the viewport
  useEffect(() => {
    const setSBW = () => {
      const sbw = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty("--sbw", `${sbw}px`);
    };
    setSBW();
    window.addEventListener("resize", setSBW);
    return () => window.removeEventListener("resize", setSBW);
  }, []);

  return (
    <div>
      {/* Force the fixed header to occupy the whole row across the page */}

      <Hero />
      <Patisserie />
      <FeatureBand />
      <Boulangerie />
      <GiftBoxes />
      <FavouritesCarousel />
      <ShowcaseImage imgSrc="/Lumière.png" objectPosition="center right" />
      <VisitUs />
    </div>
  );
}
