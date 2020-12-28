import React from "react"
import Image from "gatsby-image"
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
  } = project.data
  const techStack = tech_stack.map(tech => {
    return {
      techName: tech.technology.text,
      icon: tech.icon.text,
    }
  })

  return (
    <article className="project">
      {/* <Image fluid={image.childImageSharp.fluid} className="project-img" /> */}
      <div className="project-info">
        <h3>{titleText}</h3>
        <p className="project-desc">{descrip}</p>
        <div className="project-stack">
          {techStack.map((tech, index) => {
            // Dynamically create the icons
            const IconName =
              tech.icon[0] === "F" ? FontAwesome[tech.icon] : SiIcons[tech.icon]
            return (
              <div key={`Project_${titleText}_tech_${index}`}>
                <p>
                  {tech.techName}{" "}
                  {React.createElement(IconName, { className: "icons" })}
                </p>
              </div>
            )
          })}
        </div>
        <div className="project-links">
          <a href={githubLink}>
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          <a href={deployedLink}>
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
