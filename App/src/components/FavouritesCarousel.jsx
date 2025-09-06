// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const styles = {
  section: { padding: "72px 0" },
  container: { maxWidth: 1240, margin: "0 auto", padding: "0 24px" },

  headingRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  h2: { fontSize: 28, fontWeight: 700, letterSpacing: ".02em", margin: 0, color: "#1c1c1c" },
  h2Link: { color: "inherit", textDecoration: "none" },

  imgBox: {
    position: "relative",
    width: "100%",
    paddingTop: "100%",          // square
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 18px 44px rgba(0,0,0,.12)",
    background: "#f6f6f6",
  },
  img: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity .35s ease",
  },

  captionLink: { display: "block", marginTop: 12, textDecoration: "none", color: "#222" },
  title: { display: "block", fontWeight: 700, fontSize: 18, marginBottom: 6 },
  price: { fontWeight: 600, color: "#333" },
};

// Put your real images in /public and update paths as needed
const favourites = [
  { title: "Sweet Pleasure",         price: 9.0,  href: "/products/plaisir-sucre",               img1: "/Sweet.png",         img2: "/sweet1.png" },
  { title: "Fraisier",               price: 45.0, href: "/products/fraisier",                    img1: "/Fraisier.png",      img2: "/Fraisier1.png" },
  { title: "Tiramichoux",            price: 8.0,  href: "/products/tiramicoux",                  img1: "/tiramisuhome.png",  img2: "/Tiramichoux2.png" },
  { title: "Lumiere Cake",           price: 18.0, href: "/products/lumiere_cake",                img1: "/Lumiere Cheesecake.png",       img2: "/Lumiere Cheesecake2.png" },
  { title: "Petit Fours (Box of 4)", price: 18.0, href: "/products/petit-four-box-4-pieces",     img1: "/Bitters.png",       img2: "/Petit Fours (Box of 4)2.png" },
];

function ProductCard({ p }) {
  const [hover, setHover] = useState(false);
  const second = p.img2 || p.img1;

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={styles.imgBox}>
        <img src={p.img1} alt="" style={{ ...styles.img, opacity: hover ? 0 : 1 }} />
        <img src={second} alt="" style={{ ...styles.img, opacity: hover ? 1 : 0 }} />
      </div>

      <Link to={p.href} style={styles.captionLink}>
        <span style={styles.title}>{p.title}</span>
        <div style={styles.price}>${p.price.toFixed(2)}</div>
      </Link>
    </div>
  );
}

export default function FavouritesCarousel() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headingRow}>
          <h2 style={styles.h2}>
            <Link to="/collections/populaire" style={styles.h2Link}>
              Today&apos;s favourites
            </Link>
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          slidesPerView={3}
          spaceBetween={20}
          navigation
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 14 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {favourites.map((p, i) => (
            <SwiperSlide key={i}>
              <ProductCard p={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
