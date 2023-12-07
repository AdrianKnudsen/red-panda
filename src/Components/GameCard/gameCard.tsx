import styles from "./gameCard.module.css";
import { useEffect, useState } from "react";
const apiPath =
  "https://free-to-play-games-database.p.rapidapi.com/api/";
const headers = {
  "X-RapidAPI-Key": "eb2c866544mshd4207df09864d43p1e2895jsn912514e3fcb7",
  "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
};

interface Game {
  id: number;
  thumbnail: string;
  title: string;
  genre: string;
}

interface GameCardProps {
  displayCount: number;
}

async function getData(
  url: string,
  customHeaders: Record<string, string>
): Promise<{ results: Game[] }> {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...customHeaders,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("API Response:", data);
    return data;
  } catch (error) {
    console.error("An error occurred during data fetching:", error);
    return { results: [] };
  }
}

export function GameCard({ displayCount }: GameCardProps) {
  const [data, setData] = useState<Game[] | null>(null); // Initialize as null

  useEffect(() => {
    async function fetchData() {
      try {
        const apiData: { results: Game[] } = await getData(apiPath, headers);
        console.log("Api data:", apiData);
        setData(apiData);
      } catch (error) {
        console.error("An error occurred during data fetching:", error);
        setData([]); // Set empty array in case of error
      }
    }

    fetchData();
  }, []);

  // Check if data is still loading or empty
  if (data === null) {
    return <p>Loading...</p>;
  }

  const gamesToDisplay = data.slice(0, displayCount);

  return (
    <div>
      {gamesToDisplay.map((element) => (
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
