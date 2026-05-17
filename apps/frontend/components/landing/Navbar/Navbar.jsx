"use client";

import styles from "./Navbar.module.css";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.wrapper}`}>
        
        <div className={styles.logo}>
          <div className={styles.icon}></div>

          <span>Lokanesia</span>
        </div>

        <nav className={styles.navlinks}>
          <a href="#">Explore</a>
          <a href="#">Culture</a>
          <a href="#">Technology</a>
          <a href="#">Community</a>
        </nav>

        <div className={styles.right}>
          <button className={styles.login}>
            Sign In
          </button>

          <button className={styles.cta}>
            Start Exploring
          </button>
        </div>

        <button className={styles.mobileBtn}>
          <Menu size={22} strokeWidth={2.2} />
        </button>

      </div>
    </header>
  );
}