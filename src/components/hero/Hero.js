import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../../constants/socialLinks"
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
        <div class="custom-shape-divider-bottom-1607810345">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Hero
