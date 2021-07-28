import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import { ImArrowLeft } from "react-icons/im"

const Error = () => {
  return (
    <Layout isTemplatePage={true}>
      <SEO title="Error page" description="Error page" />
      <main className="error-page">
        <div className="error-container">
          <h1>oops it's a dead end</h1>
          <Link to="/" className="bk-btn">
            <ImArrowLeft /> Back Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
