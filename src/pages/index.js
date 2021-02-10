import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/hero/Hero"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import Blogs from "../components/Blogs"
// import PreLoad from "../components/PreLoad"
import Contact from "../components/Contact"
import About from "../components/About"

export default ({ data }) => {
  // const [preLoading, setpreLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setpreLoading(false), 1000)
  // }, [])

  const {
    site: {
      siteMetadata: { siteTitle },
    },
    allPrismicProjects: { nodes: projects },
    blog: { nodes: blogs },
    aboutMe: { nodes: aboutMe },
  } = data

  return (
    <>
      <Layout>
        <Hero />
        <SEO title="Home" siteTitle={siteTitle} description="Home page" />
        <About aboutMe={aboutMe} />
        <Projects projects={projects} title="work" />
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
    site {
      siteMetadata {
        siteTitle: title
      }
    }
    allPrismicProjects {
      nodes {
        id
        uid
        data {
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
    aboutMe: allPrismicAbout {
      nodes {
        data {
          details {
            text
          }
          interests {
            icon {
              text
            }
            interest {
              text
            }
          }
          skills_stack {
            icon {
              text
            }
            skill {
              text
            }
          }
          title {
            text
          }
          image {
            fluid(maxWidth: 1000) {
              src
            }
            alt
          }
        }
      }
    }
  }
`
