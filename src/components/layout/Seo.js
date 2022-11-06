import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

export const seoQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ title, description, content }) => {
  const location = useLocation()
  const { site } = useStaticQuery(seoQuery)
  return (
    <Helmet
      htmlAttributes={{ lang: 'pl-PL' }}
      title={`${title} | ${site.siteMetadata.title}`}
      link={[
        {
          rel: `canonical`,
          href: `${location.href}`,
        },
        {
          rel: `apple-touch-icon`,
          sizes: `180x180`,
          href: `/favicon-32x32.png`,
        },
        {
          rel: `icon`,
          type: `image/png`,
          sizes: `32x32`,
          href: `/favicon-32x32.png`,
        },
        {
          rel: `icon`,
          type: `image/png`,
          sizes: `16x16`,
          href: `/favicon-16x16.png`,
        },
        {
          rel: `icon`,
          type: `image/png`,
          sizes: `512x512`,
          href: `/favicon-512x512.png`,
        },
        // {
        //   rel: `manifest`,
        //   href: `/site.webmanifest`,
        // },
        {
          rel: `mask-icon`,
          color: `#5bbad5`,
          href: `/safari-pinned-tab.svg`,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: `${description || site.siteMetadata.description}`,
        },
        {
          name: `keywords`,
          content: `Integracja sensoryczna Rzeszów i okolice`,
        },
        {
          name: `robots`,
          content: ``,
        },
        {
          name: `msapplication-TileColor`,
          content: `#da532c`,
        },
        {
          name: `theme-color`,
          content: `#5f3797`,
        },
        {
          property: `type`,
          content: content,
        },
        {
          httpEquiv: `Content-Security-Policy`,
          content: `default-src 'self'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self'; base-uri 'self';`,
        },
      ]}
    ></Helmet>
  )
}

export default SEO
