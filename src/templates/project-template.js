import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Title from "../components/Title"
import * as FontAwesome from "react-icons/fa"
import * as SiIcons from "react-icons/si"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import SEO from "../components/SEO"
import { ImArrowLeft } from "react-icons/im"

const ProjectTemplate = ({ data }) => {
  const {
    title: { text: titleText },
    image: {
      fluid: { src: image_url },
    },
    image: { alt: image_alt },
    completed_on,
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
    <Layout isTemplatePage={true}>
      <SEO
        title="Work"
        siteTitle={titleText}
        description={`${titleText}'s page`}
      />
      <section className="project-template section">
        <div className="section-center">
          <Link to="/" className="bk-btn">
            <ImArrowLeft /> Back Home
          </Link>
          <article className="project-content">
            <Title title={titleText} />
            <div className="project-template-details">
              <img
                src={image_url}
                className="project-template-img"
                alt={image_alt}
              />
              <div>
                <div>
                  <h3 className="project-template-title">description</h3>
                  <p className="project-template-info">{descriptionText}</p>
                </div>
                <h3 className="project-template-title">tech stack</h3>
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
                          {React.createElement(IconName, {
                            className: "icons",
                          })}
                          {tech.techName}{" "}
                        </p>
                      </div>
                    )
                  })}
                </div>
                <div>
                  <h3 className="project-template-title">more details</h3>
                  <div className="project-links">
                    {githubLink && (
                      <a
                        href={githubLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaGithubSquare className="project-icon"></FaGithubSquare>
                      </a>
                    )}
                    {deployedLink && (
                      <a
                        href={deployedLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaShareSquare className="project-icon"></FaShareSquare>
                      </a>
                    )}
                  </div>
                  {completed_on && (
                    <p className="project-template-info">
                      Completed on: {completed_on}
                    </p>
                  )}
                  <p className="project-template-info">{hashTags}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($uid: String) {
    project: prismicProjects(uid: { eq: $uid }) {
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
