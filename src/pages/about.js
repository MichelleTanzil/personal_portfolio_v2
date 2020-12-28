import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import SEO from "../components/SEO"
import * as FontAwesome from "react-icons/fa"
import * as SiIcons from "react-icons/si"

const About = ({ data }) => {
  //Data from Prismic
  const dataRetrieved = data.aboutMe.nodes[0].data
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
    <Layout>
      <SEO title="About Me" description="about Michelle Tanzil" />
      <section className="about-page">
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
                      : SiIcons[tech.icon]
                  return (
                    <div key={`Tech_${index}`}>
                      <p>
                        {tech.skill}{" "}
                        {React.createElement(IconName, { className: "icons" })}
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
                      <p>
                        {interest.name}{" "}
                        {React.createElement(IconName, { className: "icons" })}
                      </p>
                    </div>
                  )
                })}
              </div>
            </section>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    aboutMe: allPrismicAbout {
      nodes {
        data {
          details {
            text
          }
          interests {
            icon {
              text
            }
            interest {
              text
            }
          }
          skills_stack {
            icon {
              text
            }
            skill {
              text
            }
          }
          title {
            text
          }
          image {
            fluid(maxWidth: 1000) {
              ...GatsbyPrismicImageFluid
            }
            alt
          }
        }
      }
    }
  }
`
