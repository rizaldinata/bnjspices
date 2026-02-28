"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

const faqs = [
  { q: "What are the suitable payment methods?", a: "We accept T/T (Telegraphic Transfer) or LC at sight. Please contact us to discuss the most suitable payment terms for your order." },
  { q: "Can I get a sample before placing an order?", a: "Yes! We provide free samples to qualified buyers. Simply contact us via WhatsApp or email, and we will arrange sample shipment to your address." },
  { q: "What type of quality do you have and how do you prove it?", a: "We have already standardized every product with export provisions. We will satisfy you by providing any specifications that you expect. We also invite you to visit our warehouse for a comfortable transaction and quality inspection." },
  { q: "Where is your company located?", a: "We are located in Sidoarjo City, East Java, Indonesia. Our full address is: Gg. Nyai Mani RT 14 RW 04, Desa Wilayut, Kec. Sukodono, Kab. Sidoarjo, Jawa Timur." },
  { q: "Is your company legally registered?", a: "Yes. CV Bhumyamca Nusantara Jaya is a company legally registered with Indonesia's Ministry of Law and Human Rights. You can trust us as a reliable and professional business partner." },
  { q: "Can I request custom packaging?", a: "Of course! You can choose your own packing requirements. We accommodate custom packaging solutions to meet your brand or market requirements." },
  { q: "Is there a Minimum Order Quantity (MOQ)?", a: "We have no MOQ — we accept any quantity the buyer requests. We can supply via LCL (Less than Container Load) or FCL (Full Container Load) depending on your needs." },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = () => {
    alert("Thank you! We will contact you via WhatsApp or email shortly. 🌿");
  };

  return (
    <>
      <Navbar />
      <WaFloat />

      {/* HERO SECTION */}
      <div className="flex items-center pt-[100px] pb-[60px] px-[5%] md:px-[8%] min-h-[300px] bg-gradient-to-br from-[#1a3a2a] from-60% to-[#4a2c12]">
        <div>
          <div className="text-[12px] text-[#b7e4c7] tracking-[1px] uppercase mb-[14px]">
            Home <span className="opacity-50 mx-2">›</span> Contact
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white font-bold">
            Contact <em className="italic text-[#b7e4c7]">Us</em>
          </h1>
          <p className="text-white/70 text-[1rem] mt-3 max-w-[500px] leading-[1.7]">
            We are ready to assist you with product inquiries, samples, and orders.
          </p>
        </div>
      </div>

      {/* CONTACT GRID */}
      <div className="py-[70px] px-[5%] md:px-[8%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          
          {/* INFO */}
          <div>
            <h3 className="font-display text-[1.8rem] text-[#1a3a2a] mb-2">Let's Work Together</h3>
            <p className="text-[#4a4a4a] text-[14px] leading-[1.7] mb-8">
              Whether you're looking for a specific spice, need a sample, or want to discuss bulk
              orders — our team is ready to help. Reach out through any channel below.
            </p>

            <div className="flex gap-4 mb-6 items-start">
              <div className="w-[44px] h-[44px] shrink-0 bg-[#f9f5ef] rounded-xl flex items-center justify-center text-[18px]">📍</div>
              <div>
                <div className="text-[11px] tracking-[1.5px] uppercase text-[#8a8a8a] mb-1">Office Address</div>
                <p className="text-[14px] text-[#1a3a2a] font-medium m-0">Gg. Nyai Mani RT 14 RW 04, Desa Wilayut, Kec. Sukodono, Kab. Sidoarjo, Jawa Timur, Indonesia</p>
              </div>
            </div>

            <div className="flex gap-4 mb-6 items-start">
              <div className="w-[44px] h-[44px] shrink-0 bg-[#f9f5ef] rounded-xl flex items-center justify-center text-[18px]">📧</div>
              <div>
                <div className="text-[11px] tracking-[1.5px] uppercase text-[#8a8a8a] mb-1">Email</div>
                <a href="mailto:cvbhumyamcanusantarajaya@gmail.com" className="text-[14px] text-[#1a3a2a] font-medium no-underline transition-colors duration-200 hover:text-[#2d6a4f]">
                  cvbhumyamcanusantarajaya@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 mb-6 items-start">
              <div className="w-[44px] h-[44px] shrink-0 bg-[#f9f5ef] rounded-xl flex items-center justify-center text-[18px]">💬</div>
              <div>
                <div className="text-[11px] tracking-[1.5px] uppercase text-[#8a8a8a] mb-1">WhatsApp</div>
                <a href="https://wa.me/6282326929890" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#1a3a2a] font-medium no-underline transition-colors duration-200 hover:text-[#2d6a4f]">
                  +62 823-2692-9890
                </a>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[11px] tracking-[2px] uppercase text-[#2d6a4f] font-semibold mb-3">Follow Us</div>
              <div className="flex gap-3 flex-wrap mt-3">
                <a href="https://instagram.com/bnjspices" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-[1.5px] border-[#e8e0d5] py-2.5 px-4.5 rounded-full text-[#1a1a1a] no-underline text-[13px] font-medium transition-all duration-200 hover:border-[#2d6a4f] hover:text-[#2d6a4f]">📸 @bnjspices</a>
                <a href="https://tiktok.com/@bnjspices" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-[1.5px] border-[#e8e0d5] py-2.5 px-4.5 rounded-full text-[#1a1a1a] no-underline text-[13px] font-medium transition-all duration-200 hover:border-[#2d6a4f] hover:text-[#2d6a4f]">🎵 @bnjspices</a>
                <a href="https://facebook.com/bnjspices" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-[1.5px] border-[#e8e0d5] py-2.5 px-4.5 rounded-full text-[#1a1a1a] no-underline text-[13px] font-medium transition-all duration-200 hover:border-[#2d6a4f] hover:text-[#2d6a4f]">📘 @bnjspices</a>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/6282326929890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded-full text-[13px] font-semibold no-underline border-none cursor-pointer transition-all duration-200 font-body hover:bg-[#1ebe5b] hover:-translate-y-[1px]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-[20px] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
            <h3 className="font-display text-[1.6rem] text-[#1a3a2a] mb-6">Send an Inquiry</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
              <div className="mb-[18px]">
                <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[#4a4a4a] mb-[7px]">Full Name</label>
                <input type="text" placeholder="Your name" className="w-full py-3 px-4 border-[1.5px] border-[#e8e0d5] rounded-[10px] text-[14px] font-body text-[#1a1a1a] bg-[#f9f5ef] outline-none transition-colors duration-200 focus:border-[#2d6a4f]" />
              </div>
              <div className="mb-[18px]">
                <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[#4a4a4a] mb-[7px]">WhatsApp Number</label>
                <input type="text" placeholder="+1 234 567 890" className="w-full py-3 px-4 border-[1.5px] border-[#e8e0d5] rounded-[10px] text-[14px] font-body text-[#1a1a1a] bg-[#f9f5ef] outline-none transition-colors duration-200 focus:border-[#2d6a4f]" />
              </div>
            </div>
            <div className="mb-[18px]">
              <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[#4a4a4a] mb-[7px]">Email Address</label>
              <input type="email" placeholder="you@company.com" className="w-full py-3 px-4 border-[1.5px] border-[#e8e0d5] rounded-[10px] text-[14px] font-body text-[#1a1a1a] bg-[#f9f5ef] outline-none transition-colors duration-200 focus:border-[#2d6a4f]" />
            </div>
            <div className="mb-[18px]">
              <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[#4a4a4a] mb-[7px]">Product of Interest</label>
              <select className="w-full py-3 px-4 border-[1.5px] border-[#e8e0d5] rounded-[10px] text-[14px] font-body text-[#1a1a1a] bg-[#f9f5ef] outline-none transition-colors duration-200 focus:border-[#2d6a4f]">
                <option value="">Select a product...</option>
                <option>Kayu Manis (Cinnamon)</option>
                <option>Jahe (Ginger)</option>
                <option>Kunyit (Turmeric)</option>
                <option>Kemiri (Candlenut)</option>
                <option>Asam Jawa (Tamarind)</option>
                <option>Cabe Jawa (Long Pepper)</option>
                <option>Cengkeh (Cloves)</option>
                <option>Pala (Nutmeg)</option>
                <option>Multiple / Others</option>
              </select>
            </div>
            <div className="mb-[18px]">
              <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[#4a4a4a] mb-[7px]">Message / Details</label>
              <textarea placeholder="Tell us about your requirements, quantity needed, destination country..." className="w-full h-[100px] resize-y py-3 px-4 border-[1.5px] border-[#e8e0d5] rounded-[10px] text-[14px] font-body text-[#1a1a1a] bg-[#f9f5ef] outline-none transition-colors duration-200 focus:border-[#2d6a4f]" />
            </div>
            <button 
              className="w-full justify-center bg-gradient-to-br from-[#2d6a4f] to-[#1a3a2a] text-white py-3.5 px-[30px] rounded-full text-[14px] font-semibold no-underline transition-all duration-300 flex items-center gap-2 border-none cursor-pointer shadow-[0_4px_20px_rgba(45,106,79,0.4)] font-body hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(45,106,79,0.5)]" 
              onClick={handleSubmit}
            >
              📩 Send Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="bg-[#f9f5ef] py-[70px] px-[5%] md:px-[8%]">
        <div className="text-[11px] tracking-[3px] uppercase text-[#2d6a4f] font-semibold mb-2.5">FAQ</div>
        <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] text-[#1a3a2a] mb-5">
          Frequently Asked <em className="italic text-[#7c4b1e]">Questions</em>
        </h2>
        <div className="max-w-[800px] mt-10">
          {faqs.map((faq, i) => (
            <div key={i} className={`border-b border-[#e0d8ce] group ${openFaq === i ? "is-open" : ""}`}>
              <button 
                className="w-full bg-transparent border-none py-[22px] flex justify-between items-center cursor-pointer font-body text-[15px] font-semibold text-[#1a3a2a] text-left transition-colors duration-200 gap-4 hover:text-[#2d6a4f]" 
                onClick={() => setMenuOpen(false) /* placeholder untuk logic lain jika perlu */ || setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.q}
                <span className={`w-[28px] h-[28px] rounded-full flex items-center justify-center text-white text-[18px] shrink-0 transition-all duration-300 leading-none ${openFaq === i ? "rotate-45 bg-[#7c4b1e]" : "bg-[#52b788]"}`}>
                  +
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? "max-h-[300px]" : "max-h-0"}`}
              >
                <p className="text-[#4a4a4a] text-[14px] leading-[1.75] pb-5 m-0">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAPS */}
      <section className="bg-white py-[60px] px-[5%] md:py-[90px] md:px-[8%]">
        <div className="text-[11px] tracking-[3px] uppercase text-[#2d6a4f] font-semibold mb-2.5">Find Us</div>
        <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] text-[#1a3a2a] mb-5">
          Visit Our <em className="italic text-[#7c4b1e]">Warehouse</em>
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
              📲 Contact for Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}