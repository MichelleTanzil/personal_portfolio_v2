import React from "react"
import { Link } from "gatsby"
const Blog = blog => {
  const {
    image: {
      fluid: { src: image_url },
    },
    image: { alt: image_alt },
    title: { text: titleText },
  } = blog.data
  return (
    <article className="blog">
      <div className="project-info">
        <img src={image_url} className="project-img" alt={image_alt} />
        <div className="project-details">
          <h3>{titleText}</h3>
        </div>
      </div>
    </article>
  )
}

export default Blog
