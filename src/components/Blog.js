import React from "react"
const Blog = blog => {
  const {
    image: {
      fluid: { src: image_url },
    },
    image: { alt: image_alt },
    title: { text: titleText },
    url: { url },
  } = blog.data
  return (
    <article className="blog">
      <a href={url} target="_blank">
        <div className="container-info">
          <img src={image_url} className="blog-img" alt={image_alt} />
          <div className="project-details">
            <h3>{titleText}</h3>
          </div>
        </div>
      </a>
    </article>
  )
}

export default Blog
