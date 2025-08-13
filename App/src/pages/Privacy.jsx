import React, { useState } from "react";
import Header from "../components/Header";

export default function Privacy() {
  const [headerH, setHeaderH] = useState(0);

  const wrap = { maxWidth: 1240, margin: "0 auto", padding: "0 24px" };
  const h1 = { fontSize: 48, lineHeight: 1.15, fontWeight: 400, color: "#2f2f2f", margin: "0 0 10px" };
  const sub = { color: "#4b4b4b", fontSize: 18, lineHeight: 1.8, margin: 0, maxWidth: 860 };

  const card = {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 12,
    padding: 24,
    boxShadow: "0 18px 44px rgba(0,0,0,.06)",
  };

  const h2 = { fontSize: 22, margin: "0 0 10px", color: "#1d1d1f" };
  const p = { margin: "0 0 12px", color: "#3c3c3c", lineHeight: 1.8 };
  const ul = { margin: "0 0 12px 18px", lineHeight: 1.8 };
  const a = { color: "#111", textDecoration: "none", fontWeight: 600 };

  return (
    <>
      <Header onHeight={setHeaderH} />

      <main style={{ padding: `${headerH + 32}px 0 72px` }}>
        <div style={wrap}>
          <h1 style={h1}>Privacy Policy</h1>
          <p style={sub}>
            This Privacy Policy explains how Lumière Pâtisserie (“we”, “us”) collects, uses, discloses,
            and safeguards personal information. By using our website or services, you consent to the
            practices described below.
          </p>

          <div style={{ display: "grid", gap: 18, marginTop: 18 }}>
            <section style={card}>
              <h2 style={h2}>1) Information We Collect</h2>
              <p style={p}><strong>Information you provide</strong> — for example: name, email, phone number, order details, pickup preferences, and messages you send us.</p>
              <p style={p}><strong>Automatic data</strong> — when you visit our site, we may receive technical data such as IP address, device/browser type, pages viewed, and timestamps.</p>
              <p style={p}><strong>Cookies</strong> — small files saved on your device to enable site functionality, remember preferences, and understand usage.</p>
            </section>

            <section style={card}>
              <h2 style={h2}>2) How We Use Information</h2>
              <ul style={ul}>
                <li>Process and manage orders, pickups, and customer support;</li>
                <li>Operate, secure, and improve our website and services;</li>
                <li>Communicate with you about your orders or inquiries;</li>
                <li>Comply with legal obligations and enforce our Terms.</li>
              </ul>
            </section>

            <section style={card}>
              <h2 style={h2}>3) Legal Bases (where applicable)</h2>
              <ul style={ul}>
                <li>Your consent (e.g., when contacting us or accepting certain cookies);</li>
                <li>Performance of a contract (fulfilling your order);</li>
                <li>Legitimate interests (security, site operations, quality improvement);</li>
                <li>Compliance with legal obligations.</li>
              </ul>
            </section>

            <section style={card}>
              <h2 style={h2}>4) Sharing of Information</h2>
              <p style={p}>
                We may share information with trusted service providers (e.g., payments, hosting,
                analytics) who process it on our behalf under appropriate safeguards. We may also share
                information to comply with law, enforce our Terms, or protect rights and safety. We do not
                sell personal information.
              </p>
            </section>

            <section style={card}>
              <h2 style={h2}>5) Retention</h2>
              <p style={p}>
                We keep personal information only as long as necessary for the purposes described above,
                unless a longer retention period is required or permitted by law (e.g., tax or accounting).
              </p>
            </section>

            <section style={card}>
              <h2 style={h2}>6) Your Choices & Rights</h2>
              <ul style={ul}>
                <li>You can request access to or correction of your personal information;</li>
                <li>You may withdraw consent where processing is based on consent;</li>
                <li>You can disable non‑essential cookies in your browser settings.</li>
              </ul>
              <p style={p}>
                To exercise a privacy request, contact us at <a href="tel:+16472938815" style={a}>(647) 293‑8815</a>.
              </p>
            </section>

            <section style={card}>
              <h2 style={h2}>7) Cookies</h2>
              <p style={p}>
                We use essential cookies for site functionality and may use analytics cookies to
                understand how the site is used. You can manage cookies through your browser. Blocking
                certain cookies may impact site features.
              </p>
            </section>

            <section style={card}>
              <h2 style={h2}>8) Security</h2>
              <p style={p}>
                We implement reasonable physical, technical, and organizational measures to protect
                information. No security controls are perfect; we cannot guarantee absolute security.
              </p>
            </section>

            <section style={card}>
              <h2 style={h2}>9) Children</h2>
              <p style={p}>
                Our services are not directed to children under the age of 13. If we learn we have
                collected personal information from a child without appropriate consent, we will delete it.
              </p>
            </section>

            <section style={card}>
              <h2 style={h2}>10) International Transfers</h2>
              <p style={p}>
                Our service providers may store or process information outside your province or country.
                As a result, information may be subject to the laws of those jurisdictions.
              </p>
            </section>

            <section style={card}>
              <h2 style={h2}>11) Changes to this Policy</h2>
              <p style={p}>
                We may update this Privacy Policy periodically. Changes take effect when posted on this
                page with an updated “Last updated” date.
              </p>
              <p style={{ ...p, marginBottom: 0 }}><em>Last updated: August 2025</em></p>
            </section>

            <section style={card}>
              <h2 style={h2}>12) Contact Us</h2>
              <p style={{ ...p, marginBottom: 0 }}>
                Questions about privacy? Call us at <a href="tel:+16472938815" style={a}>(647) 293‑8815</a> or
                visit us at 1102 Centre St #1, Thornhill, ON L4J 3M8.
              </p>
            </section>
          </div>
        </div>
      </main>

    </>
  );
}
