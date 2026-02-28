import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

export const metadata = {
  title: "About Us – BNJ Spices",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <WaFloat />

      {/* HERO */}
      <div className="about-hero page-hero">
        <div>
          <div className="page-breadcrumb">Home <span>›</span> About Us</div>
          <h1>About <em style={{ color: "var(--green-pale)" }}>BNJ Spices</em></h1>
          <p>Committed to quality, transparency, and long-term partnerships in the global spice trade.</p>
        </div>
      </div>

      {/* OUR VALUES */}
      <section className="section why-section">
        <div className="section-label">Our Value</div>
        <h2 className="section-title">Built on <em>Strong Principles</em></h2>
        <div className="values-grid" style={{ marginTop: 50 }}>
          {[
            { icon: "🗺️", title: "Regional Expertise", desc: "Our deep understanding of regional growing conditions and harvest cycles allows us to source spices with consistent quality and distinctive profiles." },
            { icon: "🌱", title: "Natural Ingredient", desc: "We are committed to preserving the natural quality and authenticity of every spice, ensuring it reflects its true origin and character." },
            { icon: "✅", title: "Quality Consistency", desc: "We maintain strict quality standards across sourcing, handling, and distribution to deliver reliable products for domestic and international markets." },
            { icon: "🤝", title: "Trusted Partnership", desc: "We believe in long-term collaboration built on transparency, reliability, and mutual growth with farmers, suppliers, and buyers." },
          ].map((v) => (
            <div key={v.title} className="value-card light">
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESOURCES / MAP */}
      <section className="resources-section">
        <div className="section-label">Our Resources</div>
        <h2 className="section-title" style={{ color: "white" }}>
          Sourced Across the <em style={{ color: "var(--brown-light)" }}>Indonesian Archipelago</em>
        </h2>
        <div className="map-svg-wrap">
          <svg
            className="indonesia-map"
            viewBox="0 0 900 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Sumatra */}
            <path d="M 120,140 Q 140,120 200,110 Q 240,108 280,115 Q 300,120 290,140 Q 280,155 260,160 Q 230,165 190,158 Q 150,152 120,140 Z" fill="#2d6a4f" opacity="0.85"/>
            {/* Java */}
            <path d="M 310,175 Q 340,168 400,170 Q 450,172 500,168 Q 520,166 510,180 Q 500,190 450,192 Q 400,193 350,188 Q 318,183 310,175 Z" fill="#2d6a4f" opacity="0.85"/>
            {/* Kalimantan */}
            <path d="M 420,80 Q 460,65 510,68 Q 555,72 565,95 Q 572,120 555,140 Q 535,158 500,160 Q 460,162 435,145 Q 408,128 420,80 Z" fill="#2d6a4f" opacity="0.85"/>
            {/* Sulawesi */}
            <path d="M 590,95 Q 610,85 625,95 Q 635,105 630,125 Q 625,140 610,148 Q 598,155 588,145 Q 578,132 590,95 Z M 620,115 Q 640,118 650,130 Q 658,140 645,150 Q 632,158 622,148 Q 612,138 620,115 Z" fill="#2d6a4f" opacity="0.85"/>
            {/* Maluku */}
            <path d="M 680,120 Q 700,115 715,122 Q 722,130 715,140 Q 708,148 695,148 Q 680,145 675,135 Q 672,125 680,120 Z" fill="#52b788" opacity="0.85"/>
            {/* Papua */}
            <path d="M 740,130 Q 790,110 840,120 Q 875,128 880,150 Q 882,170 860,180 Q 835,188 800,185 Q 768,180 750,168 Q 732,155 740,130 Z" fill="#2d6a4f" opacity="0.85"/>
            {/* Bali/NTT */}
            <ellipse cx="530" cy="195" rx="18" ry="8" fill="#52b788" opacity="0.7"/>
            <ellipse cx="558" cy="200" rx="14" ry="6" fill="#2d6a4f" opacity="0.7"/>
            {/* Pins */}
            <circle cx="195" cy="135" r="8" fill="#c68642" filter="url(#glow)"/>
            <text x="195" y="122" textAnchor="middle" fill="white" fontSize="9" fontFamily="DM Sans">Kerinci</text>
            <circle cx="695" cy="132" r="8" fill="#c68642" filter="url(#glow)"/>
            <text x="695" y="119" textAnchor="middle" fill="white" fontSize="9" fontFamily="DM Sans">Maluku</text>
            <circle cx="440" cy="182" r="8" fill="#c68642" filter="url(#glow)"/>
            <text x="440" y="200" textAnchor="middle" fill="white" fontSize="9" fontFamily="DM Sans">East Java</text>
            <circle cx="578" cy="205" r="6" fill="#c68642" filter="url(#glow)"/>
            <text x="578" y="220" textAnchor="middle" fill="white" fontSize="9" fontFamily="DM Sans">Flores</text>
            <circle cx="760" cy="155" r="7" fill="#c68642" filter="url(#glow)"/>
            <text x="760" y="172" textAnchor="middle" fill="white" fontSize="9" fontFamily="DM Sans">Papua</text>
          </svg>

          <div className="map-pins">
            {["Kerinci – Cinnamon", "Maluku – Cloves", "East Java – Ginger & Tamarind", "Flores – Tamarind", "Indonesian Islands – Nutmeg"].map((pin) => (
              <div key={pin} className="map-pin">📍 {pin}</div>
            ))}
          </div>
          <p>
            Our sourcing process focuses on cooperation with farmers and local suppliers from selected producing
            regions. By understanding timing and regional characteristics, we are able to offer spices that meet
            market specifications and quality expectations. This approach allows us to provide stable supply,
            consistent quality, and competitive value for our partners.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-section">
        <div className="section-label">Why Choose Us</div>
        <h2 className="section-title">Four Reasons to Partner with <em>BNJ Spices</em></h2>
        <div className="why-grid">
          {[
            { num: "01", title: "Export-Ready Specifications", desc: "We understand international market requirements. Our products are prepared to meet export specifications, including moisture levels, grading, cleanliness, and documentation, enabling smooth transactions for global buyers." },
            { num: "02", title: "Flexible Supply & Volume Capability", desc: "We offer adaptable supply volumes, from small trial orders to large-scale shipments. This flexibility allows our partners to scale their purchases efficiently as demand grows." },
            { num: "03", title: "Responsive & Professional Communication", desc: "Clear, fast, and professional communication is our priority. We provide timely updates, accurate information, and responsive support throughout the sourcing and delivery process." },
            { num: "04", title: "Efficient Logistics & Documentation Support", desc: "Our team supports export logistics and documentation to ensure efficient handling, reduced delays, and compliance with trade requirements, giving buyers peace of mind." },
          ].map((w) => (
            <div key={w.num} className="why-card">
              <div className="why-card-num">{w.num}</div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="section map-section">
        <div className="section-label">Find Us</div>
        <h2 className="section-title">Our <em>Location</em></h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.9!2d112.72!3d-7.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjcnMzYuMCJTIDExMsKwNDMnMTIuMCJF!5e0!3m2!1sen!2sid!4v1"
            allowFullScreen
            loading="lazy"
            title="BNJ Spices Location"
          />
          <div className="map-info">
            <p>📍 Gg. Nyai Mani RT 14 RW 04, Desa Wilayut, Kec. Sukodono, Kab. Sidoarjo, Jawa Timur</p>
            <a
              href="https://wa.me/6282326929890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
