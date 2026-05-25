"use client";

import styles from "./Navbar.module.css";
import {useAuthModal} from "@/context/AuthModalContext";  
import { Menu } from "lucide-react";
import {useRouter} from "next/navigation";



export default function Navbar() {
  const router = useRouter();
  const {
    openLogin,
  } = useAuthModal();

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
          <button onClick={openLogin} className={styles.login}>
            Masuk
          </button>

          <button 
          onClick={() => router.push("/dashboard")}
          className={styles.cta}>
            Mulai Belajar 
          </button>
        </div>

        <button className={styles.mobileBtn}>
          <Menu size={22} strokeWidth={2.2} />
        </button>

      </div>
    </header>
  );
}