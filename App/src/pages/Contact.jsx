import React, { useState } from "react";
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
              />
            </div>
          </div>

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
  );
}
