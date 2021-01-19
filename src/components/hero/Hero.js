import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Titles from "./typewriter-title"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"> </div>
            <h1>i'm michelle</h1>
            <Titles />
            {/* <Link to="/about" className="brk-btn">
              More About Me
            </Link> */}
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
