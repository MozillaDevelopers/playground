const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Mozilla Playground',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-35433268-86',
      },
    },
  ],
  pathPrefix: '/playground',
};
