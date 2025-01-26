import React from "react";
import styles from "../styles/layout.module.scss";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>Logo</div>
    <nav>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>
    </nav>
  </header>
);

export default Header;
