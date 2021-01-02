import React from "react"

const Contact = () => {
  return (
    <section className="section contact">
      <article className="section-center contact-form">
        <h3>get in touch</h3>
        <form action="https://formspree.io/f/xleongpz" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control"
            />
            <textarea
              name="message"
              type="message"
              id=""
              cols="30"
              rows="5"
              placeholder="message"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            Send Message
          </button>
        </form>
      </article>
    </section>
  )
}

export default Contact
