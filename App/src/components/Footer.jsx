import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const wrap = { maxWidth: 1240, margin: "0 auto", padding: "0 24px" };

  const foot = {
    borderTop: "1px solid #eee",
    background: "#fff",
    padding: "48px 0 28px",
    color: "#2b2b2b",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
    gap: 32,
    alignItems: "start",
  };

  const title = { fontSize: 14, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", margin: "0 0 10px" };
  const subtitle = { fontSize: 22, margin: "0 0 16px", fontWeight: 600 };
  const list = { listStyle: "none", margin: 0, padding: 0, lineHeight: 2 };
  const a = { color: "#222", textDecoration: "none", fontWeight: 600 };
  const text = { margin: "0 0 10px", lineHeight: 1.7 };

  const socials = { display: "flex", gap: 12, marginTop: 10 };
  const socialBtn = {
    width: 36, height: 36, display: "grid", placeItems: "center",
    borderRadius: 999, background: "#f3f3f3", color: "#000",
  };

  const small = {
    marginTop: 30,
    paddingTop: 18,
    borderTop: "1px solid #eee",
    fontSize: 13,
    color: "#666",
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap",
  };

  return (
    <footer style={foot}>
      <div style={wrap}>
        <div style={grid}>
          {/* Col 1 — Tagline + Social */}
          <div>
            <h6 style={title}>Oh La La!</h6>
            <h4 style={subtitle}>We bake with love. Join us</h4>

            <div style={socials}>
              {/* Facebook */}
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/Lumierepatisserietoronto/"
                target="_blank"
                rel="noopener"
                style={socialBtn}
              >
                <svg viewBox="0 0 9 17" width="14" height="14" fill="currentColor">
                  <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/lumierepatisserie.to"
                target="_blank"
                rel="noopener"
                style={socialBtn}
              >
                <svg viewBox="0 0 48 48" width="18" height="18" fill="currentColor">
                  <path d="M24 9c-6.6 0-7.45.03-10.01.15-2.57.12-4.3.52-5.84 1.13a9.3 9.3 0 0 0-3.37 2.2 9.3 9.3 0 0 0-2.2 3.37c-.6 1.54-1 3.27-1.13 5.84C1.33 25.05 1.3 25.9 1.3 32.5s.03 7.45.15 10.01c.12 2.57.52 4.3 1.13 5.84a9.3 9.3 0 0 0 2.2 3.37 9.3 9.3 0 0 0 3.37 2.2c1.54.6 3.27 1 5.84 1.13 2.56.12 3.41.15 10.01.15s7.45-.03 10.01-.15c2.57-.12 4.3-.52 5.84-1.13a9.3 9.3 0 0 0 3.37-2.2 9.3 9.3 0 0 0 2.2-3.37c.6-1.54 1-3.27 1.13-5.84.12-2.56.15-3.41.15-10.01s-.03-7.45-.15-10.01c-.12-2.57-.52-4.3-1.13-5.84a9.3 9.3 0 0 0-2.2-3.37 9.3 9.3 0 0 0-3.37-2.2c-1.54-.6-3.27-1-5.84-1.13C31.45 9.03 30.6 9 24 9Zm0 6.3c6.38 0 7.14.02 9.6.14 2.03.1 3.14.41 3.85.68.8.3 1.34.62 1.95 1.24.61.61.94 1.15 1.23 1.95.28.7.59 1.82.69 3.85.12 2.46.14 3.22.14 9.6s-.02 7.14-.14 9.6c-.1 2.03-.41 3.14-.69 3.85-.3.8-.62 1.34-1.23 1.95-.61.61-1.15.94-1.95 1.23-.7.28-1.82.59-3.85.69-2.46.12-3.22.14-9.6.14s-7.14-.02-9.6-.14c-2.03-.1-3.14-.41-3.85-.69-.8-.3-1.34-.62-1.95-1.23-.61-.61-.94-1.15-1.24-1.95-.27-.7-.58-1.82-.68-3.85-.12-2.46-.14-3.22-.14-9.6s.02-7.14.14-9.6c.1-2.03.41-3.14.68-3.85.3-.8.62-1.34 1.24-1.95.61-.61 1.15-.94 1.95-1.24.7-.27 1.82-.58 3.85-.68 2.46-.12 3.22-.14 9.6-.14Zm0 6.7a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm0 13.8a5.3 5.3 0 1 1 0-10.6 5.3 5.3 0 0 1 0 10.6Zm8.4-14.8a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Menu A */}
          <div>
            <h6 style={title}>Lumiere Patisserie</h6>
            <ul style={list}>
              <li><Link to="/pages/e-boutique" style={a}>E-Boutique</Link></li>
              <li><Link to="/pages/about" style={a}>Our Story</Link></li>
              <li><Link to="/pages/contact" style={a}>Contact</Link></li>
              <li><Link to="/products/lumiere-gift-card" style={a}>Lumière Gift Card</Link></li>
            </ul>
          </div>

          {/* Col 3 — Menu B */}
          <div>
            <h6 style={title}>Company</h6>
            <ul style={list}>
              <li><Link to="/policies/refund-policy" style={a}>PICKUP &amp; DELIVERY</Link></li>
              <li><Link to="/policies/privacy-policy" style={a}>PRIVACY</Link></li>
              <li><Link to="/policies/terms-of-service" style={a}>TERMS OF USE</Link></li>
              <li><Link to="/faq" style={a}>FAQ</Link></li>
            </ul>
          </div>

          {/* Col 4 — Contact text */}
          <div>
            <p style={text}>
              <strong>For orders or questions</strong><br />
              <a href="tel:+16472938815" style={{ ...a, fontWeight: 700 }}>(647) 293-8815</a>
            </p>
            <p style={text}>
              1102 Centre St #1, Thornhill, ON L4J 3M8
            </p>
          </div>
        </div>

        {/* bottom bar */}
        <div style={small}>
          <span>© {new Date().getFullYear()} Lumière Patisserie</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
