import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        keywords
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, siteTitle, description }) => {
  const { site } = useStaticQuery(query)
  const {
    author,
    siteDesc,
    image,
    keywords,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "end" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creater" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta name="og:title" content={siteTitle} />
      <meta name="og:image" content={`${siteUrl}${image}`} />
      <meta name="og:description" content={siteDesc} />
      <meta name="og:url" content={siteUrl} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </Helmet>
  )
}

export default SEO
