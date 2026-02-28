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

      {/* HERO */}
      <div className="contact-hero page-hero">
        <div>
          <div className="page-breadcrumb">Home <span>›</span> Contact</div>
          <h1>Contact <em style={{ color: "var(--green-pale)" }}>Us</em></h1>
          <p>We are ready to assist you with product inquiries, samples, and orders.</p>
        </div>
      </div>

      {/* CONTACT GRID */}
      <div className="contact-section">
        <div className="contact-grid">
          {/* INFO */}
          <div className="contact-info">
            <h3>Let&apos;s Work Together</h3>
            <p>
              Whether you&apos;re looking for a specific spice, need a sample, or want to discuss bulk
              orders — our team is ready to help. Reach out through any channel below.
            </p>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-item-text">
                <div className="contact-item-label">Office Address</div>
                <p>Gg. Nyai Mani RT 14 RW 04, Desa Wilayut, Kec. Sukodono, Kab. Sidoarjo, Jawa Timur, Indonesia</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-item-text">
                <div className="contact-item-label">Email</div>
                <a href="mailto:cvbhumyamcanusantarajaya@gmail.com">
                  cvbhumyamcanusantarajaya@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <div className="contact-item-text">
                <div className="contact-item-label">WhatsApp</div>
                <a href="https://wa.me/6282326929890" target="_blank" rel="noopener noreferrer">
                  +62 823-2692-9890
                </a>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <div className="spec-title">Follow Us</div>
              <div className="social-grid">
                <a href="https://instagram.com/bnjspices" target="_blank" rel="noopener noreferrer" className="social-btn">📸 @bnjspices</a>
                <a href="https://tiktok.com/@bnjspices" target="_blank" rel="noopener noreferrer" className="social-btn">🎵 @bnjspices</a>
                <a href="https://facebook.com/bnjspices" target="_blank" rel="noopener noreferrer" className="social-btn">📘 @bnjspices</a>
              </div>
            </div>

            <div style={{ marginTop: 32 }}>
              <a
                href="https://wa.me/6282326929890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
                style={{ display: "inline-flex" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="inquiry-form">
            <h3>Send an Inquiry</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>WhatsApp Number</label>
                <input type="text" placeholder="+1 234 567 890" />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@company.com" />
            </div>
            <div className="form-group">
              <label>Product of Interest</label>
              <select>
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
            <div className="form-group">
              <label>Message / Details</label>
              <textarea placeholder="Tell us about your requirements, quantity needed, destination country..." />
            </div>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={handleSubmit}>
              📩 Send Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="faq-section">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {faq.q}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAPS */}
      <section className="section map-section" style={{ background: "white" }}>
        <div className="section-label">Find Us</div>
        <h2 className="section-title">Visit Our <em>Warehouse</em></h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.9!2d112.72!3d-7.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjcnMzYuMCJTIDExMsKwNDMnMTIuMCJF!5e0!3m2!1sen!2sid!4v1"
            allowFullScreen
            loading="lazy"
            title="BNJ Spices Location"
          />
          <div className="map-info">
            <p>📍 Gg. Nyai Mani RT 14 RW 04, Desa Wilayut, Kec. Sukodono, Kab. Sidoarjo, Jawa Timur</p>
            <a href="https://wa.me/6282326929890" target="_blank" rel="noopener noreferrer" className="btn-small">
              📲 Contact for Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
