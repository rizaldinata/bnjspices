import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

export const metadata = {
  title: "Gallery – BNJ Spices",
};

const categories = [
  {
    title: "🌶️ Products",
    images: [
      { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", alt: "Cinnamon" },
      { src: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&q=80", alt: "Cloves" },
      { src: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80", alt: "Ginger" },
      { src: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&q=80", alt: "Turmeric" },
      { src: "https://images.unsplash.com/photo-1597612647813-5cf41be4153d?w=600&q=80", alt: "Pepper" },
      { src: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=80", alt: "Spices mix" },
    ],
  },
  {
    title: "🏭 Processing & Warehouse",
    images: [
      { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", alt: "Warehouse" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", alt: "Processing" },
      { src: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55b?w=600&q=80", alt: "Sorting" },
    ],
  },
  {
    title: "🚢 Shipping",
    images: [
      { src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80", alt: "Shipping" },
      { src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80", alt: "Cargo" },
      { src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80", alt: "Export" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <WaFloat />

      {/* HERO */}
      <div className="gallery-hero page-hero">
        <div>
          <div className="page-breadcrumb">Home <span>›</span> Gallery</div>
          <h1>Our <em style={{ color: "var(--green-pale)" }}>Gallery</em></h1>
          <p>A glimpse into our products, operations, and shipments.</p>
        </div>
      </div>

      <div className="gallery-section">
        {categories.map((cat) => (
          <div key={cat.title} className="gallery-category">
            <h3>{cat.title}</h3>
            <div className="gallery-grid">
              {cat.images.map((img) => (
                <div key={img.src} className="gallery-img">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="gallery-overlay">🔍</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
