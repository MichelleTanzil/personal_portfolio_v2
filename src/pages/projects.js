import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({ data }) => {
  const { nodes: projects } = data.allPrismicProjects
  return (
    <Layout>
      <SEO title="All Projects" description="All of my projects" />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export default ProjectsPage

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
        }
      }
    }
  }
`
