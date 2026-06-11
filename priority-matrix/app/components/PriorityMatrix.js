"use client";

import { useState } from "react";
import styles from "./PriorityMatrix.module.css";
import FeatureForm from "./FeatureForm";
import QuadrantChart from "./QuadrantChart";
import RankedList from "./RankedList";

let nextId = 1;

export default function PriorityMatrix() {
  const [features, setFeatures] = useState([]);

  function handleAdd(feature) {
    setFeatures((prev) => [...prev, { id: nextId++, ...feature }]);
  }

  function handleDelete(id) {
    setFeatures((prev) => prev.filter((f) => f.id !== id));
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Priority Matrix</h1>
        <p className={styles.subtitle}>
          Plot features by impact and effort to decide what to build next.
        </p>
      </header>

      <div className={styles.grid}>
        <div className={styles.column}>
          <FeatureForm onAdd={handleAdd} />
          <QuadrantChart features={features} />
        </div>
        <div className={styles.column}>
          <RankedList features={features} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
