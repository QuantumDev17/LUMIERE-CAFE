import React, { useState } from "react";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import "../styles/Contact.css";

function MainContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main style={{ paddingTop: isHome ? 0 : "var(--header-h, 72px)", paddingBottom: 80 }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e-boutique" element={<EBoutique />} />
        <Route path="/contact" element={<Contact />} />
        {/* ✅ Redirect old URL to the new one */}
        <Route path="/pages/contact" element={<Navigate to="/contact" replace />} />
        {/* ...rest of your routes */}
      </Routes>
    </main>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", msg: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: hook backend
    console.log("Contact form:", form);
  };

  return (
    <div className="contact-page">
      {/* Page title */}
      <section className="contact-hero">
        <div className="contact-wrap">
          <h1 className="contact-title">Contact Us</h1>
          <div className="contact-accent" />
          <p className="contact-lede">
            Questions about custom orders, pickup & delivery, or anything else? We’d love to help.
          </p>
        </div>
      </section>

      {/* Info + Map */}
      <section className="contact-wrap">
        <div className="contact-columns">
          {/* Left: Info card */}
          <div className="card">
            <h3 className="card-h3">Get in touch</h3>

            <div className="contact-line">
              <span>Phone</span>
              <a className="link-strong" href="tel:+16472938815">(647) 293-8815</a>
            </div>
            <div className="contact-line">
              <span>Address</span>
              <span>1102 Centre St #1, Thornhill, ON L4J 3M8</span>
            </div>

            <div className="hours">
              <h4>Hours</h4>
              <ul>
                <li><span>Monday</span><em className="badge badge-muted">Closed</em></li>
                <li><span>Tuesday</span><em>9am – 7pm</em></li>
                <li><span>Wednesday</span><em>9am – 7pm</em></li>
                <li><span>Thursday</span><em>9am – 7pm</em></li>
                <li><span>Friday</span><em>9am – 7pm</em></li>
                <li><span>Saturday</span><em>9am – 7pm</em></li>
                <li><span>Sunday</span><em>9am – 7pm</em></li>
              </ul>
            </div>
          </div>

          {/* Right: Map card */}
          <div className="card card-map">
            <iframe
              title="Lumiere Patisserie Map"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 14 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.799211522993!2d-79.441839!3d43.810286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b7f2d9e9e45%3A0x0!2s1102%20Centre%20St%20%231%2C%20Thornhill%2C%20ON%20L4J%203M8!5e0!3m2!1sen!2sca!4v0000000000"
            />
          </div>
        </div>
      </section>

      {/* Message form */}
      <section className="contact-wrap">
        <form className="form-card" onSubmit={onSubmit}>
          <div className="form-head">
            <h3>Send us a message</h3>
            <p>We usually reply within one business day.</p>
          </div>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name" name="name" placeholder="Your name"
              value={form.name} onChange={onChange} required
            />
          </div>

          <div className="row-2">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email" placeholder="you@example.com"
                value={form.email} onChange={onChange} required
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone <span className="muted">(optional)</span></label>
              <input
                id="phone" name="phone" placeholder="(647) 293-8815"
                value={form.phone} onChange={onChange}
=======

export default function Contact() {
  const wrap = { maxWidth: 1240, margin: "0 auto", padding: "0 24px" };

  const h1 = { fontSize: 48, lineHeight: 1.15, fontWeight: 400, color: "#2f2f2f", margin: "0 0 10px" };
  const sub = { color: "#4b4b4b", fontSize: 18, lineHeight: 1.8, margin: 0, maxWidth: 760 };

  const topGrid = {
    display: "grid",
    gridTemplateColumns: "1.05fr .95fr",
    gap: 24,
    alignItems: "start",
    marginTop: 28,
  };

  const leftStack = { display: "grid", gap: 18 };

  const formRow = { marginTop: 32, display: "grid", justifyContent: "center" };
  const formCardMax = { width: "min(720px, 100%)" };

  const card = {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 18px 44px rgba(0,0,0,.06)",
  };

  const label = { display: "block", fontWeight: 700, fontSize: 14, margin: "12px 0 6px", color: "#2b2b2b" };

  const inputBase = {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #e6e6e6",
    borderRadius: 10,
    padding: "12px 14px",
    fontSize: 16,
    outline: "none",
    background: "#fff",
  };
  const textarea = { ...inputBase, minHeight: 140, resize: "vertical" };

  // 2-column row with a visible gap (stacks on mobile)
  const row2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignItems: "start" };

  // right-aligned actions
  const actions = { marginTop: 16, display: "flex", justifyContent: "flex-end" };

  const btn = {
    appearance: "none",
    cursor: "pointer",
    borderRadius: 10,
    padding: "14px 22px",
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: ".05em",
    border: "1px solid transparent",
    transition: "transform .15s ease, box-shadow .2s ease, background .2s ease",
    background: "linear-gradient(90deg,#fbc2eb 0%,#a6c1ee 100%)",
    color: "#000",
    boxShadow: "0 8px 24px rgba(0,0,0,.08)",
  };

  const infoLine = { margin: "10px 0", lineHeight: 1.7, color: "#444" };
  const a = { color: "#222", textDecoration: "none", fontWeight: 700 };

  const hoursList = { listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontSize: 15, color: "#333" };
  const hoursRow = { display: "flex", justifyContent: "space-between" };
  const hoursDay = { fontWeight: 600 };

  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", msg: "Please fill in your name, email, and message." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || "Request failed");
      }
      setStatus({ type: "success", msg: "Thank you! We’ll get back to you shortly." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (e) {
      setStatus({ type: "error", msg: e.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  const mq = `
    /* inputs focus ring + hover */
    .contact__input:focus {
      border-color: #b9c6ff;
      box-shadow: 0 0 0 3px rgba(99,102,241,.18);
    }
    .contact__btn:hover { transform: translateY(-1px); }
    .contact__btn:active { transform: translateY(0); }

    /* responsive: stack email/phone */
    @media (max-width: 860px) {
      .contact__topGrid { grid-template-columns: 1fr; }
      .contact__row2 { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <>
      <style>{mq}</style>

      <main style={{ padding: "32px 0 72px" }}>
        <div style={wrap}>
          <h1 style={h1}>Contact</h1>
          <p style={sub}>
            We’d love to hear from you. Send us a message about custom orders, pickup & delivery, or anything else.
          </p>

          <div className="contact__topGrid" style={topGrid}>
            <div style={leftStack}>
              <div style={card}>
                <h3 style={{ margin: "0 0 8px", fontSize: 20, color: "#1d1d1f" }}>Get in touch</h3>
                <p style={infoLine}>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+16472938815" style={a}>(647) 293-8815</a>
                </p>
                <p style={infoLine}>
                  <strong>Address:</strong><br />
                  1102 Centre St #1, Thornhill, ON L4J 3M8
                </p>
              </div>

              <div style={card} aria-labelledby="hours-heading">
                <h3 id="hours-heading" style={{ margin: "0 0 8px", fontSize: 20, color: "#1d1d1f" }}>Hours</h3>
                <ul style={hoursList}>
                  <li style={hoursRow}><span style={hoursDay}>Monday</span><span>Closed</span></li>
                  <li style={hoursRow}><span style={hoursDay}>Tuesday</span><span>9am - 7pm</span></li>
                  <li style={hoursRow}><span style={hoursDay}>Wednesday</span><span>9am - 7pm</span></li>
                  <li style={hoursRow}><span style={hoursDay}>Thursday</span><span>9am - 7pm</span></li>
                  <li style={hoursRow}><span style={hoursDay}>Friday</span><span>9am - 7pm</span></li>
                  <li style={hoursRow}><span style={hoursDay}>Saturday</span><span>9am - 7pm</span></li>
                  <li style={hoursRow}><span style={hoursDay}>Sunday</span><span>9am - 7pm</span></li>
                </ul>
              </div>
            </div>

            <div style={{ ...card, padding: 0, overflow: "hidden" }}>
              <iframe
                title="Lumière Patisserie - Google Map"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=1102%20Centre%20St%20%231,%20Thornhill,%20ON%20L4J%203M8&output=embed"
>>>>>>> origin/main
              />
            </div>
          </div>

<<<<<<< HEAD
          <div className="field">
            <label htmlFor="msg">Message</label>
            <textarea
              id="msg" name="msg" rows={6} placeholder="How can we help?"
              value={form.msg} onChange={onChange} required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-grad">Send message</button>
          </div>
        </form>
      </section>
    </div>
=======
          {/* Form */}
          <div style={formRow}>
            <form style={{ ...card, ...formCardMax }} onSubmit={onSubmit} noValidate>
              {status.msg ? (
                <div
                  role="status"
                  aria-live="polite"
                  style={{
                    marginBottom: 10,
                    padding: "10px 12px",
                    borderRadius: 10,
                    border: "1px solid " + (status.type === "success" ? "#cde9ce" : "#f5c6cb"),
                    background: status.type === "success" ? "#eaf8ea" : "#fdeeee",
                    color: status.type === "success" ? "#225c22" : "#7a2226",
                    fontWeight: 600,
                  }}
                >
                  {status.msg}
                </div>
              ) : null}

              <label style={label} htmlFor="name">Name</label>
              <input
                id="name" name="name" type="text"
                className="contact__input"
                style={inputBase}
                value={form.name} onChange={onChange} placeholder="Your name"
                autoComplete="name"
              />

              <div className="contact__row2" style={row2}>
                <div>
                  <label style={label} htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email"
                    className="contact__input"
                    style={inputBase}
                    value={form.email} onChange={onChange} placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label style={label} htmlFor="phone">Phone (optional)</label>
                  <input
                    id="phone" name="phone" type="tel"
                    className="contact__input"
                    style={inputBase}
                    value={form.phone} onChange={onChange} placeholder="(647) 293-8815"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <label style={label} htmlFor="message">Message</label>
              <textarea
                id="message" name="message"
                className="contact__input"
                style={textarea}
                value={form.message} onChange={onChange} placeholder="How can we help?"
              />

              <div style={actions}>
                <button type="submit" className="contact__btn" style={btn} disabled={loading}>
                  {loading ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
>>>>>>> origin/main
  );
}
