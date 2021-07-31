import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import errorImg from "../assets/error-img.svg"

const Error = () => {
  return (
    <Layout isTemplatePage={true}>
      <SEO title="Error page" description="Error page" />
      <main className="error-page">
        <div className="section section-center error-container">
          <img src={errorImg} alt={"Error page"} className="error-img" />
          <div className="error-info">
            <h2>oops it's a dead end</h2>
            <div>
              <Link to="/" className="error-link">
                visit homepage
              </Link>
              <div className="error-underline"></div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Error
