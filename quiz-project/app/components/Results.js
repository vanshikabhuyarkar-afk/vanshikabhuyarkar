"use client";

import Image from "next/image";
import styles from "./Results.module.css";

const personalities = {
  bold: {
    name: "Bold Adventurer",
    coffee: "Double Espresso",
    tagline: "You live for intensity",
    image: "/espresso.jpg",
    color: "#ff4d4d",
    emoji: "🌶️",
  },
  sweet: {
    name: "Sweet Enthusiast",
    coffee: "Caramel Latte",
    tagline: "Life's too short for bitter",
    image: "/caramel-latte.jpg",
    color: "#ffb347",
    emoji: "🧁",
  },
  social: {
    name: "Social Butterfly",
    coffee: "Cappuccino",
    tagline: "Coffee is better with company",
    image: "/cappuccino.jpg",
    color: "#ff6b9d",
    emoji: "🎉",
  },
  artisan: {
    name: "Artisan Snob",
    coffee: "Pour-Over, Single Origin",
    tagline: "You know what you like",
    image: "/pour-over.jpg",
    color: "#7c5cbf",
    emoji: "☕",
  },
};

export default function Results({ scores, onRetake }) {
  const total = Object.values(scores).reduce((a, b) => a + b, 0);

  const ranked = Object.entries(scores)
    .map(([key, score]) => ({
      key,
      score,
      pct: Math.round((score / total) * 100),
      ...personalities[key],
    }))
    .sort((a, b) => b.score - a.score);

  const top = ranked[0];

  return (
    <div className={styles.card}>
      <p className={styles.label}>Your coffee personality is</p>
      <h1 className={styles.topName}>
        {top.emoji} {top.name}
      </h1>
      <p className={styles.tagline}>"{top.tagline}"</p>

      <div className={styles.imageWrap}>
        <Image
          src={top.image}
          alt={top.coffee}
          width={480}
          height={200}
          className={styles.image}
        />
        <div className={styles.coffeeLabel}>{top.coffee}</div>
      </div>

      <div className={styles.breakdown}>
        <p className={styles.breakdownTitle}>Your full breakdown</p>
        {ranked.map((p, i) => (
          <div key={p.key} className={styles.row}>
            <div className={styles.rowMeta}>
              <span className={styles.rowEmoji}>{p.emoji}</span>
              <span className={`${styles.rowName} ${i === 0 ? styles.rowNameTop : ""}`}>
                {p.name}
              </span>
              <span className={styles.rowPct}>{p.pct}%</span>
            </div>
            <div className={styles.barTrack}>
              <div
                className={styles.barFill}
                style={{ width: `${p.pct}%`, background: p.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <button className={styles.retake} onClick={onRetake}>
        Take the quiz again ↩
      </button>
    </div>
  );
}
