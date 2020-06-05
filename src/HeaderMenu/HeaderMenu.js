import React from "react";
import styles from "./HeaderMenu.module.scss";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-ion/close";
import icon from "../images/logo.svg";
import MenuBar from "../MenuBar/MenuBar";

function HeaderMenu(props) {
  return (
    <div className={`${styles.menu} ${props.isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <button className={styles.btn} onClick={() => props.close()}>
          <Icon icon={closeIcon} />
        </button>
        <img src={icon} alt="icon" className={styles.icon} />
      </div>
      <MenuBar />
    </div>
  );
}

export default HeaderMenu;
