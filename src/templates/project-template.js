import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
const ProjectTemplate = () => {
  return <Layout>Project template</Layout>
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: prismicProjects(uid: { eq: $slug }) {
      data {
        status
      }
    }
  }
`

export default ProjectTemplate
