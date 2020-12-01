import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/products.module.css"



const blog = () => {
    return (
        <Layout>
            <Link to="/">Home Page </Link>
            <h1>this is our blog page</h1>
            <p> i'm the first paragraph on my fake blog</p>
        </Layout>
    )
}

export default blog
