"use client";

import styles from "./Impact.module.css";
import { motion } from "framer-motion";

export default function Impact() {
  return (
    <section className={styles.impact}>

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2>
            Bahasa daerah bukan
            sekadar warisan.
          </h2>

          <p>
            Lokanesia membantu generasi muda
            mengenal, mempelajari, dan menjaga
            bahasa daerah Indonesia agar tetap hidup.
          </p>

        </motion.div>

        <div className={styles.stats}>

          <div className={styles.card}>
            <strong>718+</strong>
            <span>Bahasa Daerah</span>
          </div>

          <div className={styles.card}>
            <strong>38</strong>
            <span>Provinsi Indonesia</span>
          </div>

          <div className={styles.card}>
            <strong>1000+</strong>
            <span>Ungkapan Lokal</span>
          </div>

          <div className={styles.card}>
            <strong>∞</strong>
            <span>Budaya untuk Dilestarikan</span>
          </div>

        </div>

      </div>

    </section>
  );
}