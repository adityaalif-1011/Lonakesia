"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";

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
              Learn Indonesian regional languages in a fun and modern way.
            </h1>

            <p>
              Master local expressions, pronunciation,
and everyday conversations from various
regions across Indonesia through interactive learning.
            </p>

            <div className={styles.actions}>
              <button className={styles.primary}>
                Explore Now
              </button>

              <button className={styles.secondary}>
                Watch Demo
              </button>
            </div>

          </motion.div>

        </div>

        {/* RIGHT */}

        <div className={styles.right}>

          {/* SHAPES */}

          <div className={styles.shapeOrange}></div>
          <div className={styles.shapeYellow}></div>
          <div className={styles.shapeBlue}></div>

          {/* CHARACTER 1 */}

          <motion.div
            className={styles.cardOne}
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >

            <div className={styles.character}></div>

            <div className={styles.speechOrange}>
              Sugeng Rawuh
            </div>

          </motion.div>

          {/* CHARACTER 2 */}

          <motion.div
            className={styles.cardTwo}
            animate={{ y: [8, -8, 8] }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          >

            <div className={styles.characterTwo}></div>

            <div className={styles.speechPink}>
              Rahajeng Semeng
            </div>

          </motion.div>

          {/* CHARACTER 3 */}

          <motion.div
            className={styles.cardThree}
            animate={{ y: [-6, 6, -6] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >

            <div className={styles.characterThree}></div>

            <div className={styles.speechBlue}>
              Horas!
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}