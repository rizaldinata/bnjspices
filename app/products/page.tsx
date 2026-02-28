"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

const products = [
  {
    id: "cinnamon",
    name: "Kayu Manis (Cinnamon)",
    subtitle: "Cassia Cinnamon · Bark Spice",
    origin: "Kerinci, Indonesia",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    info: "Originating from the highlands of Kerinci, Indonesia's most renowned cassia-producing region, our cinnamon is cultivated at elevations above 1,000 meters above sea level. This high-altitude environment ensures superior quality. Through our expanding network of local producers, we offer consistent supply year-round.",
    specs: [
      { key: "Origin", val: "Kerinci, Indonesia" },
      { key: "Variety", val: "Cassia Cinnamon" },
      { key: "Cut Length", val: "8cm, 12cm, 18cm & Non-cut" },
      { key: "Moisture", val: "10 – 12%" },
      { key: "Oil Content", val: "3 – 5%" },
      { key: "Color", val: "Reddish Brown" },
      { key: "Mold", val: "< 5%" },
      { key: "Packaging", val: "Carton Box / PP Bag" },
    ],
    wa: "Cinnamon+%2F+Kayu+Manis",
    category: "barks",
  },
  {
    id: "ginger",
    name: "Jahe (Ginger)",
    subtitle: "Fresh Ginger · Root Spice",
    origin: "Indonesia",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80",
    info: "Fresh ginger is carefully harvested at full maturity to ensure the best quality and is available in various sizes ranging from 80g to 250g, customizable to meet buyer specifications, with meticulous processing to maintain its excellence.",
    specs: [
      { key: "Size", val: "100 – 200 gr" },
      { key: "Harvest Age", val: "12 Months+" },
      { key: "Dust", val: "Removed" },
      { key: "Taste", val: "Sour, Spicy" },
      { key: "Color", val: "Yellow-White Inside" },
      { key: "Moisture", val: "Max 85%" },
      { key: "Foreign Matter", val: "0%" },
      { key: "Packaging", val: "10–20 kg Mesh Bags / Carton" },
    ],
    wa: "Ginger+%2F+Jahe",
    category: "barks",
  },
  {
    id: "turmeric",
    name: "Kunyit (Turmeric)",
    subtitle: "Dried Sliced Turmeric · Root Spice",
    origin: "Indonesia",
    img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&q=80",
    info: "Bhumyamca Nusantara Jaya's Dried Sliced Turmeric comes from the best regions in Indonesia and is expertly processed to preserve its bright color, distinctive flavor, and natural benefits.",
    specs: [
      { key: "Type", val: "Dried Slice" },
      { key: "Drying", val: "Sun-Dried Naturally" },
      { key: "Curcumin", val: "3 – 5%" },
      { key: "Moisture", val: "10%" },
      { key: "Color", val: "Orange Yellow" },
      { key: "Ash", val: "8%" },
      { key: "Packaging", val: "PP Bag" },
    ],
    wa: "Turmeric+%2F+Kunyit",
    category: "barks",
  },
  {
    id: "candlenut",
    name: "Kemiri (Candlenut)",
    subtitle: "Whole / Broken Candlenuts · Nut Spice",
    origin: "Indonesia",
    img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80",
    info: "These candlenuts are carefully selected and sun-dried to preserve their oil content, aroma, and freshness. Ideal for traditional processing, retail packaging, or further value-added production.",
    specs: [
      { key: "Type", val: "Whole / Broken" },
      { key: "Foreign Matter", val: "1%" },
      { key: "Oil Content", val: "65%" },
      { key: "Water Content", val: "Max 5%" },
      { key: "Broken", val: "1%" },
      { key: "Packaging", val: "Gunny Bags" },
    ],
    wa: "Candlenut+%2F+Kemiri",
    category: "seeds",
  },
  {
    id: "tamarind",
    name: "Asam Jawa (Tamarind)",
    subtitle: "Tamarind Pulp / Seeds · Fruit Spice",
    origin: "East Java & Flores",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    info: "Known for its rich sweet-and-sour taste, Indonesian tamarind is widely used in global cuisines. Bhumyamca Nusantara Jaya delivers fresh, high-quality tamarind pulp—seeded or seedless—sourced directly from trusted farmers in East Java and Flores, with rigorous quality control to meet international market standards.",
    specs: [
      { key: "Type", val: "Seedless / With Seeds / Washed Seeds" },
      { key: "Moisture", val: "Max 20%" },
      { key: "Purity", val: "100% Pure, No Additives" },
      { key: "Quantity", val: "20 Tons / Month" },
      { key: "Packaging", val: "PP Bag with Inner Plastic" },
    ],
    wa: "Tamarind+%2F+Asam+Jawa",
    category: "seeds",
  },
  {
    id: "long-pepper",
    name: "Cabe Jawa (Long Pepper)",
    subtitle: "Piper longum · Dried Pepper",
    origin: "Java, Indonesia",
    img: "https://images.unsplash.com/photo-1597612647813-5cf41be4153d?w=600&q=80",
    info: "Discover the unique, bold flavor of Long Pepper (Piper longum), also known as Cabai Jawa, a traditional spice renowned for its aromatic warmth and therapeutic benefits. Sourced from high-quality, naturally grown plants.",
    specs: [
      { key: "Type", val: "Whole (Dried)" },
      { key: "Origin", val: "Java, Indonesia" },
      { key: "Moisture", val: "Max 14%" },
      { key: "Color", val: "Brown to Black Charcoal" },
      { key: "Admixtures", val: "1%" },
      { key: "Packaging", val: "PP Bag" },
    ],
    wa: "Long+Pepper+%2F+Cabe+Jawa",
    category: "seeds",
  },
  {
    id: "cloves",
    name: "Cengkeh (Cloves)",
    subtitle: "Syzygium aromaticum · Dried Buds",
    origin: "Maluku & Sumatra",
    img: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&q=80",
    info: "Bhumyamca Nusantara Jaya is a trusted Indonesian processor and exporter of premium cloves and clove stems, sourced directly from selected plantations in Maluku and Sumatra and processed to meet international standards.",
    specs: [
      { key: "Origin", val: "Maluku & Sumatra" },
      { key: "Type", val: "Lalpari AB6" },
      { key: "Essential Oil", val: ">15%" },
      { key: "Moisture", val: "13%" },
      { key: "Ash", val: "1%" },
      { key: "Stem", val: "<1%" },
      { key: "Packaging", val: "PP Bag" },
    ],
    wa: "Cloves+%2F+Cengkeh",
    category: "seeds",
  },
  {
    id: "nutmeg",
    name: "Pala (Nutmeg)",
    subtitle: "Myristica fragrans · Full Range of Grades",
    origin: "Indonesian Islands",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
    info: "Our nutmeg is sourced from Indonesia's islands, renowned for superior quality and rich aroma. As the world's largest nutmeg exporter, Indonesia produces nutmeg with the highest essential oil content. Bhumyamca Nusantara Jaya offers a full range of nutmeg grades to meet diverse market needs.",
    specs: [
      { key: "Type", val: "SS, ABCD, BWP" },
      { key: "Essential Oil", val: ">6%" },
      { key: "Moisture", val: "12%" },
      { key: "Foreign Stuff", val: "<0.5%" },
      { key: "Broken", val: "2%" },
      { key: "Packaging", val: "PP Bag" },
    ],
    wa: "Nutmeg+%2F+Pala",
    category: "seeds",
  },
];

const filters = [
  { key: "all", label: "All Products" },
  { key: "barks", label: "Barks & Roots" },
  { key: "seeds", label: "Fruits & Seeds" },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />
      <WaFloat />

      {/* HERO */}
      <div className="products-hero page-hero">
        <div>
          <div className="page-breadcrumb">Home <span>›</span> Products</div>
          <h1>Our <em style={{ color: "var(--brown-light)" }}>Spices</em></h1>
          <p>Premium Indonesian spices, export-ready, sourced from the finest regions.</p>
        </div>
      </div>

      {/* FILTER */}
      <div className="products-filter">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`filter-btn ${activeFilter === f.key ? "active" : ""}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* PRODUCT LIST */}
      <div className="products-full">
        {filtered.map((p) => (
          <div key={p.id} className="product-detail-card">
            <div className="product-detail-img">
              <img src={p.img} alt={p.name} loading="lazy" />
              <span className="origin-tag">{p.origin}</span>
            </div>
            <div className="product-detail-body">
              <h2>{p.name}</h2>
              <p className="product-subtitle">{p.subtitle}</p>
              <p className="info-text">{p.info}</p>
              <div className="spec-title">Specifications</div>
              <div className="spec-grid">
                {p.specs.map((s) => (
                  <div key={s.key} className="spec-item">
                    <div className="spec-key">{s.key}</div>
                    <div className="spec-val">{s.val}</div>
                  </div>
                ))}
              </div>
              <div className="product-actions">
                <a
                  href={`https://wa.me/6282326929890?text=Hello%2C+I+am+interested+in+${p.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa"
                >
                  💬 Order via WhatsApp
                </a>
                <a href="/contact" className="btn-inquire">📩 Send Inquiry</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
