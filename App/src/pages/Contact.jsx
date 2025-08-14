import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  // measure header to avoid clipping (Header supports onHeight)
  const [headerH, setHeaderH] = useState(0);

  const wrap = { maxWidth: 1240, margin: "0 auto", padding: "0 24px" };

  const h1 = { fontSize: 48, lineHeight: 1.15, fontWeight: 400, color: "#2f2f2f", margin: "0 0 10px" };
  const sub = { color: "#4b4b4b", fontSize: 18, lineHeight: 1.8, margin: 0, maxWidth: 760 };

  // --- Layout ---
  const topGrid = {
    display: "grid",
    gridTemplateColumns: "1.05fr .95fr", // left: info+hours, right: map
    gap: 24,
    alignItems: "start",
    marginTop: 28,
  };

  const leftStack = { display: "grid", gap: 18 }; // Get in touch + Hours stacked

  const formRow = {
    marginTop: 32,
    display: "grid",
    justifyContent: "center",
  };

  const formCardMax = { width: "min(720px, 100%)" }; // center + narrower

  // --- Cards & inputs ---
  const card = {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 18px 44px rgba(0,0,0,.06)",
  };

  const label = { display: "block", fontWeight: 700, fontSize: 14, margin: "12px 0 6px", color: "#2b2b2b" };
  const input = {
    width: "100%",
    border: "1px solid #e6e6e6",
    borderRadius: 10,
    padding: "12px 14px",
    fontSize: 16,
    outline: "none",
  };
  const textarea = { ...input, minHeight: 140, resize: "vertical" };
  const row2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };

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

  // --- Hours ---
  const hoursList = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: 8,
    fontSize: 15,
    color: "#333",
  };
  const hoursRow = { display: "flex", justifyContent: "space-between" };
  const hoursDay = { fontWeight: 600 };

  // --- State ---
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
    // try {
    //   await new Promise((r) => setTimeout(r, 600));
    //   setStatus({ type: "success", msg: "Thank you! We’ll get back to you shortly." });
    //   setForm({ name: "", email: "", phone: "", message: "" });
    // } catch {
    //   setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    // } finally {
    //   setLoading(false);
    // }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || 'Request failed');
      }
      setStatus({ type: "success", msg: "Thank you! We’ll get back to you shortly." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (e) {
      setStatus({ type: "error", msg: e.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  // --- Responsive tweaks ---
  const mq = `
    @media (max-width: 860px) {
      .contact__topGrid { grid-template-columns: 1fr; }
      .contact__row2 { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <>
      {/* lightweight scoped CSS for a couple responsive tweaks */}
      <style>{mq}</style>

      {/* Header (reports height so we can pad content) */}
      <Header onHeight={setHeaderH} />

      <main style={{ padding: `${headerH + 32}px 0 72px` }}>
        <div style={wrap}>
          <h1 style={h1}>Contact</h1>
          <p style={sub}>
            We’d love to hear from you. Send us a message about custom orders, pickup & delivery, or anything else.
          </p>

          {/* TOP: left = info+hours (stack), right = map */}
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
              />
            </div>
          </div>

          {/* BOTTOM: centered form */}
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
                id="name" name="name" type="text" style={input}
                value={form.name} onChange={onChange} placeholder="Your name"
                autoComplete="name"
              />

              <div className="contact__row2" style={row2}>
                <div>
                  <label style={label} htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email" style={input}
                    value={form.email} onChange={onChange} placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label style={label} htmlFor="phone">Phone (optional)</label>
                  <input
                    id="phone" name="phone" type="tel" style={input}
                    value={form.phone} onChange={onChange} placeholder="(647) 293-8815"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <label style={label} htmlFor="message">Message</label>
              <textarea
                id="message" name="message" style={textarea}
                value={form.message} onChange={onChange} placeholder="How can we help?"
              />

              <div style={{ marginTop: 16 }}>
                <button type="submit" style={btn} disabled={loading}>
                  {loading ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
