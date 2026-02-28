import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <WaFloat />

      {/* HERO SECTION */}
      <section className="min-h-screen bg-[linear-gradient(to_bottom,rgba(20,45,30,0.75)_0%,rgba(20,45,30,0.5)_60%,#f9f5ef_100%),url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1800&q=80')] bg-center bg-cover bg-no-repeat flex items-center pt-[120px] pb-[60px] px-[5%] md:pt-[140px] md:pb-[80px] md:px-[8%] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[200px] after:bg-gradient-to-b after:from-transparent after:to-[#f9f5ef]">
        <div className="max-w-[680px] relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#52b788]/20 border border-[#52b788] text-[#b7e4c7] py-1.5 px-4 rounded-full text-[12px] tracking-[2px] uppercase mb-7 animate-fade-up">
            <span className="w-1.5 h-1.5 bg-[#52b788] rounded-full animate-pulse-dot" />
            🌿 Premium Indonesian Spices
          </div>
          <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-bold text-white leading-[1.05] mb-3 animate-fade-up [animation-delay:100ms]">
            From <em className="italic text-[#b7e4c7]">Nature,</em>
            <br />For the World&apos;s
            <br />Flavor
          </h1>
          <p className="font-display text-[1.15rem] italic text-[#c68642] mb-7 animate-fade-up [animation-delay:200ms]">
            — &ldquo;From Nature, For the World&apos;s Flavor&rdquo;
          </p>
          <p className="text-[1rem] leading-[1.75] text-white/80 max-w-[560px] animate-fade-up [animation-delay:300ms]">
            Indonesia is renowned for its rich diversity of spices, shaped by unique regional soils,
            climates, and cultivation traditions. CV Bhumyamca Nusantara Jaya is an Indonesian spice
            trading company committed to delivering high-quality spices sourced from selected producing
            regions across the nation.
          </p>
          <div className="flex flex-wrap gap-[14px] mt-[36px] animate-fade-up [animation-delay:400ms]">
            <Link href="/products" className="bg-gradient-to-br from-[#2d6a4f] to-[#1a3a2a] text-white py-3.5 px-[30px] rounded-full text-[14px] font-semibold no-underline transition-all duration-300 flex items-center gap-2 shadow-[0_4px_20px_rgba(45,106,79,0.4)] font-body hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(45,106,79,0.5)]">
              🌶️ Explore Products
            </Link>
            <Link href="/contact" className="border-[1.5px] border-white/40 text-white py-3.5 px-[30px] rounded-full text-[14px] font-medium no-underline transition-all duration-300 flex items-center gap-2 bg-transparent font-body hover:border-white hover:bg-white/10">
              📩 Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="bg-white py-[60px] px-[5%] md:py-[90px] md:px-[8%] grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
        <div className="grid grid-cols-2 grid-rows-[200px_200px] gap-3 rounded-[16px] overflow-hidden">
          <div className="row-span-2 bg-[#2d6a4f] rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?w=600&q=80"
              alt="Indonesian Spices"
              loading="lazy"
              className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="bg-[#2d6a4f] rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&q=80"
              alt="Cinnamon"
              loading="lazy"
              className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="bg-[#2d6a4f] rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=400&q=80"
              alt="Cloves"
              loading="lazy"
              className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] uppercase text-[#2d6a4f] font-semibold mb-2.5">Company Profile</div>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] text-[#1a3a2a] mb-5">
            A Trusted Partner in the{" "}
            <em className="italic text-[#7c4b1e]">Global Spice Industry</em>
          </h2>
          <p className="text-[1rem] leading-[1.8] text-[#4a4a4a] max-w-[600px]">
            Guided by our slogan, &ldquo;From Nature, For the World&apos;s Flavor,&rdquo; we focus on
            preserving the authenticity, freshness, and natural quality of every product. With a strong
            understanding of harvest cycles and regional characteristics, we ensure consistent standards
            for both domestic and global markets.
          </p>
          <p className="text-[1rem] leading-[1.8] text-[#4a4a4a] max-w-[600px] mt-4">
            More than a supplier, we strive to be a reliable business partner by offering transparent
            processes, tailored solutions, and a dependable supply chain that supports long-term
            collaboration in the global spice industry.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-[36px]">
            {[
              { num: "8+", label: "Premium Spice Products" },
              { num: "∞", label: "No MOQ – Any Quantity" },
              { num: "LCL", label: "& FCL Shipments" },
              { num: "100%", label: "Export-Ready Quality" },
            ].map((s) => (
              <div key={s.label} className="bg-[#f9f5ef] rounded-xl p-5 border-l-[3px] border-[#52b788]">
                <div className="font-display text-[2rem] font-bold text-[#1a3a2a] leading-none">{s.num}</div>
                <div className="text-[12px] text-[#4a4a4a] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-[#1a3a2a] py-[60px] px-[5%] md:py-[90px] md:px-[8%]">
        <div className="text-[11px] tracking-[3px] uppercase text-[#b7e4c7] font-semibold mb-2.5">Our Values</div>
        <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] text-white mb-5">
          What Drives <em className="italic text-[#c68642]">Everything</em> We Do
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 mt-[50px]">
          {[
            { icon: "🗺️", title: "Regional Expertise", desc: "Our deep understanding of regional growing conditions and harvest cycles allows us to source spices with consistent quality and distinctive profiles." },
            { icon: "🌱", title: "Natural Ingredient", desc: "We are committed to preserving the natural quality and authenticity of every spice, ensuring it reflects its true origin and character." },
            { icon: "✅", title: "Quality Consistency", desc: "We maintain strict quality standards across sourcing, handling, and distribution to deliver reliable products for domestic and international markets." },
            { icon: "🤝", title: "Trusted Partnership", desc: "We believe in long-term collaboration built on transparency, reliability, and mutual growth with farmers, suppliers, and buyers." },
          ].map((v) => (
            <div key={v.title} className="bg-white/5 border border-[#52b788]/20 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden group hover:bg-white/10 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#52b788] to-[#c68642] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#52b788] to-[#2d6a4f] rounded-xl flex items-center justify-center text-[22px] mb-[18px]">
                {v.icon}
              </div>
              <h3 className="font-display text-[1.3rem] text-white mb-2.5">{v.title}</h3>
              <p className="text-[13px] text-white/65 leading-[1.7]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="bg-[#f9f5ef] py-[60px] px-[5%] md:py-[90px] md:px-[8%]">
        <div className="text-[11px] tracking-[3px] uppercase text-[#2d6a4f] font-semibold mb-2.5">Our Products</div>
        <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] text-[#1a3a2a] mb-5">
          Indonesia&apos;s Finest <em className="italic text-[#7c4b1e]">Spices</em>
        </h2>
        <p className="text-[1rem] leading-[1.8] text-[#4a4a4a] max-w-[600px]">
          Sourced from the best producing regions across the archipelago, each product meets
          international export standards.
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 mt-[50px]">
          {[
            { name: "Kayu Manis (Cinnamon)", origin: "Kerinci, Indonesia", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", desc: "Cassia cinnamon from high-altitude Kerinci, available in multiple cut lengths." },
            { name: "Cengkeh (Cloves)", origin: "Maluku & Sumatra", img: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&q=80", desc: "Premium Lalpari AB6 cloves with essential oil content >15%." },
            { name: "Pala (Nutmeg)", origin: "Indonesian Islands", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80", desc: "World's finest nutmeg with high essential oil content — full range of grades available." },
          ].map((p) => (
            <div key={p.name} className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer group hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              <div className="h-[200px] overflow-hidden relative">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute bottom-2.5 left-2.5 bg-[#1a3a2a]/85 text-[#b7e4c7] text-[10px] py-1 px-2.5 rounded-full tracking-[1px]">{p.origin}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-[1.3rem] text-[#1a3a2a] mb-1.5">{p.name}</h3>
                <p className="text-[12.5px] text-[#4a4a4a] leading-[1.6] mb-3.5">{p.desc}</p>
                <Link href="/products" className="inline-flex items-center gap-1.5 bg-[#2d6a4f] text-white py-2 px-[18px] rounded-full text-[12px] font-semibold no-underline transition-colors duration-200 hover:bg-[#1a3a2a]">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products" className="bg-gradient-to-br from-[#2d6a4f] to-[#1a3a2a] text-white py-3.5 px-[30px] rounded-full text-[14px] font-semibold no-underline transition-all duration-300 inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(45,106,79,0.4)] font-body hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(45,106,79,0.5)]">
            View All Products →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}