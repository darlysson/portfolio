import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import image from "../../images/seo-image.png"

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
      <html lang="en" amp="true" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="title" content={title} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  )
}
