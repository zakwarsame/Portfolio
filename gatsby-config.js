module.exports = {
  siteMetadata: {
    title: `Zakaria | Web Developer`,
    description: `I’m Zakaria, a self-taught Front-end developer.`,
    author: `Zakaria`,
    siteUrl: 'https://zakwarsame.netlify.com',
    social: {
      twitter: 'zak_py',
      instagram: 'alchemy.py',
      linkedin: 'zakariawarsame',
      youtube: '',
      facebook: '',
      github: 'zakwarsame',
      email: 'zakaria.warsamee@gmail.com'
    },
    // name of the image for social website share, should be in static folder
    imageShare: `share.jpg`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-141189217-1D',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false
      }
    },
    
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      // https://www.gatsbyjs.org/packages/gatsby-remark-images
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 700,
        linkImagesToOriginal: true,
        quality: 90,
        tracedSVG: '#64ffda',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`200`, `400`, `400i`, `600`, `600i`, `700`]
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zakaria | Web Developer`,
        short_name: `Zakaria`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#127EB1`,
        display: `minimal-ui`
      }
    },
    `gatsby-plugin-offline`
  ]
};
