import React from "react"
import Layout from '../components/layout'
import {ExampleButton} from "../components/button"

//components

export default function Home() {
  return (
      <Layout>
        <h1>hello from gatsby</h1>
        <ExampleButton>click me</ExampleButton>
      </Layout>
  )
}
