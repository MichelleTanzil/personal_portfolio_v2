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
        <div className="blog-title">
          <img src={image_url} className="blog-img" alt={image_alt} />
          <h3 className="blog-details">{titleText}</h3>
        </div>
      </a>
    </article>
  )
}

export default Blog
