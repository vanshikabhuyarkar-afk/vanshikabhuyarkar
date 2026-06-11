"use client";

import styles from "./QuadrantChart.module.css";
import { getQuadrant, QUADRANTS } from "./quadrant";

const SIZE = 320;
const HALF = SIZE / 2;

export default function QuadrantChart({ features }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>Impact vs Effort</h2>

      <div className={styles.chartWrap}>
        <span className={styles.axisLabelY}>Impact</span>

        <svg
          className={styles.svg}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="img"
          aria-label="Impact versus effort quadrant chart"
        >
          {/* Quadrant backgrounds */}
          <rect x="0" y="0" width={HALF} height={HALF} fill={QUADRANTS.quickWins.color} fillOpacity="0.12" />
          <rect x={HALF} y="0" width={HALF} height={HALF} fill={QUADRANTS.bigBets.color} fillOpacity="0.12" />
          <rect x="0" y={HALF} width={HALF} height={HALF} fill={QUADRANTS.fillIns.color} fillOpacity="0.12" />
          <rect x={HALF} y={HALF} width={HALF} height={HALF} fill={QUADRANTS.timeSinks.color} fillOpacity="0.12" />

          {/* Divider lines */}
          <line x1={HALF} y1="0" x2={HALF} y2={SIZE} stroke="#3a3a52" strokeWidth="1" />
          <line x1="0" y1={HALF} x2={SIZE} y2={HALF} stroke="#3a3a52" strokeWidth="1" />

          {/* Quadrant labels */}
          <text x="12" y="20" className={styles.quadLabel} fill={QUADRANTS.quickWins.color}>Quick Wins</text>
          <text x={HALF + 12} y="20" className={styles.quadLabel} fill={QUADRANTS.bigBets.color}>Big Bets</text>
          <text x="12" y={SIZE - 10} className={styles.quadLabel} fill={QUADRANTS.fillIns.color}>Fill-Ins</text>
          <text x={HALF + 12} y={SIZE - 10} className={styles.quadLabel} fill={QUADRANTS.timeSinks.color}>Time Sinks</text>

          {/* Feature points */}
          {features.map((f) => {
            const x = (f.effort / 10) * SIZE;
            const y = SIZE - (f.impact / 10) * SIZE;
            const quadrant = getQuadrant(f.impact, f.effort);
            const flip = x > SIZE - 90;
            return (
              <g key={f.id}>
                <circle cx={x} cy={y} r="6" fill={quadrant.color} stroke="#0f0f1a" strokeWidth="2" />
                <text
                  x={flip ? x - 9 : x + 9}
                  y={y + 4}
                  textAnchor={flip ? "end" : "start"}
                  className={styles.pointLabel}
                >
                  {f.name}
                </text>
              </g>
            );
          })}
        </svg>

        <span className={styles.axisLabelX}>Effort</span>
      </div>

      {features.length === 0 && (
        <p className={styles.empty}>Add features to see them plotted here.</p>
      )}
    </div>
  );
}
