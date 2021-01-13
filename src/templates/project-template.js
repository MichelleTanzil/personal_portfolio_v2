import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Title from "../components/Title"
const ProjectTemplate = ({ data }) => {
  const {
    title: { text: titleText },
  } = data.project.data
  return (
    <Layout>
      <section className="project-template">
        <div className="section-center">
          <article className="project-content">
            <Title title={titleText} />
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: prismicProjects(uid: { eq: $slug }) {
      data {
        completed_on(formatString: "MM/YYYY")
        description {
          text
        }
        github {
          url
        }
        hashtags {
          text
        }
        image {
          fluid {
            src
          }
        }
        narrative {
          text
        }
        status
        title {
          text
        }
        url {
          url
        }
        tech_stack {
          icon {
            text
          }
          technology {
            text
          }
        }
      }
    }
  }
`

export default ProjectTemplate
