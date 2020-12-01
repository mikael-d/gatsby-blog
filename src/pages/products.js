import React from 'react'
import Layout from '../components/layout';
import styles from "../components/products.module.css"

const products = () => {
    return (
      <Layout>
        <div>
          <h1 className={styles.page}>This is our products page</h1>
          <p className={styles.text}>voici ma page de produit</p>
        </div>
      </Layout>
    )
}

export default products
