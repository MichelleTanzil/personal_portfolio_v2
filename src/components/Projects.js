import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects" id="projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map(project => {
          return <Project key={project.id} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="brk-btn btn-center">
          all projects
        </Link>
      )}
    </section>
  )
}

export default Projects
