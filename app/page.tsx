import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <WaFloat />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            🌿 Premium Indonesian Spices
          </div>
          <h1>
            From <em>Nature,</em>
            <br />For the World&apos;s
            <br />Flavor
          </h1>
          <p className="hero-slogan">— &ldquo;From Nature, For the World&apos;s Flavor&rdquo;</p>
          <p>
            Indonesia is renowned for its rich diversity of spices, shaped by unique regional soils,
            climates, and cultivation traditions. CV Bhumyamca Nusantara Jaya is an Indonesian spice
            trading company committed to delivering high-quality spices sourced from selected producing
            regions across the nation.
          </p>
          <div className="hero-actions">
            <Link href="/products" className="btn-primary">🌶️ Explore Products</Link>
            <Link href="/contact" className="btn-outline">📩 Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="section profile-section">
        <div className="profile-image-grid">
          <div className="img-cell img-large">
            <img
              src="https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?w=600&q=80"
              alt="Indonesian Spices"
              loading="lazy"
            />
          </div>
          <div className="img-cell">
            <img
              src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&q=80"
              alt="Cinnamon"
              loading="lazy"
            />
          </div>
          <div className="img-cell">
            <img
              src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=400&q=80"
              alt="Cloves"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <div className="section-label">Company Profile</div>
          <h2 className="section-title">
            A Trusted Partner in the{" "}
            <em>Global Spice Industry</em>
          </h2>
          <p className="section-desc">
            Guided by our slogan, &ldquo;From Nature, For the World&apos;s Flavor,&rdquo; we focus on
            preserving the authenticity, freshness, and natural quality of every product. With a strong
            understanding of harvest cycles and regional characteristics, we ensure consistent standards
            for both domestic and global markets.
          </p>
          <p className="section-desc" style={{ marginTop: 16 }}>
            More than a supplier, we strive to be a reliable business partner by offering transparent
            processes, tailored solutions, and a dependable supply chain that supports long-term
            collaboration in the global spice industry.
          </p>

          <div className="profile-stats">
            {[
              { num: "8+", label: "Premium Spice Products" },
              { num: "∞", label: "No MOQ – Any Quantity" },
              { num: "LCL", label: "& FCL Shipments" },
              { num: "100%", label: "Export-Ready Quality" },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section values-section">
        <div className="section-label">Our Values</div>
        <h2 className="section-title" style={{ color: "white" }}>
          What Drives <em style={{ color: "var(--brown-light)" }}>Everything</em> We Do
        </h2>
        <div className="values-grid">
          {[
            { icon: "🗺️", title: "Regional Expertise", desc: "Our deep understanding of regional growing conditions and harvest cycles allows us to source spices with consistent quality and distinctive profiles." },
            { icon: "🌱", title: "Natural Ingredient", desc: "We are committed to preserving the natural quality and authenticity of every spice, ensuring it reflects its true origin and character." },
            { icon: "✅", title: "Quality Consistency", desc: "We maintain strict quality standards across sourcing, handling, and distribution to deliver reliable products for domestic and international markets." },
            { icon: "🤝", title: "Trusted Partnership", desc: "We believe in long-term collaboration built on transparency, reliability, and mutual growth with farmers, suppliers, and buyers." },
          ].map((v) => (
            <div key={v.title} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="section products-preview">
        <div className="section-label">Our Products</div>
        <h2 className="section-title">
          Indonesia&apos;s Finest <em>Spices</em>
        </h2>
        <p className="section-desc">
          Sourced from the best producing regions across the archipelago, each product meets
          international export standards.
        </p>

        <div className="products-grid">
          {[
            { name: "Kayu Manis (Cinnamon)", origin: "Kerinci, Indonesia", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", desc: "Cassia cinnamon from high-altitude Kerinci, available in multiple cut lengths." },
            { name: "Cengkeh (Cloves)", origin: "Maluku & Sumatra", img: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&q=80", desc: "Premium Lalpari AB6 cloves with essential oil content >15%." },
            { name: "Pala (Nutmeg)", origin: "Indonesian Islands", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80", desc: "World's finest nutmeg with high essential oil content — full range of grades available." },
          ].map((p) => (
            <div key={p.name} className="product-card">
              <div className="product-card-img">
                <img src={p.img} alt={p.name} loading="lazy" />
                <span className="origin-badge">{p.origin}</span>
              </div>
              <div className="product-card-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <Link href="/products" className="btn-small">View Details →</Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/products" className="btn-primary">View All Products →</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
