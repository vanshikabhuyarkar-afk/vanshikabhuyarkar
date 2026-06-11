# Priority Matrix — Requirements

## Overview
A feature prioritization tool for product managers. Users add features with
impact and effort scores, and the tool plots them on a 2x2 quadrant chart
plus a ranked list, helping decide what to build next.

---

## Scoring Framework
**Impact vs Effort (2x2)**
- Each feature gets an **Impact** score (1–10) and an **Effort** score (1–10)
- Quadrants:
  - High Impact / Low Effort → **Quick Wins** (do first)
  - High Impact / High Effort → **Big Bets** (plan carefully)
  - Low Impact / Low Effort → **Fill-Ins** (do if time allows)
  - Low Impact / High Effort → **Time Sinks** (avoid/deprioritize)

---

## Input Method
- Form-based entry, one feature at a time
- Fields: Feature name, Description (optional), Impact (1–10 slider), Effort (1–10 slider)
- Features are stored in component state (no backend/database for v1)
- Ability to delete a feature from the list

---

## Output / Results View
**Both ranked list and visual quadrant chart**

1. **Quadrant Chart**
   - X-axis: Effort (low → high)
   - Y-axis: Impact (low → high)
   - Each feature plotted as a point/bubble, labeled with its name
   - Quadrant backgrounds shaded/labeled (Quick Wins, Big Bets, Fill-Ins, Time Sinks)

2. **Ranked List**
   - Table sorted by priority score (Impact − Effort, or Impact/Effort ratio — highest first)
   - Columns: Rank, Feature Name, Impact, Effort, Score, Quadrant label

---

## Visual Style
**Dark Mode Dashboard**
- Dark background (e.g., #0f0f1a / #1a1a2e)
- Vibrant accent colors for quadrants (e.g., green = quick wins, purple = big bets, blue = fill-ins, red = time sinks)
- Card-based layout with subtle borders/shadows
- Clean sans-serif font (Inter or similar)

---

## Tech Stack
- Framework: Next.js
- Language: JavaScript
- Charting: simple custom SVG/CSS-based scatter plot (no heavy chart library needed for v1)
- State: React useState (client-side only, no persistence for v1)

---

## Tool Name
**Priority Matrix**
