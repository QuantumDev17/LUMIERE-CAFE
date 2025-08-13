import React, { useMemo, useState } from "react";

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const wrap = { maxWidth: 1240, margin: "0 auto", padding: "0 24px" };
  const h1 = { fontSize: 48, lineHeight: 1.15, fontWeight: 400, color: "#2f2f2f", margin: "0 0 10px" };
  const sub = { color: "#4b4b4b", fontSize: 18, lineHeight: 1.8, margin: 0, maxWidth: 760 };
  const grid = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start", marginTop: 28 };
  const card = { background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: 20, boxShadow: "0 18px 44px rgba(0,0,0,.06)" };
  const searchBox = { width: "100%", border: "1px solid #e6e6e6", borderRadius: 12, padding: "14px 16px", fontSize: 16, outline: "none", boxShadow: "0 8px 24px rgba(0,0,0,.04)" };
  const qBtn = { width: "100%", textAlign: "left", background: "transparent", border: "1px solid #eee", borderRadius: 10, padding: "14px 16px", fontSize: 16, fontWeight: 700, color: "#1d1d1f", cursor: "pointer" };
  const answer = { padding: "12px 4px 2px 4px", lineHeight: 1.75, color: "#444", fontSize: 15 };

  const sections = useMemo(() => [
    {
      id: "order", title: "My Order", faqs: [
        { id: "order-modified", q: "Do you accept modified orders?", a: "At Lumiere Patisserie we take pride in our processes for adding items..." },
        { id: "order-custom", q: "Do you accept custom orders?", a: "At the moment our production team is small and we can’t accept custom orders." },
        { id: "order-delivery", q: "Do you deliver?", a: "Unfortunately we don’t offer delivery yet..." },
        { id: "order-beverages", q: "Can I order beverages online?", a: "We craft coffee, tea, juices and shakes to be enjoyed at peak freshness..." },
        { id: "order-petit-fours", q: "Can I customize my order of Petit Fours?", a: "Our petit fours collection changes at least once a week..." },
        { id: "order-pickup", q: "How do I pick up my order?", a: "Come to the patisserie and identify yourself by name, phone number, or order number..." },
        { id: "order-preorder", q: "Do I have to pre-order or can I walk in?", a: "You’re welcome to walk in... Or pre-order and pick up the next day." },
        { id: "order-sameday", q: "Do you accept same-day orders?", a: "We can’t accept same-day orders through the E-Boutique..." },
        { id: "order-pickup-days", q: "What days are available for pickup?", a: "Pickups are available every day." },
      ]
    },
    {
      id: "products", title: "Products", faqs: [
        { id: "prod-refrigerate", q: "Do your cakes and pastries need to be refrigerated?", a: "Most cakes, all personal desserts, and all petit fours need refrigeration..." },
        { id: "prod-shelf-life-patisserie", q: "How long are your patisserie products good for?", a: "Best within 2 days; quality declines after that." },
        { id: "prod-shelf-life-boulangerie", q: "How long are your boulangerie products good for?", a: "Viennoiseries same day; yeasted breads ~3 days; naturally leavened up to 5." },
        { id: "prod-store-bread", q: "What is the best way to store bread?", a: "Yeasted: keep bagged at room temp; naturally leavened: cut-side down..." },
        { id: "prod-freeze-bread", q: "Can your bread be frozen?", a: "Yes—wrap tightly in foil, then plastic wrap." },
      ]
    },
    {
      id: "general", title: "General", faqs: [
        { id: "gen-bake-daily", q: "Do you bake your breads and viennoiseries every day?", a: "Yes. Our ovens start at 3 AM daily..." },
        { id: "gen-events", q: "Do you do sweet tables and events?", a: "We’d love to help—please contact us for catering details." },
      ]
    },
  ], []);

  const flat = useMemo(() => {
    const out = [];
    sections.forEach(sec => sec.faqs.forEach(f => out.push({ ...f, section: sec.title })));
    return out;
  }, [sections]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return flat;
    return flat.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [flat, query]);

  const grouped = useMemo(() => (query.trim() ? [{ id: "results", title: "Results", faqs: filtered }] : sections), [sections, filtered, query]);

  const mq = `
    @media (max-width: 900px) {
      .faq__grid { grid-template-columns: 1fr; }
    }
  `;

  return (
    <>
      <style>{mq}</style>
      <div style={wrap}>
        <h1 style={h1}>FAQs</h1>
        <p style={sub}>Find answers to common questions about orders, products, and more.</p>

        <div style={{ marginTop: 18 }}>
          <input
            type="search"
            placeholder="Search FAQs"
            aria-label="Search FAQs"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={searchBox}
          />
        </div>

        <div className="faq__grid" style={{ ...grid, marginTop: 28 }}>
          {grouped.map((sec) => (
            <section key={sec.id} style={card} aria-labelledby={`h-${sec.id}`}>
              <h2 id={`h-${sec.id}`} style={{ margin: "0 0 12px", fontSize: 22, color: "#1d1d1f" }}>
                {sec.title}
              </h2>

              <div style={{ display: "grid", gap: 12 }}>
                {sec.faqs.map((f) => {
                  const isOpen = openId === f.id;
                  return (
                    <div key={f.id} style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #eee" }}>
                      <button
                        style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "14px 16px", fontSize: 16, fontWeight: 700, color: "#1d1d1f", cursor: "pointer" }}
                        aria-expanded={isOpen}
                        aria-controls={`a-${f.id}`}
                        onClick={() => setOpenId(isOpen ? null : f.id)}
                      >
                        {f.q}
                      </button>
                      {isOpen && (
                        <div id={`a-${f.id}`} role="region" style={{ padding: "0 16px 14px 16px", background: "#fff" }}>
                          <p style={answer}>{f.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
