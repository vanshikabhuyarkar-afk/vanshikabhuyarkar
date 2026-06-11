"use client";

import { useState } from "react";
import styles from "./FeatureForm.module.css";

export default function FeatureForm({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [impact, setImpact] = useState(5);
  const [effort, setEffort] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd({
      name: name.trim(),
      description: description.trim(),
      impact: Number(impact),
      effort: Number(effort),
    });

    setName("");
    setDescription("");
    setImpact(5);
    setEffort(5);
  }

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Add a Feature</h2>

      <label className={styles.label}>
        Feature name
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Dark mode toggle"
          required
        />
      </label>

      <label className={styles.label}>
        Description (optional)
        <input
          className={styles.input}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short context for this feature"
        />
      </label>

      <div className={styles.sliders}>
        <label className={styles.label}>
          Impact: <span className={styles.value}>{impact}</span>
          <input
            className={styles.range}
            type="range"
            min="1"
            max="10"
            value={impact}
            onChange={(e) => setImpact(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          Effort: <span className={styles.value}>{effort}</span>
          <input
            className={styles.range}
            type="range"
            min="1"
            max="10"
            value={effort}
            onChange={(e) => setEffort(e.target.value)}
          />
        </label>
      </div>

      <button className={styles.submit} type="submit">
        Add Feature
      </button>
    </form>
  );
}
