import { PlayerTracker } from "views/PlayerTracker/PlayerTracker";
import styles from "./styles.module.css";

export function LifeTrackerPage() {
  return (
    <div className={styles.LifeTrackerPage}>
      <div className={styles.player1}>
        <PlayerTracker />
      </div>
      <div className={styles.player2}>
        <PlayerTracker />
      </div>
      <div className={styles.player3}>
        <PlayerTracker />
      </div>
      <div className={styles.player4}>
        <PlayerTracker />
      </div>
    </div>
  );
}
