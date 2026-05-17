"use client";

import styles from "./Explore.module.css";

const languages = [
  {
    language: "Jawa",
    text: "Sugeng Rawuh",
    color: "#FFD166",
  },
  {
    language: "Sunda",
    text: "Wilujeng Sumping",
    color: "#80ED99",
  },
  {
    language: "Batak",
    text: "Horas!",
    color: "#4EA8DE",
  },
  {
    language: "Bali",
    text: "Rahajeng Semeng",
    color: "#FFCAD4",
  },
  {
    language: "Bugis",
    text: "Salama'ki",
    color: "#F4A261",
  },
  {
    language: "Betawi",
    text: "Apa Kabar?",
    color: "#BDB2FF",
  },
];

export default function Explore() {
  return (
    <section className={styles.explore}>

      <div className="container">

        <div className={styles.heading}>
          <h2>
            Pilih bahasa daerah
            yang ingin kamu pelajari
          </h2>
        </div>
      </div>

      <div className={styles.marquee}>

        <div className={styles.track}>

          {[...languages, ...languages].map((item, index) => (
            <div
              key={index}
              className={styles.card}
              style={{
                background: item.color,
              }}
            >

              <div className={styles.avatar}></div>

              <div>

                <h3>{item.language}</h3>

                <p>{item.text}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}