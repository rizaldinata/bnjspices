import Link from "next/link";

export default function Footer({ desc }: { desc?: string }) {
  const defaultDesc =
    "Indonesia is renowned for its high-quality and diverse spices, cultivated under ideal natural conditions and traditional practices. CV Bhumyamca Nusantara Jaya brings these premium spices to global markets, offering export-ready products, reliable handling, and professional support.";

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="nav-logo-icon" style={{ marginBottom: 12 }}>BNJ</div>
          <p>{desc || defaultDesc}</p>
          <div className="footer-socials">
            <a href="https://instagram.com/bnjspices" target="_blank" rel="noopener noreferrer" title="Instagram">📸</a>
            <a href="https://tiktok.com/@bnjspices" target="_blank" rel="noopener noreferrer" title="TikTok">🎵</a>
            <a href="https://facebook.com/bnjspices" target="_blank" rel="noopener noreferrer" title="Facebook">📘</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">💼</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Products</h4>
          <ul>
            <li><Link href="/products">Kayu Manis</Link></li>
            <li><Link href="/products">Cengkeh</Link></li>
            <li><Link href="/products">Pala</Link></li>
            <li><Link href="/products">Jahe</Link></li>
            <li><Link href="/products">Kunyit</Link></li>
            <li><Link href="/products">Kemiri</Link></li>
            <li><Link href="/products">Asam Jawa</Link></li>
            <li><Link href="/products">Cabe Jawa</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <span className="icon">📍</span>
            <p>Gg. Nyai Mani RT 14 RW 04, Desa Wilayut, Kec. Sukodono, Kab. Sidoarjo, Jawa Timur</p>
          </div>
          <div className="footer-contact-item">
            <span className="icon">📧</span>
            <a href="mailto:cvbhumyamcanusantarajaya@gmail.com">cvbhumyamcanusantarajaya@gmail.com</a>
          </div>
          <div className="footer-contact-item">
            <span className="icon">💬</span>
            <a href="https://wa.me/6282326929890" target="_blank" rel="noopener noreferrer">+62 823-2692-9890</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 CV Bhumyamca Nusantara Jaya. All rights reserved.</p>
        <p>bnjspices.com</p>
      </div>
    </footer>
  );
}
