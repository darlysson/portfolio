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
          image
        }
      }
    }
  `)

  const { description, title, url, image } = data.site.siteMetadata

  return (
    <Helmet title={`${title}`}>
      <html lang="en" amp="true" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <link rel="shortcut icon" href={image} />
      <link rel="icon" type="image/png" href={image} />
      <link rel="apple-touch-icon" href={image} />
    </Helmet>
  )
}
