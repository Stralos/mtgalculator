import { useState } from "react";
import styles from "./styles.module.css";

export function PlayerTracker() {
  const [value, setValue] = useState(40);

  const vibrate = () => navigator.vibrate(110);
  const increment = () => {
    vibrate();
    setValue((value) => value + 1);
  };

  const decrement = () => {
    vibrate();
    setValue((value) => Math.max(value - 1, 0));
  };

  return (
    <div className={styles.PlayerTracker}>
      <div className={styles.value}>
        <div className={styles.text}>{value}</div>
      </div>
      <div className={styles.cta}>
        <button onClick={decrement}></button>
        <button onClick={increment}></button>
      </div>
    </div>
  );
}
