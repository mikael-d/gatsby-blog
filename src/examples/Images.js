import React from 'react'
import Layout from '../components/layout'
import {graphql,useStaticQuery} from "gatsby"
import img from '../images/dols.webp'
import Image from 'gatsby-image'

const getImages = graphql`
  {
    file(relativePath: { eq: "dols.webp" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "wave.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


const Images = () => {
    const data = useStaticQuery(getImages);
    console.log('data',data);
    return (
      <section className="images">
        <article className="single-image">
          <h3>basic image</h3>
          <img src={img} width="100%" alt="basic-image"/>
        </article>
        <article className="single-image">
          <h3>fixed image/blur</h3>
          <Image fixed={data.file.childImageSharp.fixed}/>
        </article>
        <article className="single-image">
          <h3>fluid image/svg</h3>
          <Image fluid={data.fluid.childImageSharp.fluid}/>
        </article>
      </section>
    )
}

export default Images
