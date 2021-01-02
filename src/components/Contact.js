import React from "react"

const Contact = () => {
  return (
    <section className="contact">
      <div className="custom-shape-divider-top-1609609605">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
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
