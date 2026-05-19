"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={`container ${styles.wrapper}`}>

        {/* LEFT */}

        <div className={styles.left}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h1>
              Belajar bahasa daerah
              jadi lebih seru.
            </h1>

            <p>
              Pelajari ungkapan lokal, pengucapan,
              dan percakapan sehari-hari dari berbagai
              daerah di Indonesia secara interaktif.
            </p>

            <div className={styles.actions}>

              <button className={styles.primary}>
                Mulai Belajar
              </button>

              <button className={styles.secondary}>
                Lihat Demo
              </button>

            </div>

          </motion.div>

        </div>

        {/* RIGHT */}

        <div className={styles.right}>

          <Image
            src="/hero-right.png"
            alt="Lokanesia Characters"
            width={1400}
            height={1400}
            className={styles.heroImage}
            priority
          />

        </div>

      </div>

    </section>
  );
}