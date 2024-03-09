module.exports = {
  siteMetadata: {
    title: 'Fundacja Idea Nowa',
    siteUrl: `https://ideanowa.org.pl`,
  },
  plugins: [
    `gatsby-plugin-react-next`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1920,
              quality: 90,
              linkImagesToOriginal: false,
            },
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "NowaIdea",
        short_name: "NowaIdea",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#038ebd",
        display: "standalone",
       
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "/src/img/logo.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    
    `gatsby-plugin-offline`,
    
  ],
}
