"use client";

import styles from "./Welcome.module.css";

export default function Welcome({ onStart }) {
  return (
    <div className={styles.card}>
      <div className={styles.coffeeIcon}>☕</div>
      <p className={styles.brand}>Basecamp Coffee</p>
      <h1 className={styles.title}>What's Your Coffee Personality?</h1>
      <p className={styles.subtitle}>
        5 quick questions. Find your perfect match.
      </p>

      <div className={styles.previews}>
        <span>🌶️ Bold Adventurer</span>
        <span>🧁 Sweet Enthusiast</span>
        <span>🎉 Social Butterfly</span>
        <span>☕ Artisan Snob</span>
      </div>

      <button className={styles.start} onClick={onStart}>
        Find my coffee →
      </button>
    </div>
  );
}
