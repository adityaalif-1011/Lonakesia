"use client";

import styles from "./Explore.module.css";
import { motion } from "framer-motion";

const languages = [
  "Jawa",
  "Sunda",
  "Batak",
  "Bali",
  "Bugis",
  "Minang",
  "Banjar",
  "Betawi",
  "Dayak",
  "Madura",
];

export default function Explore() {
  return (
    <section className={styles.explore}>

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <div className={styles.badge}>
            ✦ Regional Language Learning
          </div>

          <h2>
            Learn Indonesian regional languages in a fun and interactive way.
          </h2>

          <p>
            Explore local expressions, pronunciation,
            and everyday conversations from various
            regions across Indonesia.
          </p>

        </motion.div>

        <div className={styles.languages}>

          {languages.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              whileHover={{
                y: -6,
              }}
            >
              <div className={styles.icon}></div>

              <span>{item}</span>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}