import React from "react"
import Typist from "react-typist"
import TypistLoop from "react-typist-loop"

const Titles = () => {
  const titles = [
    "Software Engineer",
    "Nerd",
    "Gamer",
    "Critter - Critical Role",
    "Foodie",
    "Web Developer",
    "Full Stack Developer",
    "Developer Support Engineer",
    "Open Source Contributor",
  ]

  return (
    <TypistLoop interval={750}>
      {titles.map((text, index) => (
        <Typist key={index} startDelay={500} className="typing-titles">
          <span>{text}</span>
          <Typist.Backspace count={text.length} delay={350} />
        </Typist>
      ))}
    </TypistLoop>
  )
}

export default Titles
