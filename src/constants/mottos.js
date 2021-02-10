import React from "react"

const data = [
  {
    id: 1,
    quote: "make the impossible possible",
  },
  {
    id: 2,
    quote: "build your story",
  },
]

const Mottos = () => {
  return (
    <ul className="mottos">
      {data.map(motto => {
        return (
          <li key={motto.id} className="motto">
            <p>{motto.quote}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Mottos
