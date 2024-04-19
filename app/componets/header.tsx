"use client";
import Link from "next/link";
import { navigationList } from "./navlist";
import { useState, useEffect } from "react";

const Header = () => {
  //CSSHamNavcheckboxControlLogic
  //let checkBool = false;
  const [isChecked, setIsChecked] = useState(false);
  function handleInputChange() {
    setIsChecked(prevState => !prevState);
  };
  /*prevStateにより以前の状態を取得しそれを!を付けて反転させることで以下の文を使わなくても時間経過で戻す必要がなくなった。
  if (isChecked == false) {
    setTimeout(()=>{setIsChecked()},1000);
    checkBool = true;
  }*/

  let navList = navigationList();
  return (
    <header className={"header"}>
      <div className={"header_nav"}>
        <h1 className={"header_logo"}>
          <img src="logo2.jpg" alt="logo画像"></img>
        </h1>
        <input type="checkbox" id="menu-btn-check" checked={isChecked} onChange={handleInputChange} />
        <label htmlFor="menu-btn-check" className={"menu-btn"}>
          <span></span>
        </label>
        <div className={"menu-content"}>
          <div>
            <nav>
              <ul onClick={handleInputChange}>
                {navList}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
