// import styles from "./HeroSection.module.css";

// export default function HeroSection() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.left}>
//         <h1 className={styles.title}>
//           Learn a language <br />
//           the fun way—fast, <br />
//           free, forever
//         </h1>

//         <p className={styles.desc}>
//           Lokanesia membantu kamu belajar bahasa daerah Indonesia secara
//           interaktif dan menyenangkan.
//         </p>

//         <button className={styles.button}>Get a Demo</button>
//       </div>

//       <div className={styles.right}>
//         <img src="/hero.png" alt="Hero illustration" />
//       </div>
//     </section>
//   );
// }
import React from 'react';

const Hero = () => {
  const languages = [
    { name: 'English', flag: '🇺🇸' },
    { name: 'Japanese', flag: '🇯🇵' },
    { name: 'Korean', flag: '🇰🇷' },
    { name: 'German', flag: '🇩🇪' },
    { name: 'French', flag: '🇫🇷' },
  ];

  return (
    <section className="relative pt-20 pb-24 px-6 overflow-hidden bg-wofiBg">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-8 text-wofiBlack">
          Belajar bahasa <br />
          <span className="italic font-serif font-light text-gray-500">dengan cara seru—</span> 
          <span className="relative inline-block ml-2 text-wofiBlack">
            cepat,
            {/* Efek garis bawah oranye kustom */}
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M1 9C25 2 75 2 99 9" stroke="#FF5C00" strokeWidth="4" strokeLinecap="round" fill="none"/>
            </svg>
          </span> <br />
          gratis, selamanya
        </h1>
        
        <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl mb-12 leading-relaxed">
          Kuasai bahasa baru dengan pelajaran interaktif yang terasa seperti permainan. 
          Gabung dengan jutaan pembelajar sekarang!
        </p>

        <button className="bg-wofiOrange text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-orange-200 transition-all hover:-translate-y-1">
          Mulai Belajar Gratis
        </button>
      </div>

      {/* Language Selector Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {languages.map((lang) => (
            <div key={lang.name} className="flex flex-col items-center gap-2 cursor-pointer group">
              <span className="text-4xl group-hover:scale-125 transition-transform">{lang.flag}</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-wofiBlack">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;