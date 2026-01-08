import React from 'react';
import { Globe, Zap, Smartphone, Target, Download, ChevronRight, Star, Map } from 'lucide-react';

/**
 * LOKANESIA - Versi Perbaikan Total (CSS Native)
 * Menggunakan Standard CSS untuk menjamin tampilan muncul meskipun Tailwind bermasalah.
 */

const Navbar = () => (
  <nav className="navbar">
    <div className="container nav-content">
      <div className="logo-area">
        <div className="logo-box">L</div>
        <span className="logo-text">Lokanesia</span>
      </div>
      <div className="nav-links">
        <a href="#">Pilihan Bahasa</a>
        <a href="#">Metode Belajar</a>
        <a href="#">Komunitas</a>
      </div>
      <button className="btn-primary">Mulai Belajar</button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <div className="container text-center">
      <h1 className="hero-title">
        Kuasai bahasa <br />
        <span className="serif-italic">daerah kita—</span> 
        <span className="relative-inline">
          seru,
          <svg className="underline-svg" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M1 9C25 2 75 2 99 9" stroke="#FF5C00" strokeWidth="5" strokeLinecap="round" fill="none"/>
          </svg>
        </span> <br />
        mudah, & gratis
      </h1>
      <p className="hero-desc">
        Belajar Bahasa Jawa, Sunda, Bali, hingga Papua dengan metode interaktif yang menyenangkan. 
        Jangan biarkan bahasa daerah kita pudar!
      </p>
      <button className="btn-large">Pilih Bahasa Sekarang</button>
      
      <div className="lang-list">
        <p className="lang-caption">Tersedia dalam berbagai bahasa</p>
        <div className="lang-items">
          {['JAWA', 'SUNDA', 'BALI', 'MINANG', 'BUGIS', 'ACEH'].map((lang, i) => (
            <span key={i} className="lang-item">{lang}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="features container">
    <div className="bento-grid">
      <div className="bento-card card-yellow col-7">
        <div className="icon-box"><Map size={32} /></div>
        <h3 className="card-title">Eksplorasi <br/>Ragam Dialek</h3>
        <p className="card-text">Dari Ngoko hingga Kromo Inggil, pelajari konteks budaya di balik setiap kata.</p>
        <div className="mockup-dialek">
          <span className="tag-ngoko">Ngoko</span>
          <span className="tag-kromo">Kromo</span>
          <p className="sample-text">"Sugeng Rawuh..."</p>
        </div>
      </div>
      <div className="bento-card card-green col-5">
        <div className="icon-box"><Zap size={32} /></div>
        <h3 className="card-title-small">Misi Harian</h3>
        <p className="card-text">Belajar kosakata baru setiap pagi sambil minum kopi.</p>
        <div className="progress-container">
          <div className="progress-bar"><div className="progress-fill"></div></div>
          <span className="progress-label">Progres: 12/20 Kata</span>
        </div>
      </div>
      <div className="bento-card card-purple col-5 center-content">
        <div className="flag-circle">🇮🇩</div>
        <h3 className="card-title-small">Cinta Tanah Air</h3>
        <p className="card-text">Menjaga warisan budaya tetap hidup.</p>
      </div>
      <div className="bento-card card-orange col-7">
        <h3 className="card-title">Belajar Lewat <br/>Cerita Rakyat.</h3>
        <p className="card-text">Dengarkan audio legenda Nusantara dengan pengisian suara asli.</p>
        <button className="btn-dark">Mulai Mendengar</button>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <main className="main-wrapper">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&family=Instrument+Serif:italic&display=swap');
        
        :root {
          --bg: #FCFBF7;
          --primary: #FF5C00;
          --text: #1A1A1A;
          --gray: #666;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; background: var(--bg); color: var(--text); line-height: 1.5; }
        .container { max-width: 1200px; margin: 0 auto; px: 20px; }
        .text-center { text-center; }
        
        /* Navbar */
        .navbar { position: sticky; top: 0; background: rgba(252, 251, 247, 0.9); backdrop-filter: blur(10px); border-bottom: 1px solid #eee; z-index: 100; height: 80px; }
        .nav-content { display: flex; justify-content: space-between; align-items: center; height: 100%; padding: 0 24px; }
        .logo-area { display: flex; align-items: center; gap: 10px; }
        .logo-box { width: 40px; height: 40px; background: var(--primary); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 24px; }
        .logo-text { font-weight: 900; font-size: 24px; letter-spacing: -1px; }
        .nav-links { display: none; gap: 40px; font-weight: 700; font-size: 14px; }
        @media (min-width: 768px) { .nav-links { display: flex; } }
        .btn-primary { background: var(--primary); color: white; border: none; padding: 10px 24px; border-radius: 50px; font-weight: 700; cursor: pointer; }

        /* Hero */
        .hero { padding: 80px 24px; text-align: center; }
        .badge { display: inline-block; padding: 6px 16px; background: #FFF5F0; color: var(--primary); border-radius: 50px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; border: 1px solid #FFD1B9; margin-bottom: 32px; }
        .hero-title { font-size: clamp(40px, 8vw, 90px); line-height: 0.95; font-weight: 800; letter-spacing: -2px; margin-bottom: 40px; }
        .serif-italic { font-family: 'Instrument Serif', serif; font-style: italic; color: #bbb; font-weight: 300; }
        .hero-desc { max-width: 600px; margin: 0 auto 48px; font-size: 20px; color: var(--gray); font-weight: 500; }
        .btn-large { background: var(--primary); color: white; border: none; padding: 20px 48px; border-radius: 100px; font-weight: 800; font-size: 20px; cursor: pointer; box-shadow: 0 20px 40px rgba(255, 92, 0, 0.2); transition: transform 0.2s; }
        .btn-large:hover { transform: scale(1.05); }
        .underline-svg { position: absolute; bottom: -8px; left: 0; width: 100%; height: 16px; }
        .relative-inline { position: relative; display: inline-block; }

        /* Lang list */
        .lang-list { margin-top: 100px; }
        .lang-caption { font-size: 10px; font-weight: 800; color: #ccc; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 32px; }
        .lang-items { display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; font-weight: 900; font-size: 24px; color: #ddd; font-style: italic; }
        .lang-item:hover { color: var(--primary); transform: scale(1.1); transition: 0.3s; cursor: pointer; }

        /* Bento Grid */
        .features { padding: 100px 24px; }
        .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 32px; }
        .bento-card { padding: 48px; border-radius: 60px; min-height: 500px; display: flex; flex-direction: column; overflow: hidden; position: relative; }
        .col-7 { grid-column: span 12; }
        .col-5 { grid-column: span 12; }
        @media (min-width: 768px) { .col-7 { grid-column: span 7; } .col-5 { grid-column: span 5; } }
        
        .card-yellow { background: #FFF490; }
        .card-green { background: #D1F5D3; }
        .card-purple { background: #E7D1FF; }
        .card-orange { background: #FFD1B9; }
        
        .icon-box { width: 64px; height: 64px; background: rgba(0,0,0,0.05); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 32px; }
        .card-title { font-size: 48px; font-weight: 800; letter-spacing: -1px; line-height: 1.1; margin-bottom: 24px; }
        .card-title-small { font-size: 36px; font-weight: 800; margin-bottom: 16px; }
        .card-text { font-size: 18px; color: #333; font-weight: 500; max-width: 320px; }

        .mockup-dialek { position: absolute; bottom: -20px; right: -20px; background: white; width: 80%; height: 50%; border-radius: 40px 0 0 0; padding: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.1); }
        .tag-ngoko { padding: 4px 12px; background: #FFF5F0; color: #FF5C00; border-radius: 20px; font-size: 10px; font-weight: 800; margin-right: 8px; font-style: italic; }
        .tag-kromo { padding: 4px 12px; background: #E0F2FE; color: #0284C7; border-radius: 20px; font-size: 10px; font-weight: 800; font-style: italic; }
        .sample-text { margin-top: 24px; font-size: 24px; font-family: 'Instrument Serif', serif; font-style: italic; color: #aaa; }

        .progress-container { background: rgba(255,255,255,0.4); border: 2px solid white; padding: 24px; border-radius: 30px; margin-top: auto; }
        .progress-bar { height: 12px; background: #bbf7d0; border-radius: 10px; overflow: hidden; margin-bottom: 10px; }
        .progress-fill { width: 65%; height: 100%; background: #16a34a; border-radius: 10px; }
        .progress-label { font-size: 10px; font-weight: 800; color: #166534; text-transform: uppercase; }

        .flag-circle { width: 120px; height: 120px; background: white; border-radius: 100px; display: flex; align-items: center; justify-content: center; font-size: 60px; margin-bottom: 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .center-content { align-items: center; justify-content: center; text-align: center; }
        .btn-dark { background: black; color: white; border: none; padding: 16px 32px; border-radius: 20px; font-weight: 700; margin-top: 32px; cursor: pointer; width: fit-content; }
        
        /* Footer */
        .footer-cta { padding: 150px 24px; text-align: center; }
        .footer-title { font-size: clamp(32px, 10vw, 80px); font-weight: 800; margin-bottom: 48px; letter-spacing: -2px; }
      `}} />
      
      <Navbar />
      <Hero />
      <Features />

      <section className="footer-cta">
        <h2 className="footer-title">Lestarikan bahasa <br/>kita sekarang.</h2>
        <button className="btn-large">Daftar Gratis</button>
      </section>
      
      <footer style={{ padding: '60px 24px', borderTop: '1px solid #eee', textAlign: 'center' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.5 }}>
          <div className="logo-area">
             <div className="logo-box" style={{ width: 24, height: 24, fontSize: 14 }}>L</div>
             <span className="logo-text" style={{ fontSize: 18 }}>Lokanesia</span>
          </div>
          <p style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>© 2026 Lokanesia. Bangga Berbahasa Daerah.</p>
        </div>
      </footer>
    </main>
  );
}