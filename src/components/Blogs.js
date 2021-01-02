import React from "react"
import Title from "./Title"
import Blog from "./Blog"
export const Blogs = ({ blogs, title }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
    </section>
  )
}
export default Blogs
