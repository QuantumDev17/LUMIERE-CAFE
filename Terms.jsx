import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
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

  const toc = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    listStyle: "none",
    padding: 0,
    margin: "10px 0 0",
    fontSize: 15,
  };
  const a = { color: "#111", textDecoration: "none", fontWeight: 600 };

  const h2 = { fontSize: 22, margin: "0 0 10px", color: "#1d1d1f" };
  const p = { margin: "0 0 12px", color: "#3c3c3c", lineHeight: 1.8 };

  return (
    <>
      <Header onHeight={setHeaderH} />

      <main style={{ padding: `${headerH + 32}px 0 72px` }}>
        <div style={wrap}>
          <h1 style={h1}>Terms of Service</h1>
          <p style={sub}>
            These Terms of Service (“Terms”) govern your access to and use of the Lumière Pâtisserie
            website, products, and services. By visiting our site or placing an order, you agree to these
            Terms. If you do not agree, please do not use our services.
          </p>

          {/* TOC */}
          <div style={{ ...card, marginTop: 20 }}>
            <strong>On this page</strong>
            <ul style={toc}>
              <li><a href="#eligibility" style={a}>1. Eligibility & Account</a></li>
              <li><a href="#orders" style={a}>2. Store & Orders</a></li>
              <li><a href="#pricing" style={a}>3. Pricing & Payment</a></li>
              <li><a href="#pickup" style={a}>4. Pickup</a></li>
              <li><a href="#cancellations" style={a}>5. Cancellations & Refunds</a></li>
              <li><a href="#custom" style={a}>6. Modifications & Custom Orders</a></li>
              <li><a href="#giftcards" style={a}>7. Gift Cards</a></li>
              <li><a href="#ip" style={a}>8. Intellectual Property</a></li>
              <li><a href="#conduct" style={a}>9. Acceptable Use</a></li>
              <li><a href="#links" style={a}>10. Third‑Party Links</a></li>
              <li><a href="#warranty" style={a}>11. Disclaimers</a></li>
              <li><a href="#liability" style={a}>12. Limitation of Liability</a></li>
              <li><a href="#indemnity" style={a}>13. Indemnification</a></li>
              <li><a href="#law" style={a}>14. Governing Law</a></li>
              <li><a href="#changes" style={a}>15. Changes to these Terms</a></li>
              <li><a href="#contact" style={a}>16. Contact Us</a></li>
            </ul>
          </div>

          {/* Sections */}
          <div style={{ display: "grid", gap: 18, marginTop: 18 }}>
            <section id="eligibility" style={card}>
              <h2 style={h2}>1. Eligibility & Account</h2>
              <p style={p}>
                You must be the age of majority in your province/territory or have parental consent to
                use our services. You are responsible for the accuracy of information you provide and for
                keeping your account (if any) secure.
              </p>
            </section>

            <section id="orders" style={card}>
              <h2 style={h2}>2. Store & Orders</h2>
              <p style={p}>
                Product availability is subject to change. Images are for presentation; actual decoration
                or appearance may vary slightly. An order is accepted when you receive an order
                confirmation. We reserve the right to refuse or cancel any order (for example due to
                suspected fraud, inventory limits, or errors).
              </p>
            </section>

            <section id="pricing" style={card}>
              <h2 style={h2}>3. Pricing & Payment</h2>
              <p style={p}>
                All prices are listed in CAD and may be subject to applicable taxes. We accept the
                payment methods shown at checkout. By submitting payment, you warrant that you are
                authorized to use the selected method and that the information is accurate.
              </p>
            </section>

            <section id="pickup" style={card}>
              <h2 style={h2}>4. Pickup</h2>
              <p style={p}>
                Orders are picked up at: <strong>1102 Centre St #1, Thornhill, ON L4J 3M8</strong>. Please
                bring your name, phone number, or order number. We currently do not offer delivery.
              </p>
            </section>

            <section id="cancellations" style={card}>
              <h2 style={h2}>5. Cancellations & Refunds</h2>
              <p style={p}>
                Because our products are freshly prepared, cancellations or changes may not be possible
                once production begins. If something is wrong with your order, please contact us the same
                day so we can help. Refunds, if granted, are issued to the original payment method.
              </p>
            </section>

            <section id="custom" style={card}>
              <h2 style={h2}>6. Modifications & Custom Orders</h2>
              <p style={p}>
                To protect quality and consistency, we do not modify menu items and we are not accepting
                custom orders at this time.
              </p>
            </section>

            <section id="giftcards" style={card}>
              <h2 style={h2}>7. Gift Cards</h2>
              <p style={p}>
                Lumière gift cards are redeemable for eligible purchases and are not reloadable,
                refundable, or redeemable for cash except where required by law. Treat gift cards like
                cash; we are not responsible for lost or stolen cards.
              </p>
            </section>

            <section id="ip" style={card}>
              <h2 style={h2}>8. Intellectual Property</h2>
              <p style={p}>
                All site content—including logos, photography, product names, text, and designs—is owned
                by or licensed to Lumière Pâtisserie and protected by law. You may not use our marks or
                content without written permission.
              </p>
            </section>

            <section id="conduct" style={card}>
              <h2 style={h2}>9. Acceptable Use</h2>
              <p style={p}>
                You agree not to misuse the site, interfere with security, harvest data, reverse engineer,
                or use automated means to access the site, and not to violate any law in connection with
                your use.
              </p>
            </section>

            <section id="links" style={card}>
              <h2 style={h2}>10. Third‑Party Links</h2>
              <p style={p}>
                Our site may link to third‑party websites or services we do not control. We are not
                responsible for their content, policies, or practices.
              </p>
            </section>

            <section id="warranty" style={card}>
              <h2 style={h2}>11. Disclaimers</h2>
              <p style={p}>
                Services are provided “as is” and “as available.” To the maximum extent permitted by law,
                we disclaim all warranties, express or implied, including merchantability, fitness for a
                particular purpose, and non‑infringement.
              </p>
            </section>

            <section id="liability" style={card}>
              <h2 style={h2}>12. Limitation of Liability</h2>
              <p style={p}>
                To the maximum extent permitted by law, Lumière Pâtisserie and its owners, employees, and
                agents will not be liable for any indirect, incidental, special, consequential, or
                punitive damages, or loss of profits or data, arising out of your use of our services.
              </p>
            </section>

            <section id="indemnity" style={card}>
              <h2 style={h2}>13. Indemnification</h2>
              <p style={p}>
                You agree to indemnify and hold us harmless from claims, losses, and expenses (including
                legal fees) arising from your violation of these Terms or misuse of the services.
              </p>
            </section>

            <section id="law" style={card}>
              <h2 style={h2}>14. Governing Law</h2>
              <p style={p}>
                These Terms are governed by the laws of the Province of Ontario and the federal laws of
                Canada applicable therein, without regard to conflict‑of‑laws principles.
              </p>
            </section>

            <section id="changes" style={card}>
              <h2 style={h2}>15. Changes to these Terms</h2>
              <p style={p}>
                We may update these Terms from time to time. Changes are effective when posted to this
                page with an updated “Last updated” date.
              </p>
              <p style={{ ...p, marginBottom: 0 }}><em>Last updated: August 2025</em></p>
            </section>

            <section id="contact" style={card}>
              <h2 style={h2}>16. Contact Us</h2>
              <p style={p}>
                Questions? Please contact us at <a href="tel:+16472938815" style={a}>(647) 293‑8815</a> or
                visit us at 1102 Centre St #1, Thornhill, ON L4J 3M8.
              </p>
              <p style={{ ...p, marginBottom: 0 }}>
                This page provides general information and is not legal advice.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
