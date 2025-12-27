import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Learn a language <br />
          the fun way—fast, <br />
          free, forever
        </h1>

        <p className={styles.desc}>
          Lokanesia membantu kamu belajar bahasa daerah Indonesia secara
          interaktif dan menyenangkan.
        </p>

        <button className={styles.button}>Get a Demo</button>
      </div>

      <div className={styles.right}>
        <img src="/hero.avif" alt="Hero illustration" />
      </div>
    </section>
  );
}
