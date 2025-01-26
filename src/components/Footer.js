import React from "react";
import styles from "../styles/layout.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()} Product Listing Page</p>
  </footer>
);

export default Footer;
