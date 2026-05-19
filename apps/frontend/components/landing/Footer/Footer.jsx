"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className="container">

        <div className={styles.top}>

          <div>

            <h2>Lokanesia</h2>

            <p>
              Platform belajar bahasa daerah
              Indonesia yang interaktif
              dan modern.
            </p>

          </div>

          <div className={styles.links}>

            <a>Beranda</a>
            <a>Fitur</a>
            <a>Tentang</a>
            <a>Komunitas</a>

          </div>

        </div>

        <div className={styles.bottom}>

          <span>
            © 2026 Lokanesia
          </span>

          <span>
            Dibuat untuk GEMASTIK
          </span>

        </div>

      </div>

    </footer>
  );
}