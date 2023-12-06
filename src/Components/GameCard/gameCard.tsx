import styles from "./gameCard.module.css"


export function GameCard(){


  return(
    <div className={styles.cardContainer}>
      
      <div className={styles.cardContainerInner}>
        <img className={styles.cardImage} src="./card.image.png" alt="card-image" />
        <h2 className={styles.cardName}>Red-panda: Warfare</h2>
        <h3 className={styles.cardAgeRating}>ALL</h3>
        <div className={styles.cardPriceBuy}>
          <p className={styles.cardPrice}>$20.00</p>
          <button className={styles.cardButton}>Buy</button>
        </div>
      </div>
   
    </div>
  )
}