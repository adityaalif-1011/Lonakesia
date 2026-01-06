import React from 'react';
import { Globe, Zap, Smartphone, Target, Download, ChevronRight, Star } from 'lucide-react';

/**
 * Update: Menggunakan kode HEX langsung agar tampilan 100% konsisten 
 * tanpa bergantung sepenuhnya pada tailwind.config.js eksternal.
 */

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#FF5C00] rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-200">W</div>
        <span className="font-black text-2xl tracking-tighter text-[#1A1A1A]">Wo-Fi</span>
      </div>
      <div className="hidden md:flex items-center gap-10 font-bold text-sm text-[#1A1A1A]">
        <a href="#" className="hover:text-[#FF5C00] transition-colors">Tentang kami</a>
        <a href="#" className="hover:text-[#FF5C00] transition-colors">Kenapa Wo-Fi</a>
        <a href="#" className="hover:text-[#FF5C00] transition-colors">Fitur</a>
      </div>
      <button className="bg-[#FF5C00] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-orange-200 transition-all active:scale-95">
        Mulai belajar
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-24 pb-32 px-6 overflow-hidden bg-[#FCFBF7]">
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <div className="inline-block px-4 py-1.5 mb-8 border border-orange-100 bg-orange-50 rounded-full text-[#FF5C00] text-xs font-black uppercase tracking-widest">
        Dunia dalam genggamanmu
      </div>
      <h1 className="text-6xl md:text-[100px] font-bold leading-[0.95] tracking-tight mb-10 text-[#1A1A1A]">
        Belajar bahasa <br />
        <span className="italic font-serif font-light text-gray-400">dengan cara seru—</span> 
        <span className="relative inline-block ml-2 text-[#1A1A1A]">
          cepat,
          <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M1 9C25 2 75 2 99 9" stroke="#FF5C00" strokeWidth="5" strokeLinecap="round" fill="none"/>
          </svg>
        </span> <br />
        gratis, selamanya
      </h1>
      <p className="text-gray-500 max-w-2xl mx-auto text-xl md:text-2xl mb-12 leading-relaxed">
        Kuasai bahasa baru dengan pelajaran interaktif yang terasa seperti permainan. 
        Tanpa biaya, tanpa tekanan, hanya keseruan.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="bg-[#FF5C00] text-white px-12 py-6 rounded-full font-bold text-2xl hover:scale-105 transition-transform shadow-2xl shadow-orange-200">
          Mulai Sekarang
        </button>
        <button className="px-12 py-6 rounded-full font-bold text-2xl border-2 border-gray-200 hover:bg-gray-50 transition-colors">
          Lihat Kursus
        </button>
      </div>
    </div>

    {/* Bendera Negara - Desain Baru */}
    <div className="max-w-7xl mx-auto px-6 mt-32">
      <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
        {['🇺🇸', '🇯🇵', '🇰🇷', '🇩🇪', '🇫🇷', '🇮🇹', '🇪🇸'].map((flag, i) => (
          <span key={i} className="text-5xl hover:scale-125 transition-transform cursor-pointer">{flag}</span>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="max-w-7xl mx-auto px-6 py-32">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Bento Besar 1 */}
      <div className="md:col-span-7 bg-[#FFF490] p-12 rounded-[4rem] min-h-[500px] relative overflow-hidden group">
        <div className="relative z-10">
          <div className="bg-black/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
            <Globe className="text-black" size={32} />
          </div>
          <h3 className="text-5xl font-bold mb-6 tracking-tight">Belajar bareng <br/>komunitas global</h3>
          <p className="text-xl text-gray-800 max-w-md leading-relaxed">
            Berlatih langsung dengan penutur asli dari seluruh dunia. Dapatkan koreksi instan dan teman baru.
          </p>
        </div>
        <div className="absolute -bottom-12 -right-12 w-3/4 h-1/2 bg-white rounded-tl-[4rem] shadow-2xl p-10 transform group-hover:-translate-y-6 transition-transform duration-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-blue-100"></div>
            <div className="space-y-2">
              <div className="h-4 w-40 bg-gray-100 rounded-full"></div>
              <div className="h-3 w-24 bg-gray-50 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-4 w-full bg-orange-50 rounded-full"></div>
            <div className="h-4 w-[90%] bg-orange-50 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bento Kecil 1 */}
      <div className="md:col-span-5 bg-[#D1F5D3] p-12 rounded-[4rem] min-h-[500px] flex flex-col justify-between">
        <div className="bg-black/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
          <Zap className="text-black" size={32} />
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-4 tracking-tight">Progres Kilat</h3>
          <p className="text-lg text-gray-800 mb-8">Hanya butuh 10 menit sehari untuk melihat hasilnya.</p>
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/40">
            <div className="flex justify-between mb-2 font-bold text-sm">
              <span>Harian</span>
              <span>85%</span>
            </div>
            <div className="w-full h-4 bg-green-200 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-green-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Kecil 2 */}
      <div className="md:col-span-5 bg-[#E7D1FF] p-12 rounded-[4rem] min-h-[500px] flex flex-col items-center justify-center text-center">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl shadow-xl mb-8 animate-bounce">
          🏆
        </div>
        <h3 className="text-4xl font-bold mb-4">Liga Mingguan</h3>
        <p className="text-lg text-gray-800">Naik peringkat dan tantang teman-temanmu setiap minggu.</p>
      </div>

      {/* Bento Besar 2 */}
      <div className="md:col-span-7 bg-[#FFD1B9] p-12 rounded-[4rem] min-h-[500px] relative overflow-hidden">
        <div className="md:w-2/3">
          <h3 className="text-5xl font-bold mb-6 tracking-tight">Kapanpun, <br/>Dimanapun.</h3>
          <p className="text-xl text-gray-800 mb-10">Unduh pelajaran secara luring dan tetap belajar meski tanpa sinyal.</p>
          <div className="flex gap-4">
             <div className="bg-black text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2">App Store</div>
             <div className="bg-black text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2">Play Store</div>
          </div>
        </div>
        <div className="hidden md:block absolute bottom-0 right-10 w-48 h-80 bg-black rounded-t-3xl border-8 border-gray-800 p-4">
          <div className="w-full h-full bg-[#1A1A1A] rounded-xl flex flex-col gap-2 p-2">
            <div className="h-2 w-1/2 bg-gray-700 rounded-full"></div>
            <div className="h-20 w-full bg-orange-500/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <main className="min-h-screen bg-[#FCFBF7] font-sans selection:bg-[#FF5C00] selection:text-white">
      <Navbar />
      <Hero />
      <Features />

      {/* Testimonial Section */}
      <section className="bg-[#FFF490] py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-10">
            {[...Array(5)].map((_, i) => <Star key={i} fill="#FF5C00" stroke="#FF5C00" size={24} />)}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-16 italic font-serif text-[#1A1A1A]">
            "WoFi benar-benar mengubah cara saya memandang bahasa. Belajar sekarang jadi candu harian yang bermanfaat!"
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white border-4 border-[#FF5C00]/20 flex items-center justify-center text-3xl shadow-xl">
              🙋🏻‍♀️
            </div>
            <div>
              <p className="font-black text-2xl">Anya Ramadhani</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Pelajar Bahasa Jepang</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-48 px-6 text-center bg-[#FCFBF7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-[120px] font-bold mb-16 tracking-tight leading-[0.85] text-[#1A1A1A]">
            Tunggu apa lagi? <br/>Mulai sekarang.
          </h2>
          <button className="bg-[#FF5C00] text-white px-16 py-8 rounded-full font-bold text-3xl hover:scale-110 transition-transform shadow-2xl shadow-orange-200">
            Mulai Belajar Gratis
          </button>
        </div>
      </section>
      
      <footer className="py-12 px-6 border-t border-gray-100 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 bg-[#FF5C00] rounded-lg"></div>
            <span className="font-black text-lg tracking-tighter">Wo-Fi</span>
          </div>
          <p className="text-gray-400 text-sm font-medium">© 2026 Wo-Fi Inc. Dibuat dengan cinta untuk para pembelajar.</p>
          <div className="flex gap-8 text-gray-400 font-bold text-sm">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}