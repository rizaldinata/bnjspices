import Link from "next/link";

export default function Footer({ desc }: { desc?: string }) {
  const defaultDesc =
    "Indonesia is renowned for its high-quality and diverse spices, cultivated under ideal natural conditions and traditional practices. CV Bhumyamca Nusantara Jaya brings these premium spices to global markets, offering export-ready products, reliable handling, and professional support.";

  return (
    <footer className="bg-[#1a3a2a] text-white pt-[60px] pb-[30px] px-[5%] md:px-[8%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-[50px] mb-[50px]">
        
        {/* Kolom Profil Singkat */}
        <div className="flex flex-col">
          <div className="w-[44px] h-[44px] bg-gradient-to-br from-[#52b788] to-[#c68642] rounded-full flex items-center justify-center font-display text-[18px] font-bold text-white tracking-tighter shrink-0 mb-3">
            BNJ
          </div>
          <p className="text-[13px] leading-[1.8] text-white/65 my-4">{desc || defaultDesc}</p>
          <div className="flex gap-2.5">
            <a className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white no-underline text-[14px] transition-colors duration-200 hover:bg-[#52b788]" href="https://instagram.com/bnjspices" target="_blank" rel="noopener noreferrer" title="Instagram">📸</a>
            <a className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white no-underline text-[14px] transition-colors duration-200 hover:bg-[#52b788]" href="https://tiktok.com/@bnjspices" target="_blank" rel="noopener noreferrer" title="TikTok">🎵</a>
            <a className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white no-underline text-[14px] transition-colors duration-200 hover:bg-[#52b788]" href="https://facebook.com/bnjspices" target="_blank" rel="noopener noreferrer" title="Facebook">📘</a>
            <a className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white no-underline text-[14px] transition-colors duration-200 hover:bg-[#52b788]" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">💼</a>
          </div>
        </div>

        {/* Kolom Navigasi */}
        <div className="flex flex-col">
          <h4 className="text-[13px] font-semibold tracking-[1.5px] uppercase text-[#b7e4c7] mb-5">Navigation</h4>
          <ul className="list-none m-0 p-0">
            <li className="mb-2.5"><Link href="/" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">Home</Link></li>
            <li className="mb-2.5"><Link href="/about" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">About Us</Link></li>
            <li className="mb-2.5"><Link href="/products" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">Products</Link></li>
            <li className="mb-2.5"><Link href="/gallery" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">Gallery</Link></li>
            <li className="mb-2.5"><Link href="/contact" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">Contact</Link></li>
          </ul>
        </div>

        {/* Kolom Produk Kami */}
        <div className="flex flex-col">
          <h4 className="text-[13px] font-semibold tracking-[1.5px] uppercase text-[#b7e4c7] mb-5">Our Products</h4>
          <ul className="list-none m-0 p-0">
            <li className="mb-2.5"><Link href="/products" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">Kayu Manis</Link></li>
            <li className="mb-2.5"><Link href="/products" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">Cengkeh</Link></li>
            <li className="mb-2.5"><Link href="/products" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">Pala</Link></li>
            <li className="mb-2.5"><Link href="/products" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">Jahe</Link></li>
            <li className="mb-2.5"><Link href="/products" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">Kunyit</Link></li>
            <li className="mb-2.5"><Link href="/products" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">Kemiri</Link></li>
            <li className="mb-2.5"><Link href="/products" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">Asam Jawa</Link></li>
            <li className="mb-2.5"><Link href="/products" className="text-white/65 no-underline text-[13px] transition-colors duration-200 cursor-pointer hover:text-[#b7e4c7]">Cabe Jawa</Link></li>
          </ul>
        </div>

        {/* Kolom Kontak */}
        <div className="flex flex-col">
          <h4 className="text-[13px] font-semibold tracking-[1.5px] uppercase text-[#b7e4c7] mb-5">Contact Us</h4>
          <div className="flex gap-2.5 mb-3.5 items-start">
            <span className="text-[16px] mt-[1px]">📍</span>
            <p className="text-[13px] text-white/65 m-0 leading-[1.5]">Gg. Nyai Mani RT 14 RW 04, Desa Wilayut, Kec. Sukodono, Kab. Sidoarjo, Jawa Timur</p>
          </div>
          <div className="flex gap-2.5 mb-3.5 items-start">
            <span className="text-[16px] mt-[1px]">📧</span>
            <a href="mailto:cvbhumyamcanusantarajaya@gmail.com" className="text-[13px] text-white/65 no-underline leading-[1.5] transition-colors duration-200 hover:text-white">cvbhumyamcanusantarajaya@gmail.com</a>
          </div>
          <div className="flex gap-2.5 mb-3.5 items-start">
            <span className="text-[16px] mt-[1px]">💬</span>
            <a href="https://wa.me/6282326929890" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/65 no-underline leading-[1.5] transition-colors duration-200 hover:text-white">+62 823-2692-9890</a>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[12px] text-white/40 gap-2 text-center">
        <p className="m-0">© 2025 CV Bhumyamca Nusantara Jaya. All rights reserved.</p>
        <p className="m-0">bnjspices.com</p>
      </div>
    </footer>
  );
}