import React, { useState } from "react";
import dataButtons from "../assets/buttons.js";
import { NavLink } from "react-router-dom";
import styles from "./MenuBar.module.scss";
import DropDown from "../DropDown/DropDown.js";

function MenuBar() {
  const [data, setData] = useState([...dataButtons]);
  const setActive = (elem) => {
    data.map((elem) => (elem.active = false));
    elem.active = true;
    setData([...data]);
  };
  const elemItems = data.map((elem) => {
    if (elem.dropdown.length > 0) {
      return (
        <DropDown elem={elem} key={elem.name} click={() => setActive(elem)} />
      );
    } else {
      return (
        <NavLink
          to={elem.url}
          exact
          key={elem.name}
          className={`${styles.btnNav} ${elem.active ? styles.active : ""}`}
          onClick={() => setActive(elem)}
        >
          <img src={elem.icon} alt="icon" className={styles.icon} />
          {elem.text}
        </NavLink>
      );
    }
  });

  return <div className={styles.btnBox}>{elemItems}</div>;
}

export default MenuBar;
