import React, { useState } from "react";
import styles from "../MenuBar/MenuBar.module.scss";
import iconDown from "../images/down.svg";
import { NavLink } from "react-router-dom";
import AnimateHeight from "react-animate-height";

function DropDown(props) {
  const [heightElem, setHeightElem] = useState(0);
  const { elem } = props;

  const open = () => {
    setHeightElem(heightElem === 0 ? "auto" : 0);
    props.click();
  };

  return (
    <>
      <div
        key={elem.name}
        className={`${styles.btnNavDrop} ${elem.active ? styles.active : ""}`}
        onClick={() => open()}
      >
        <div className={styles.box}>
          <img src={elem.icon} alt="icon" className={styles.icon} />
          {elem.text}
        </div>
        <img src={iconDown} alt="iconDown" className={styles.iconDown} />
      </div>
      <AnimateHeight duration={300} height={heightElem}>
        {elem.dropdown.map((elem) => (
          <NavLink
            to={elem.url}
            exact
            key={elem.name}
            className={styles.btnNav}
          >
            <img src={elem.icon} alt="icon" className={styles.icon} />
            {elem.text}
          </NavLink>
        ))}
      </AnimateHeight>
    </>
  );
}

export default DropDown;
