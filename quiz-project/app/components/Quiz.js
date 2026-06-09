"use client";

import { useState } from "react";
import styles from "./Quiz.module.css";
import Results from "./Results";
import Welcome from "./Welcome";

const questions = [
  {
    text: "It's Friday night. What are you doing?",
    answers: [
      { emoji: "🎉", text: "Out with everyone I know — the bigger the group, the better", personality: "social" },
      { emoji: "🎨", text: "Deep in a creative project I've been obsessing over", personality: "artisan" },
      { emoji: "🌶️", text: "Trying that intense new restaurant everyone's been talking about", personality: "bold" },
      { emoji: "🧁", text: "Home with snacks, candles, and my comfort show", personality: "sweet" },
    ],
  },
  {
    text: "Pick a Hogwarts house:",
    answers: [
      { emoji: "🦁", text: "Gryffindor — brave, bold, always first to jump in", personality: "bold" },
      { emoji: "🦅", text: "Ravenclaw — thoughtful, curious, always researching", personality: "artisan" },
      { emoji: "🦡", text: "Hufflepuff — loyal, warm, everyone's favorite", personality: "social" },
      { emoji: "🐍", text: "Slytherin — ambitious, refined, knows what they want", personality: "sweet" },
    ],
  },
  {
    text: "You have a free Sunday. What happens?",
    answers: [
      { emoji: "🧭", text: "Spontaneous road trip — no plan, just go", personality: "bold" },
      { emoji: "☕", text: "Slow morning at a specialty café, reading", personality: "artisan" },
      { emoji: "👯", text: "Brunch with the whole crew", personality: "social" },
      { emoji: "🛁", text: "Full self-care day — bath bomb, face mask, the works", personality: "sweet" },
    ],
  },
  {
    text: "What's your go-to Netflix move?",
    answers: [
      { emoji: "🏃", text: "Action thriller — edge of your seat the whole time", personality: "bold" },
      { emoji: "🎬", text: "Critically acclaimed indie film nobody else has seen", personality: "artisan" },
      { emoji: "😂", text: "Feel-good comedy to watch with friends", personality: "social" },
      { emoji: "💕", text: "Cozy romance — bonus points if it's set in autumn", personality: "sweet" },
    ],
  },
  {
    text: "You're at a coffee shop. A stranger sits next to you. You:",
    answers: [
      { emoji: "😄", text: "Strike up a conversation immediately", personality: "social" },
      { emoji: "🎧", text: "Put in headphones — you're in the zone", personality: "artisan" },
      { emoji: "🌍", text: "Challenge them to a spontaneous debate about something wild", personality: "bold" },
      { emoji: "🍰", text: "Offer to share your pastry — always room for kindness", personality: "sweet" },
    ],
  },
];

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({ bold: 0, sweet: 0, social: 0, artisan: 0 });
  const [selected, setSelected] = useState(null);

  if (!started) {
    return <Welcome onStart={() => setStarted(true)} />;
  }

  function handleRetake() {
    setStarted(false);
    setCurrent(0);
    setScores({ bold: 0, sweet: 0, social: 0, artisan: 0 });
    setSelected(null);
  }

  if (current === questions.length) {
    return <Results scores={scores} onRetake={handleRetake} />;
  }

  const question = questions[current];

  function handleAnswer(personality) {
    setSelected(personality);
    setTimeout(() => {
      setScores((prev) => ({ ...prev, [personality]: prev[personality] + 1 }));
      setCurrent((prev) => prev + 1);
      setSelected(null);
    }, 300);
  }

  return (
    <div className={styles.card}>
      <div className={styles.progress}>
        {questions.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i < current ? styles.dotDone : ""} ${i === current ? styles.dotActive : ""}`}
          />
        ))}
      </div>

      <div key={current} className={styles.slide}>
        <p className={styles.counter}>Question {current + 1} of {questions.length}</p>
        <h2 className={styles.question}>{question.text}</h2>

        <div className={styles.answers}>
          {question.answers.map((answer) => (
            <button
              key={answer.personality}
              className={`${styles.answer} ${selected === answer.personality ? styles.answerSelected : ""}`}
              onClick={() => handleAnswer(answer.personality)}
              disabled={selected !== null}
            >
              <span className={styles.emoji}>{answer.emoji}</span>
              <span>{answer.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
