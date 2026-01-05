// import styles from "./Navbar.module.css";

// export default function Navbar() {
//   return (
//     <nav className={styles.nav}>
//       <div className={styles.logo}>Lokanesia</div>

//       <ul className={styles.menu}>
//         <li>Courses</li>
//         <li>How It Works</li>
//         <li>Community</li>
//         <li>About</li>
//         <li className={styles.cta}>Start Learning</li>
//       </ul>
//     </nav>
//   );
// }

import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-wofiBg/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo WoFi */}
          <div className="w-10 h-10 bg-wofiOrange rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-200">
            W
          </div>
          <span className="font-black text-2xl tracking-tighter text-wofiBlack">Wo-Fi</span>
        </div>

        {/* Menu Navigasi */}
        <div className="hidden md:flex items-center gap-10 font-bold text-sm text-wofiBlack">
          <a href="#" className="hover:text-wofiOrange transition-colors">Tentang Kami</a>
          <a href="#" className="hover:text-wofiOrange transition-colors">Kenapa Wo-Fi</a>
          <a href="#" className="hover:text-wofiOrange transition-colors">Fitur</a>
        </div>

        <button className="bg-wofiOrange text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-600 transition-all active:scale-95">
          Mulai Belajar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;