import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo() {
  const data = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          author
          description
          title
          url
        }
      }
    }
  `)

  const { description, title, url } = data.site.siteMetadata

  return (
    <Helmet title={`${title}`}>
      <html lang="en" amp />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta name="image" content={image} /> */}
      {/* <meta property="og:image" content={image} /> */}
    </Helmet>
  )
}
