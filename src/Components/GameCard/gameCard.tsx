import styles from "./gameCard.module.css";
import { useEffect, useState } from "react";
const apiPath =
  "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc";
const headers = {
  "X-RapidAPI-Key": "eb2c866544mshd4207df09864d43p1e2895jsn912514e3fcb7",
  "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
};

interface Game {
  id: number;
  thumbnail: string;
  title: string;
  genre: string;
  // Add other properties as needed
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

export function GameCard() {
  const [data, setData] = useState<Game[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiData: { results: Game[] } = await getData(apiPath, headers);
        console.log("Apidata:", apiData);
        setData(apiData);
      } catch (error) {
        console.error("An error occurred during data fetching:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        data.map((element) => (
          <div key={element.id}>
            <div className={styles.cardContainer}>
              <img
                className={styles.cardImage}
                src={element.thumbnail}
                alt="card-image"
              />
              <h2 className={styles.cardName}>{element.title}</h2>
              <h3 className={styles.gameSystem}>{element.genre}</h3>
              <div>
                <p className={styles.cardPriceBuy}>$20.00</p>
                <button className={styles.cardButton}>Buy</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
