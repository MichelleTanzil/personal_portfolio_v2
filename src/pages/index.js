import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/hero/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import Blogs from "../components/Blogs"

export default ({ data }) => {
  // const [preLoading, setpreLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setpreLoading(false), 6000)
  }, [])

  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <>
      <Layout>
        <Hero />
        <SEO title="Home" description="This is the home page" />
        <Services />
        <Jobs />
        <Projects projects={projects} title="featured projects" showLink />
      </Layout>
    </>
  )
}
export const query = graphql`
  {
    allStrapiProjects(filter: { feature: { eq: true } }) {
      nodes {
        github
        id
        description
        url
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          desc
          id
        }
      }
    }
  }
`
