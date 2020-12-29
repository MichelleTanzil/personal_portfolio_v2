import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/hero/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import Blogs from "../components/Blogs"
import PreLoad from "../components/PreLoad"
import TimelineContainer from "../components/Timeline/TimelineContainer"

export default ({ data }) => {
  const [preLoading, setpreLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setpreLoading(false), 1000)
  }, [])

  const {
    allPrismicProjects: { nodes: projects },
  } = data

  return (
    <>
      {preLoading === false ? (
        <Layout>
          <Hero />
          <SEO title="Home" description="This is the home page" />
          <Services />
          <TimelineContainer />
          <Projects projects={projects} title="featured projects" showLink />
          <Blogs />
        </Layout>
      ) : (
        <PreLoad />
      )}
    </>
  )
}
export const query = graphql`
  {
    allPrismicProjects(filter: { data: { isfeatured: { eq: true } } }) {
      nodes {
        id
        data {
          description {
            text
          }
          github {
            url
          }
          tech_stack {
            technology {
              text
            }
            icon {
              text
            }
          }
          title {
            text
          }
          url {
            url
          }
          isfeatured
          image {
            fluid(maxWidth: 500) {
              src
            }
            alt
          }
        }
      }
    }
  }
`
