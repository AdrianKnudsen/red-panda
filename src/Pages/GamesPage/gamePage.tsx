import styles from "../GamesPage/game.module.css";
import { GameCard } from "../../Components/GameCard/gameCard";

export function GamePage() {
  return (
    <main>
      <div className={styles.background}>
        <h2 className={styles.header}>GAMES</h2>
        <div className={styles.gridBox}>
          <GameCard displayCount={Infinity} />
        </div>
      </div>
    </main>
  );
}
