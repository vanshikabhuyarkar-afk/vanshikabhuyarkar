export const QUADRANTS = {
  quickWins: { label: "Quick Wins", color: "#4ade80" },
  bigBets: { label: "Big Bets", color: "#a78bfa" },
  fillIns: { label: "Fill-Ins", color: "#60a5fa" },
  timeSinks: { label: "Time Sinks", color: "#f87171" },
};

const THRESHOLD = 5.5;

export function getQuadrant(impact, effort) {
  if (impact >= THRESHOLD && effort < THRESHOLD) return QUADRANTS.quickWins;
  if (impact >= THRESHOLD && effort >= THRESHOLD) return QUADRANTS.bigBets;
  if (impact < THRESHOLD && effort < THRESHOLD) return QUADRANTS.fillIns;
  return QUADRANTS.timeSinks;
}

export function getScore(impact, effort) {
  return impact - effort;
}
