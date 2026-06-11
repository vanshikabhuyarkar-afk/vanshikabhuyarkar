"use client";

import styles from "./RankedList.module.css";
import { getQuadrant, getScore } from "./quadrant";

export default function RankedList({ features, onDelete }) {
  const ranked = [...features].sort(
    (a, b) => getScore(b.impact, b.effort) - getScore(a.impact, a.effort)
  );

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>Ranked Features</h2>

      {ranked.length === 0 ? (
        <p className={styles.empty}>No features yet — add one to get started.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Feature</th>
              <th>Impact</th>
              <th>Effort</th>
              <th>Score</th>
              <th>Quadrant</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((f, i) => {
              const quadrant = getQuadrant(f.impact, f.effort);
              return (
                <tr key={f.id}>
                  <td>{i + 1}</td>
                  <td>
                    <div className={styles.name}>{f.name}</div>
                    {f.description && (
                      <div className={styles.description}>{f.description}</div>
                    )}
                  </td>
                  <td>{f.impact}</td>
                  <td>{f.effort}</td>
                  <td>{getScore(f.impact, f.effort)}</td>
                  <td>
                    <span
                      className={styles.badge}
                      style={{ background: `${quadrant.color}26`, color: quadrant.color }}
                    >
                      {quadrant.label}
                    </span>
                  </td>
                  <td>
                    <button
                      className={styles.delete}
                      onClick={() => onDelete(f.id)}
                      aria-label={`Delete ${f.name}`}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
