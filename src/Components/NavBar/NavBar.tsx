import { useState } from "react";
import style from "./NavBar.module.css";

export function NavBar() {
  const [isHomeMenuOpen, setHomeMenuOpen] = useState(false);
  const [isGenresMenuOpen, setGenresMenuOpen] = useState(false);

  const handleHomeMenuToggle = () => {
    setHomeMenuOpen(!isHomeMenuOpen);
  };

  const handleGenresMenuToggle = () => {
    setGenresMenuOpen(!isGenresMenuOpen);
  };

  return (
    <>
      {/* CONTAINER FOR ENTIRE NAVBAR BOTH SMALL AND LARGE SCREEN ↓ */}
      <nav className={style.navContainer}>
        {/* ------DIVIDER----------------------------- */}

        {/* Start of code for dropdown menus for smaller screens */}
        {/* HOME dropdown menu */}
        <div className={style.dropDown} id={style.homeDropdown}>
          <label htmlFor="homeTouch">
            <span onClick={handleHomeMenuToggle}>Home</span>
          </label>
          <input
            type="checkbox"
            id="homeTouch"
            checked={isHomeMenuOpen}
            readOnly
          />
          <ul
            className={
              isHomeMenuOpen ? `${style.slide} ${style.slideOpen}` : style.slide
            }
          >
            {/* LINKS for Home drop down menu */}
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>

        {/* GENRES dropdown menu */}
        <div className={style.dropDown} id={style.genresDropdown}>
          <label htmlFor="genresTouch">
            <span onClick={handleGenresMenuToggle}>Genres</span>
          </label>
          <input
            type="checkbox"
            id="genresTouch"
            checked={isGenresMenuOpen}
            readOnly
          />
          <ul
            className={
              isGenresMenuOpen
                ? `${style.slide} ${style.slideOpen}`
                : style.slide
            }
          >
            {/* Items for Genres drop down menu */}
            <li>
              <a href="#">Indie</a>
            </li>
            <li>
              <a href="#">Adventure</a>
            </li>
            <li>
              <a href="#">MMO</a>
            </li>
            <li>
              <a href="#">Casual</a>
            </li>
            <li>
              <a href="#">Strategy</a>
            </li>
            <li>
              <a href="#">Simulator</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
            <li>
              <a href="#">Action</a>
            </li>
          </ul>
        </div>
        {/* END OF CODE FOR DROPDOWNS */}
        {/* ------DIVIDER----------------------------- */}

        {/* START OF STANDARD SCREEN NAVBAR */}
        {/* List for Links/Items to be placed left */}

        <ul className={style.navItems}>
          <li>
            <a href="./LandingPage/" className={style.aLinks}>
              Home
            </a>
          </li>
          <li>
            <a href="./GamesPage/" className={style.aLinks}>
              Game store
            </a>
          </li>
          <li>
            <a href="./NewsPage/" className={style.aLinks}>
              News
            </a>
          </li>
        </ul>

        {/* End of left side items */}

        <div className={style.searchContainer}>
          <input
            type="search"
            className={style.searchBar}
            id="searchBar"
            placeholder="Search..."
          />
          <button type="submit" className={style.searchButton}>
            <svg
              className={style.searchIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.5596 11.5296C26.5596 17.5505 21.6784 22.4317 15.6575 22.4317C13.0471 22.4355 10.5227 21.4989 8.54641 19.7934L7.56813 20.7717L7.4533 21.7892L2.44995 26.7925L0.394531 24.7371L5.42913 19.7025L6.66834 19.6153L7.50999 18.7737C5.73221 16.7799 4.75153 14.2008 4.75538 11.5296C4.75538 5.50869 9.63663 0.627441 15.6575 0.627441C21.6784 0.627441 26.5596 5.50869 26.5596 11.5296ZM25.106 11.5296C25.106 16.7481 20.876 20.9781 15.6575 20.9781C10.439 20.9781 6.209 16.7481 6.209 11.5296C6.209 6.31108 10.439 2.08106 15.6575 2.08106C20.876 2.08106 25.106 6.31108 25.106 11.5296Z"
                fill="#FB7B4A"
              />
            </svg>
          </button>
        </div>
        <div className={style.navbarIcons}>
          <button className={style.Icon}>
            <svg
              className={style.Icon}
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="47"
              viewBox="0 0 49 47"
              fill="none"
            >
              <path
                d="M9.37125 47L13.3525 29.6224L0 17.9342L17.64 16.3882L24.5 0L31.36 16.3882L49 17.9342L35.6475 29.6224L39.6287 47L24.5 37.7855L9.37125 47Z"
                fill="#C6C6C6"
              />
            </svg>
          </button>
          <button className={style.Icon}>
            <svg
              className={style.Icon}
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="47"
              viewBox="0 0 49 47"
              fill="none"
            >
              <path
                d="M42.875 37.9133V34.4667H14.0875L15.925 31.02L44.1 28.2L49 9.4H11.3313L9.1875 0H0V3.13333H6.7375L13.1688 29.4533L9.1875 37.6V42.3C9.1875 44.8067 11.3313 47 13.7812 47C16.2313 47 18.375 44.8067 18.375 42.3C18.375 39.7933 16.2313 37.6 13.7812 37.6H36.75V42.3C36.75 44.8067 38.8937 47 41.3438 47C43.7938 47 45.9375 44.8067 45.9375 42.3C45.9375 40.1067 44.7125 38.54 42.875 37.9133Z"
                fill="#C6C6C6"
              />
            </svg>
          </button>
          <button className={style.Icon}>
            <svg
              className={style.Icon}
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="47"
              viewBox="0 0 49 47"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.592 17.0909C15.592 19.3573 16.5306 21.5308 18.2014 23.1334C19.8722 24.736 22.1382 25.6363 24.5011 25.6363C26.8639 25.6363 29.13 24.736 30.8007 23.1334C32.4715 21.5308 33.4102 19.3573 33.4102 17.0909C33.4102 14.8245 32.4715 12.6509 30.8007 11.0483C29.13 9.44573 26.8639 8.54541 24.5011 8.54541C22.1382 8.54541 19.8722 9.44573 18.2014 11.0483C16.5306 12.6509 15.592 14.8245 15.592 17.0909ZM20.0465 17.0909C20.0465 18.2241 20.5158 19.3108 21.3512 20.1121C22.1866 20.9134 23.3196 21.3636 24.5011 21.3636C25.6825 21.3636 26.8155 20.9134 27.6509 20.1121C28.4863 19.3108 28.9556 18.2241 28.9556 17.0909C28.9556 15.9577 28.4863 14.8709 27.6509 14.0696C26.8155 13.2683 25.6825 12.8181 24.5011 12.8181C23.3196 12.8181 22.1866 13.2683 21.3512 14.0696C20.5158 14.8709 20.0465 15.9577 20.0465 17.0909Z"
                fill="#C6C6C6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.5 0C38.0307 0 49 10.5216 49 23.5C49 36.4784 38.0307 47 24.5 47C10.9693 47 0 36.4784 0 23.5C0 10.5216 10.9693 0 24.5 0ZM44.5455 23.5C44.5455 27.965 42.9574 32.0754 40.2958 35.3397C38.4266 32.9852 36.0152 31.0771 33.25 29.7645C30.4848 28.4518 27.4406 27.7702 24.3552 27.7727C21.3098 27.77 18.3039 28.434 15.5666 29.7142C12.8292 30.9944 10.4326 32.8571 8.55941 35.1603C6.62959 32.7325 5.33023 29.8989 4.76883 26.8938C4.20742 23.8887 4.40013 20.7986 5.33099 17.8792C6.26185 14.9597 7.9041 12.2949 10.1219 10.1051C12.3396 7.91528 15.0692 6.26352 18.0846 5.28645C21.1 4.30938 24.3147 4.0351 27.4626 4.48631C30.6105 4.93751 33.6011 6.10122 36.187 7.88116C38.7729 9.6611 40.8798 12.0061 42.3333 14.7221C43.7867 17.4381 44.5451 20.4471 44.5455 23.5ZM24.5 42.7273C29.1017 42.7339 33.5644 41.2155 37.1331 38.4289C35.6967 36.4565 33.7847 34.8461 31.56 33.7346C29.3353 32.6232 26.8636 32.0437 24.3552 32.0455C21.8781 32.0436 19.4363 32.6085 17.2326 33.6935C15.0288 34.7785 13.1267 36.3521 11.6843 38.2836C15.2807 41.1607 19.817 42.7336 24.5 42.7273Z"
                fill="#C6C6C6"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
