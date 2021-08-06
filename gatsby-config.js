module.exports = {
  siteMetadata: {
    author: `Darlysson Alves`,
    description: `A personal portfolio website, proudly created by Darlysson Alves with React JS & Gatsby.`,
    title: `Darlysson Alves | Frontend Developer`,
    url: `https://alvesd.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/logo.png`,
        image: `src/images/social.png`,
        start_url: `/`,
      },
    },
  ],
}
