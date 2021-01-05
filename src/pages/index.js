import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/hero/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import Blogs from "../components/Blogs"
// import PreLoad from "../components/PreLoad"
import Contact from "../components/Contact"

export default ({ data }) => {
  // const [preLoading, setpreLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setpreLoading(false), 1000)
  // }, [])

  const {
    allPrismicProjects: { nodes: projects },
    blog: { nodes: blogs },
  } = data

  return (
    <>
      <Layout>
        <Hero />
        <SEO title="Home" description="Home page" />
        <Services />
        <Projects projects={projects} title="featured projects" />
        <Blogs blogs={blogs} title="blog" />
        <Contact />
      </Layout>
      {/* {preLoading === false ? (

      ) : (
        <PreLoad />
      )} */}
    </>
  )
}
export const query = graphql`
  {
    allPrismicProjects {
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
            fluid(maxWidth: 1000) {
              src
            }
            alt
          }
          narrative {
            text
          }
          hashtags {
            text
          }
        }
      }
    }
    blog: allPrismicBlog {
      nodes {
        data {
          image {
            fluid(maxWidth: 1000) {
              src
            }
            alt
          }
          title {
            text
          }
          url {
            url
          }
        }
        id
      }
    }
  }
`
