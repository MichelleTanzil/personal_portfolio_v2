import React from "react"
import Title from "./Title"
import * as FontAwesome from "react-icons/fa"
import * as SiIcons from "react-icons/si"
import TimelineContainer from "./Timeline/TimelineContainer"
import Services from "./Services"

const About = ({ aboutMe }) => {
  const dataRetrieved = aboutMe[0].data
  const {
    details: { text: description },
    image: {
      fluid: { src: image_url },
    },
    image: { alt: image_alt },
  } = dataRetrieved
  const techStack = dataRetrieved.skills_stack.map(tech => {
    return {
      skill: tech.skill.text,
      icon: tech.icon.text,
    }
  })
  const interests = dataRetrieved.interests.map(info => {
    return {
      name: info.interest.text,
      icon: info.icon.text,
    }
  })
  return (
    <section className="section about" id="about">
      <Title title={`about me`} />
      <div className="section-center about-center">
        <img src={image_url} alt={image_alt} className="about-img" />
        <article className="about-text">
          <p>{description}</p>
          {/* Skills section */}
          <section>
            <Title title={`Skills`} />
            <div className="about-stack">
              {techStack.map((tech, index) => {
                // Dynamically create the icons
                const IconName =
                  tech.icon[0] === "F"
                    ? FontAwesome[tech.icon]
                    : tech.icon[0] === "S"
                    ? SiIcons[tech.icon]
                    : "div"
                return (
                  <div key={`Tech_${index}`}>
                    <p className="stacks">
                      {React.createElement(IconName, { className: "icons" })}{" "}
                      {tech.skill}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>
          {/* Interests section */}
          <section>
            <Title title={`Interests`} />
            <div className="about-stack">
              {interests.map((interest, index) => {
                // Dynamically create the icons
                const IconName =
                  interest.icon[0] === "F"
                    ? FontAwesome[interest.icon]
                    : SiIcons[interest.icon]
                return (
                  <div key={`Interest_${index}`}>
                    <p className="stacks">
                      {React.createElement(IconName, { className: "icons" })}{" "}
                      {interest.name}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>
        </article>
      </div>
      <Services />
      <TimelineContainer />
    </section>
  )
}

export default About
