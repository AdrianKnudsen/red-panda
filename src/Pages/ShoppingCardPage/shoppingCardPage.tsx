import styles from "./shoppingCardPage.module.css"

export function ShoppingCardPage() {
  return (
  
    <div className={styles.shoppingCardPage}>

      <div className={styles.shoppingCardContainer}>
        <div className={styles.shoppingCard}>
          <img className={styles.shoppingCardImage} src="/images/gameCardImage.png" alt="" />
          <div  className={styles.shoppingCardInfo}>
            <p className={styles.shoppingCardName}>Red-panda: Red Cyber</p>
            <p className={styles.shoppingCardOS}>Windows</p>
            <p className={styles.shoppingCardPrice}>$59.99</p>
          </div>
        </div>
        
      </div>
       
      <div className={styles.shoppingCardBasketContainer}>

        <div className={styles.shoppingCardBasketItem}>
          <p className={styles.shoppingCardName}>Red-panda: Red Cyber</p>
          <p className={styles.shoppingCardPrice}>$59.99</p>
          <button className={styles.shoppingCardDeleteButton}>X</button>
        </div>

        <div className={styles.shoppingCardTotalAndButton}>
          <p className={styles.shoppingCardTotal}>Total:</p>
          <button className={styles.shoppingCardPurchaseButton}>Purchase</button>
        </div>

      </div>

    </div>
  )
}