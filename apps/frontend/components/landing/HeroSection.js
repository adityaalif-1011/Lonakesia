import Style from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Belajar Bahasa Daerah <br />
          dengan cara menyenangkan—cepat, <br />
          gratis, selamanya
        </h1>

        <p>
          Lokanesia membantu kamu belajar bahasa daerah Indonesia
          dengan materi singkat, interaktif, dan menyenangkan.
        </p>

        <button className="hero-btn">Get a Demo</button>
      </div>

      <div className="hero-right">
        <img src="/hero.avif" alt="Learning illustration" />
      </div>
    </section>
  );
}
