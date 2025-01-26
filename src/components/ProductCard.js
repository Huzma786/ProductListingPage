import React from "react";
import styles from "../styles/product.module.scss";

const ProductCard = ({ product }) => (
  <div className={styles.card}>
    <img src={product.image} alt={product.title} className={styles.image} />
    <h3 className={styles.title}>{product.title}</h3>
    <p className={styles.description}>{product.description}</p>
    <span className={styles.price}>${product.price}</span>
  </div>
);

export default ProductCard;
