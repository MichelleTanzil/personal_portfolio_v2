import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Title from "../components/Title"
import * as FontAwesome from "react-icons/fa"
import * as SiIcons from "react-icons/si"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import SEO from "../components/SEO"

const ProjectTemplate = ({ data }) => {
  const {
    title: { text: titleText },
    image: {
      fluid: { src: image_url },
    },
    image: { alt: image_alt },
    completed_on,
    status,
    description: { text: descriptionText },
    github: { url: githubLink },
    url: { url: deployedLink },
    hashtags: { text: hashTags },
    tech_stack,
  } = data.project.data

  const techStack = tech_stack.map(tech => {
    return {
      techName: tech.technology.text,
      icon: tech.icon.text,
    }
  })
  return (
    <Layout>
      <SEO title={titleText} description={titleText} />
      <section className="project-template">
        <div className="section-center">
          <article className="project-content">
            <Title title={titleText} />
            <div>
              <img
                src={image_url}
                className="project-template-img"
                alt={image_alt}
              />
              <p className="project-text">{descriptionText}</p>
            </div>
            <div>
              <div className="project-stack">
                {techStack.map((tech, index) => {
                  // Dynamically create the icons
                  const IconName =
                    tech.icon[0] === "F"
                      ? FontAwesome[tech.icon]
                      : tech.icon[0] === "S"
                      ? SiIcons[tech.icon]
                      : "div"
                  return (
                    <div key={`Project_${titleText}_tech_${index}`}>
                      <p className="stacks">
                        {React.createElement(IconName, { className: "icons" })}
                        {tech.techName}{" "}
                      </p>
                    </div>
                  )
                })}
              </div>
              <div className="project-links">
                {githubLink && (
                  <a href={githubLink} target="_blank">
                    <FaGithubSquare className="project-icon"></FaGithubSquare>
                  </a>
                )}
                {deployedLink && (
                  <a href={deployedLink} target="_blank">
                    <FaShareSquare className="project-icon"></FaShareSquare>
                  </a>
                )}
              </div>
              <p>Hashtags: {hashTags}</p>
              <p>Status: {status}</p>
              {completed_on && <p>Completed on: {completed_on}</p>}
            </div>
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
