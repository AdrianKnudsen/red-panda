// AsideMenu.tsx
//import React, { useState } from "react";
import style from "./Aside.module.css";

export function Aside() {
  return (
    <>
      <aside className={style.aside}>
        <ul className={style.ulForAside}>
          <h3 className={style.categoryHeading}>Categories</h3>
          <li className={style.listItem} id={style.indie}>
            <a href="#" className={style.a}>
              Indie
            </a>
          </li>
          <li className={style.listItem} id={style.adventure}>
            <a href="#" className={style.a}>
              Adventure
            </a>
          </li>
          <li className={style.listItem} id={style.mmo}>
            <a href="#" className={style.a}>
              MMO
            </a>
          </li>
          <li className={style.listItem} id={style.casual}>
            <a href="#" className={style.a}>
              Casual
            </a>
          </li>
          <li className={style.listItem} id={style.strategy}>
            <a href="#" className={style.a}>
              Strategy
            </a>
          </li>
          <li className={style.listItem} id={style.simulator}>
            <a href="#" className={style.a}>
              Simulator
            </a>
          </li>
          <li className={style.listItem} id={style.sports}>
            <a href="#" className={style.a}>
              Sports
            </a>
          </li>
          <li className={style.listItem} id={style.action}>
            <a href="#" className={style.a}>
              Action
            </a>
          </li>
          <div>
            <h3>Price</h3>
            <div className={style.priceBox}></div>
            <div className={style.priceBox}></div>
            <button>Apply filter</button>
          </div>
        </ul>
      </aside>
    </>
  );
}
