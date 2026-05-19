"use client";

import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>

      <div className="container">

        <div className={styles.box}>

          <h2>
            Mari belajar dan
            melestarikan bahasa daerah
            Indonesia bersama.
          </h2>

          <p>
            Mulai perjalanan belajarmu
            dengan pengalaman yang modern,
            interaktif, dan menyenangkan.
          </p>

          <button>
            Mulai Belajar
          </button>

        </div>

      </div>

    </section>
  );
}