import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          title
          description
          data
        }
      }
    }
  `)
  return(   
  
    <div>
        <h1>{data.site.siteMetadata.description}</h1>   
    </div>
  )
}

export default ComponentName
