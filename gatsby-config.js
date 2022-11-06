require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: '/magsensor',
  siteMetadata: {
    title:
      'Magsensor Babica - Rzeszów i okolice - Integracja sensoryczna na co dzień',
    description: 'Integracja sensoryczna',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-background-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `tracedSVG`,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f8f4f4`,
        theme_color: `#f8f4f4`,
        display: `standalone`,
        icons: [
          {
            src: `/static/favicon.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/static/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/static/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#274379`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
  ],
}
