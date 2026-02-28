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

      {/* HERO SECTION */}
      <div className="flex items-center pt-[100px] pb-[60px] px-[5%] md:px-[8%] min-h-[300px] bg-[linear-gradient(to_right,rgba(26,58,42,0.9)_0%,rgba(26,58,42,0.6)_100%),url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')] bg-center bg-cover">
        <div>
          <div className="text-[12px] text-[#b7e4c7] tracking-[1px] uppercase mb-[14px]">
            Home <span className="opacity-50 mx-2">›</span> Gallery
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white font-bold">
            Our <em className="italic text-[#b7e4c7]">Gallery</em>
          </h1>
          <p className="text-white/70 text-[1rem] mt-3 max-w-[500px] leading-[1.7]">
            A glimpse into our products, operations, and shipments.
          </p>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="py-[60px] px-[5%] md:px-[8%]">
        {categories.map((cat) => (
          <div key={cat.title} className="mb-[60px]">
            <h3 className="font-display text-[1.8rem] text-[#1a3a2a] mb-5 pb-3 border-b-2 border-[#b7e4c7]">
              {cat.title}
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[14px]">
              {cat.images.map((img) => (
                <div key={img.src} className="rounded-[12px] overflow-hidden aspect-[4/3] cursor-pointer relative group">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading="lazy" 
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-[#1a3a2a]/40 opacity-0 transition-opacity duration-300 flex items-center justify-center text-white text-[24px] group-hover:opacity-100">
                    🔍
                  </div>
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