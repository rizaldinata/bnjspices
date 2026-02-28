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

      {/* HERO SECTION */}
      <div className="flex items-center pt-[100px] pb-[60px] px-[5%] md:px-[8%] min-h-[380px] bg-[linear-gradient(to_right,rgba(26,58,42,0.92)_40%,rgba(26,58,42,0.6)_100%),url('https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=1600&q=80')] bg-center bg-cover">
        <div>
          <div className="text-[12px] text-[#b7e4c7] tracking-[1px] uppercase mb-[14px]">
            Home <span className="opacity-50 mx-2">›</span> About Us
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white font-bold">
            About <em className="italic text-[#b7e4c7]">BNJ Spices</em>
          </h1>
          <p className="text-white/70 text-[1rem] mt-3 max-w-[500px] leading-[1.7]">
            Committed to quality, transparency, and long-term partnerships in the global spice trade.
          </p>
        </div>
      </div>

      {/* OUR VALUES */}
      <section className="bg-white py-[60px] px-[5%] md:py-[90px] md:px-[8%]">
        <div className="text-[11px] tracking-[3px] uppercase text-[#2d6a4f] font-semibold mb-2.5">Our Value</div>
        <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] text-[#1a3a2a] mb-5">
          Built on <em className="italic text-[#7c4b1e]">Strong Principles</em>
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 mt-[50px]">
          {[
            { icon: "🗺️", title: "Regional Expertise", desc: "Our deep understanding of regional growing conditions and harvest cycles allows us to source spices with consistent quality and distinctive profiles." },
            { icon: "🌱", title: "Natural Ingredient", desc: "We are committed to preserving the natural quality and authenticity of every spice, ensuring it reflects its true origin and character." },
            { icon: "✅", title: "Quality Consistency", desc: "We maintain strict quality standards across sourcing, handling, and distribution to deliver reliable products for domestic and international markets." },
            { icon: "🤝", title: "Trusted Partnership", desc: "We believe in long-term collaboration built on transparency, reliability, and mutual growth with farmers, suppliers, and buyers." },
          ].map((v) => (
            <div key={v.title} className="bg-[#f9f5ef] border border-[#e8e0d5] rounded-2xl p-8 transition-all duration-300 relative overflow-hidden group hover:border-[#52b788] hover:shadow-[0_8px_30px_rgba(82,183,136,0.1)] hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#52b788] to-[#c68642] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#52b788] to-[#2d6a4f] rounded-xl flex items-center justify-center text-[22px] mb-[18px]">
                {v.icon}
              </div>
              <h3 className="font-display text-[1.3rem] text-[#1a3a2a] mb-2.5">{v.title}</h3>
              <p className="text-[13px] text-[#4a4a4a] leading-[1.7]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESOURCES / MAP */}
      <section className="bg-[#1a3a2a] py-[60px] px-[5%] md:py-[90px] md:px-[8%]">
        <div className="text-[11px] tracking-[3px] uppercase text-[#b7e4c7] font-semibold mb-2.5">Our Resources</div>
        <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] text-white mb-5">
          Sourced Across the <em className="italic text-[#c68642]">Indonesian Archipelago</em>
        </h2>
        <div className="mt-[50px] bg-white/5 rounded-[20px] p-[40px] border border-[#52b788]/15 text-center">
          <svg
            className="max-w-full h-auto drop-shadow-[0_4px_20px_rgba(82,183,136,0.2)]"
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
            <text x="195" y="122" textAnchor="middle" fill="white" fontSize="9" fontFamily="var(--font-body)">Kerinci</text>
            <circle cx="695" cy="132" r="8" fill="#c68642" filter="url(#glow)"/>
            <text x="695" y="119" textAnchor="middle" fill="white" fontSize="9" fontFamily="var(--font-body)">Maluku</text>
            <circle cx="440" cy="182" r="8" fill="#c68642" filter="url(#glow)"/>
            <text x="440" y="200" textAnchor="middle" fill="white" fontSize="9" fontFamily="var(--font-body)">East Java</text>
            <circle cx="578" cy="205" r="6" fill="#c68642" filter="url(#glow)"/>
            <text x="578" y="220" textAnchor="middle" fill="white" fontSize="9" fontFamily="var(--font-body)">Flores</text>
            <circle cx="760" cy="155" r="7" fill="#c68642" filter="url(#glow)"/>
            <text x="760" y="172" textAnchor="middle" fill="white" fontSize="9" fontFamily="var(--font-body)">Papua</text>
          </svg>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["Kerinci – Cinnamon", "Maluku – Cloves", "East Java – Ginger & Tamarind", "Flores – Tamarind", "Indonesian Islands – Nutmeg"].map((pin) => (
              <div key={pin} className="flex items-center gap-2 bg-white/5 border border-[#52b788]/20 rounded-full py-1.5 px-4 text-[#b7e4c7] text-[12px]">
                📍 {pin}
              </div>
            ))}
          </div>
          <p className="text-white/60 text-[14px] leading-[1.8] max-w-[700px] mx-auto mt-[30px]">
            Our sourcing process focuses on cooperation with farmers and local suppliers from selected producing
            regions. By understanding timing and regional characteristics, we are able to offer spices that meet
            market specifications and quality expectations. This approach allows us to provide stable supply,
            consistent quality, and competitive value for our partners.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-[60px] px-[5%] md:py-[90px] md:px-[8%]">
        <div className="text-[11px] tracking-[3px] uppercase text-[#2d6a4f] font-semibold mb-2.5">Why Choose Us</div>
        <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] text-[#1a3a2a] mb-5">
          Four Reasons to Partner with <em className="italic text-[#7c4b1e]">BNJ Spices</em>
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 mt-[50px]">
          {[
            { num: "01", title: "Export-Ready Specifications", desc: "We understand international market requirements. Our products are prepared to meet export specifications, including moisture levels, grading, cleanliness, and documentation, enabling smooth transactions for global buyers." },
            { num: "02", title: "Flexible Supply & Volume Capability", desc: "We offer adaptable supply volumes, from small trial orders to large-scale shipments. This flexibility allows our partners to scale their purchases efficiently as demand grows." },
            { num: "03", title: "Responsive & Professional Communication", desc: "Clear, fast, and professional communication is our priority. We provide timely updates, accurate information, and responsive support throughout the sourcing and delivery process." },
            { num: "04", title: "Efficient Logistics & Documentation Support", desc: "Our team supports export logistics and documentation to ensure efficient handling, reduced delays, and compliance with trade requirements, giving buyers peace of mind." },
          ].map((w) => (
            <div key={w.num} className="border border-[#e8e0d5] rounded-[14px] p-7 transition-all duration-300 hover:border-[#52b788] hover:shadow-[0_8px_30px_rgba(82,183,136,0.1)] hover:-translate-y-[3px]">
              <div className="font-display text-[3rem] font-bold text-[#b7e4c7] leading-none mb-3.5">{w.num}</div>
              <h3 className="font-display text-[1.2rem] text-[#1a3a2a] mb-2.5">{w.title}</h3>
              <p className="text-[13px] text-[#4a4a4a] leading-[1.7]">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="bg-[#f9f5ef] py-[60px] px-[5%] md:py-[90px] md:px-[8%]">
        <div className="text-[11px] tracking-[3px] uppercase text-[#2d6a4f] font-semibold mb-2.5">Find Us</div>
        <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] text-[#1a3a2a] mb-5">
          Our <em className="italic text-[#7c4b1e]">Location</em>
        </h2>
        <div className="mt-[50px] rounded-[16px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)] border-[2px] border-[#52b788]/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.9!2d112.72!3d-7.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjcnMzYuMCJTIDExMsKwNDMnMTIuMCJF!5e0!3m2!1sen!2sid!4v1"
            className="w-full h-[450px] border-none block"
            allowFullScreen
            loading="lazy"
            title="BNJ Spices Location"
          />
          <div className="bg-[#1a3a2a] py-6 px-8 flex justify-between items-center flex-wrap gap-4">
            <p className="text-white/80 text-[13px] flex items-center gap-2 m-0">
              📍 Gg. Nyai Mani RT 14 RW 04, Desa Wilayut, Kec. Sukodono, Kab. Sidoarjo, Jawa Timur
            </p>
            <a
              href="https://wa.me/6282326929890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[6px] bg-[#2d6a4f] text-white py-2 px-[18px] rounded-full text-[12px] font-semibold no-underline border-none cursor-pointer transition-colors duration-200 font-body hover:bg-[#1a3a2a]"
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