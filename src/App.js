import React, { useState } from "react";
import styles from "./App.module.scss";
import logo from "./images/logo.svg";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify/icons-heroicons-outline/menu";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.menu}>
      <HeaderMenu isOpen={isOpen} close={() => setIsOpen(false)} />
      <div className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
          <Icon icon={menuIcon} className={styles.icon} />
        </button>
      </div>
    </div>
  );
}

export default App;
