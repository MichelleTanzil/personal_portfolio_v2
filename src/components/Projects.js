import React from "react"
import Title from "./Title"
import Project from "./Project"

const Projects = ({ projects, title }) => {
  return (
    <section className="section projects" id="work">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map(project => {
          return <Project key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
