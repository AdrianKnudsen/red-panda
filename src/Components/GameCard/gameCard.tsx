// GameCard.tsx

import { useEffect, useState, useContext } from "react";
import styles from "./gameCard.module.css";
import { AppContext, SearchContext } from "../AppContext/AppContext";

interface Game {
  id: number;
  thumbnail: string;
  title: string;
  genre: string;
}

interface GameCardProps {
  displayCount: number;
  isSearchTerm: string;
}

const apiPath = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const headers = {
  "X-RapidAPI-Key": "eb2c866544mshd4207df09864d43p1e2895jsn912514e3fcb7",
  "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
};

async function getData(
  url: string,
  headers: Record<string, string>
): Promise<{ results: Game[] }> {
  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    console.log("API Response:", data);
    return data;
  } catch (error) {
    console.error("An error occurred during data fetching", error);
    throw error; // Rethrow the error
    return { results: [] };
  }
}

export function GameCard({ displayCount }: GameCardProps) {
  const appContext = useContext(AppContext);
  const searchContext = useContext(SearchContext);
  const [data, setData] = useState<Game[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiData: { results?: Game[] } = await getData(apiPath, headers);
        console.log("Api data:", apiData);

        if (apiData && Array.isArray(apiData)) {
          setData(apiData);
        } else {
          console.error("Results array is undefined or not an array");
          setData([]);
        }
      } catch (error) {
        console.error("An error occurred during data fetching:", error);
        setData([]); // Set empty array in case of error
      }
    }

    fetchData();
  }, []);

  if (!appContext || !searchContext) {
    return <p>Loading...</p>;
  }

  const { isSearchTerm } = searchContext;

  if (data === null) {
    return <p>Loading...</p>;
  }

  // Filter games based on the search term

  const gamesToDisplay = data.slice(0, displayCount);

  const filteredGames = gamesToDisplay.filter((game) =>
    game.title.toLowerCase().includes(isSearchTerm.toLowerCase())
  );

  return (
    <div className={styles.gameCard}>
      {filteredGames.map((element) => (
        <div key={element.id}>
          <div className={styles.cardContainer}>
            <img
              className={styles.cardImage}
              src={element.thumbnail}
              alt="card-image"
            />
            <h2 className={styles.cardName}>{element.title}</h2>
            <h3 className={styles.gameGenres}>{element.genre}</h3>
            <div>
              <p className={styles.cardPriceBuy}>$20.00</p>
              <button className={styles.cardButton}>Buy</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
