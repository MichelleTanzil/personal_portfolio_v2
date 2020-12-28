import React from "react"
import {
  FaEnvelope,
  FaLinkedin,
  FaTwitterSquare,
  FaGithub,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaEnvelope className="social-icon"></FaEnvelope>,
    url: "mailto:mtanzil01@gmail.com?subject=Reach%20out%20to%20Michelle",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/michelletanzil/",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/codes_michelle",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/MichelleTanzil",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
