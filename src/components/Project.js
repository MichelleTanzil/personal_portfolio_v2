import React from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import * as FontAwesome from "react-icons/fa"
import * as SiIcons from "react-icons/si"
const Project = project => {
  const {
    description: { text: descrip },
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
      <div className="project-info">
        <img src={image_url} className="project-img" alt={image_alt} />
        <div className="project-details">
          <h3>{titleText}</h3>
          <div className="project-stack">
            {techStack.map((tech, index) => {
              // Dynamically create the icons
              const IconName =
                tech.icon[0] === "F"
                  ? FontAwesome[tech.icon]
                  : SiIcons[tech.icon]
              return (
                <div key={`Project_${titleText}_tech_${index}`}>
                  <p className="tech-stack">
                    {React.createElement(IconName, { className: "icons" })}
                    {tech.techName}{" "}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="project-links">
            {githubLink && (
              <a href={githubLink}>
                <FaGithubSquare className="project-icon"></FaGithubSquare>
              </a>
            )}
            {deployedLink && (
              <a href={deployedLink}>
                <FaShareSquare className="project-icon"></FaShareSquare>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Project
