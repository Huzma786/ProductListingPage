import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import styles from "../styles/product.module.scss";
import axios from "axios";

export async function getServerSideProps() {
  // Mock API Integration
  const res = await axios.get("https://fakestoreapi.com/products");
  return {
    props: {
      products: res.data,
    },
  };
}

const HomePage = ({ products }) => (
  <>
    <Head>
      <title>Product Listing Page</title>
      <meta name="description" content="Browse our amazing products." />
    </Head>
    <Header />
    <main className={styles.container}>
      <h1>Our Products</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export default HomePage;
