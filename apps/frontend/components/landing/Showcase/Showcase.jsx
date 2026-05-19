"use client";

import styles from "./Showcase.module.css";
import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <section className={styles.showcase}>

      <div className="container">

        {/* SECTION 1 */}

        <div className={styles.row}>

          {/* LEFT */}

          <motion.div
            whileHover={{ y: -4 }}
            className={styles.visual}
          >

            <div className={styles.browser}>

              <div className={styles.browserTop}>

                <div className={styles.dots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>Lokanesia AI</p>

              </div>

              <div className={styles.chatArea}>

                <div className={styles.chatOne}>
                  Sugeng enjing 👋
                </div>

                <div className={styles.chatTwo}>
                  Kulo bade sinau basa Jawa
                </div>

                <div className={styles.chatThree}>
                  Wah keren! Yuk mulai belajar ✨
                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <div className={styles.content}>

            <h2>
              Belajar bahasa daerah
              lewat AI percakapan
            </h2>

            <p>
              Latihan ngobrol secara interaktif
              menggunakan bahasa daerah dengan
              pengalaman belajar yang lebih natural
              dan menyenangkan.
            </p>

            <button>
              Mulai Belajar
            </button>

          </div>

        </div>

        {/* SECTION 2 */}

        <div className={`${styles.row} ${styles.reverse}`}>

          {/* LEFT */}

          <div className={styles.content}>

            <h2>
              Belajar melalui
              cerita interaktif
            </h2>

            <p>
              Pelajari kosakata dan ungkapan lokal
              melalui cerita rakyat, dialog,
              dan pengalaman belajar yang imersif.
            </p>

            <button>
              Jelajahi Cerita
            </button>

          </div>

          {/* RIGHT */}

          <motion.div
            whileHover={{ y: -4 }}
            className={styles.visualYellow}
          >

            <div className={styles.storyCard}>

              <div className={styles.storyHeader}>
                Cerita Rakyat Jawa
              </div>

              <div className={styles.storyBox}></div>

              <div className={styles.storyLine}></div>
              <div className={styles.storyLineSmall}></div>

              <div className={styles.lessonProgress}>

                <span>Progress</span>

                <strong>72%</strong>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}