import { GameCard } from "../Components/GameCard/gameCard";
import styles from "./landing.module.css";

export function LandingPage() {
  const isSearchTerm = "";
  return (
    <main>
      <div className={styles.background}>
        <h2 className={styles.header}>FEATURED GAMES</h2>
        <div className={styles.gridBox}>
          <GameCard displayCount={4} isSearchTerm={isSearchTerm} />
        </div>
      </div>
    </main>
  );
}
