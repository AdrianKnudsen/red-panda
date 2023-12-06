import { GameCard } from "../Components/GameCard/gameCard";
import styles from "./landing.module.css";

export function LandingPage() {
  return (
    <main>
      <div className={styles.background}>
        <h2 className={styles.h2}>FEATURED GAMES</h2>
        <div className={styles.gridContainer}>
          <GameCard displayCount={4} />
        </div>
      </div>
    </main>
  );
}
