import React from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import * as FontAwesome from "react-icons/fa"
import * as SiIcons from "react-icons/si"
import { Link } from "gatsby"
const Project = project => {
  const { uid } = project
  const {
    narrative: { text: narrative },
    hashtags: { text: hashTags },
    github: { url: githubLink },
    tech_stack,
    title: { text: titleText },
    url: { url: deployedLink },
    image: {
      fluid: { src: image_url },
    },
    image: { alt: image_alt },
  } = project.data
  const techStack = tech_stack.map(tech => {
    return {
      techName: tech.technology.text,
      icon: tech.icon.text,
    }
  })
  return (
    <article className="project">
      <Link to={`/projects/${uid}`}>
        <div className="container-info">
          <img src={image_url} className="project-img" alt={image_alt} />
          <div className="project-details">
            <h3>{titleText}</h3>
            <p className="project-text">{narrative}</p>
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
            <p>{hashTags}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Project
