import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Titles from "./typewriter-title"

const heroQuery = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(heroQuery)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"> </div>
            <h1>i'm michelle</h1>
            <Titles />
            <Link to="/about" className="brk-btn">
              More About Me
            </Link>
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" alt="Michelle Tanzil" />
      </div>
    </header>
  )
}

export default Hero
