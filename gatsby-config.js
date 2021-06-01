module.exports = {
  siteMetadata: {
    author: `Darlysson Alves`,
    description: `This is a personal portfolio website, proudly created by Darlysson Alves with Gatsby & React JS.`,
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
        icon: `src/images/think.png`,
        start_url: `/`,
      },
    },
  ],
}
