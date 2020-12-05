import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
const getData = graphql `
query FirstQuery {
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
const Header = () => {
  console.log('getData',getData);
  const {
    site:{
      info :{
        person: {
          age,
          name, 
        },
        author,
      },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      <h1>this is our heading</h1>
  <h1> title : {name}</h1>
  <h1> author : {author}</h1>
    </div>
  )
}

export default Header
