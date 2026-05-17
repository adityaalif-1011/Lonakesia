"use client";

import styles from "./Feature.module.css";
import { motion } from "framer-motion";

export default function Feature() {
  return (
    <section className={styles.feature}>

      <div className="container">

        <div className={styles.heading}>

          <h2>
            Belajar bahasa daerah
            jadi lebih seru dan interaktif
          </h2>

          <p>
            Lokanesia menghadirkan pengalaman belajar
            yang modern, ringan, dan menyenangkan
            untuk generasi digital Indonesia.
          </p>

        </div>

        <div className={styles.grid}>

          {/* CARD 1 */}

          <motion.div
            whileHover={{ y: -6 }}
            className={`${styles.card} ${styles.yellow}`}
          >

            <div>

              <h3>
                AI Percakapan Interaktif
              </h3>

              <p>
                Latihan ngobrol menggunakan
                bahasa daerah secara natural
                dan real-time.
              </p>

            </div>

            <div className={styles.chatBox}>

              <div className={styles.chatBubbleOne}>
                Sugeng enjing 👋
              </div>

              <div className={styles.chatBubbleTwo}>
                Kulo sae!
              </div>

            </div>

          </motion.div>

          {/* CARD 2 */}

          <motion.div
            whileHover={{ y: -6 }}
            className={`${styles.card} ${styles.green}`}
          >

            <div>

              <h3>
                Progress Belajar Harian
              </h3>

              <p>
                Pantau streak, level,
                dan perkembangan belajar
                setiap hari.
              </p>

            </div>

            <div className={styles.progressCard}>

              <div className={styles.progressTop}>
                <span>Progress Mingguan</span>
                <strong>78%</strong>
              </div>

              <div className={styles.progressBar}>
                <div className={styles.progressFill}></div>
              </div>

              <div className={styles.stats}>

                <div>
                  <strong>12</strong>
                  <span>Streak</span>
                </div>

                <div>
                  <strong>4</strong>
                  <span>Level</span>
                </div>

              </div>

            </div>

          </motion.div>

          {/* CARD 3 */}

          <motion.div
            whileHover={{ y: -6 }}
            className={`${styles.card} ${styles.purple}`}
          >

            <div>

              <h3>
                Cerita Rakyat Interaktif
              </h3>

              <p>
                Pelajari bahasa daerah
                melalui cerita dan budaya
                lokal Indonesia.
              </p>

            </div>

            <div className={styles.storyBox}>

              <div className={styles.storyCard}></div>

              <div className={styles.storyLine}></div>
              <div className={styles.storyLineSmall}></div>

            </div>

          </motion.div>

          {/* CARD 4 */}

          <motion.div
            whileHover={{ y: -6 }}
            className={`${styles.card} ${styles.blue}`}
          >

            <div>

              <h3>
                Pelafalan Suara
              </h3>

              <p>
                Tingkatkan pengucapan
                dengan analisis suara
                berbasis AI.
              </p>

            </div>

            <div className={styles.voiceBox}>

              <div className={styles.wave}></div>

              <div className={styles.voiceButton}>
                🎤 Mulai Bicara
              </div>

            </div>

          </motion.div>

          {/* CARD 5 */}

          <motion.div
            whileHover={{ y: -6 }}
            className={`${styles.cardWide} ${styles.orange}`}
          >

            <div>

              <h3>
                Gamifikasi Belajar
              </h3>

              <p>
                Belajar terasa lebih menyenangkan
                dengan XP, tantangan harian,
                dan sistem level.
              </p>

            </div>

            <div className={styles.gameRow}>

              <div className={styles.gameBadge}>
                🔥 12 Hari
              </div>

              <div className={styles.gameBadge}>
                ⭐ 240 XP
              </div>

              <div className={styles.gameBadge}>
                🏆 Level 4
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}