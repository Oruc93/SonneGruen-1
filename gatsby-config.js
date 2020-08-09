module.exports = {
  pathPrefix: "/SonneGruen",
  siteMetadata: {
    title: `Sonne und Grün`,
    description: `Homepage for Sonne und Grün UG`,
    author: `Benjamin Schlotter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sonne und Grün`,
        short_name: `Sonne und Grün`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e6fffa`,
        display: `minimal-ui`,
        icon: `static/favicon.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'services'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    'gatsby-plugin-offline'
  ]
};
