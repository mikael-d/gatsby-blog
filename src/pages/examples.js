import React from 'react'
import Header from '../examples/Header'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const examples = ({data}) => {
    const {site:{
      info:{
        author
      }
    }}=data
    return (
        <Layout>
            <Header/>
    <h1>helllo from examples pages the name of the author is  {author}</h1>
        </Layout>
    )
}

export const data = graphql`
  query TheQuery {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`


export default examples
