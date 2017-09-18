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
  ],
  pathPrefix: '/playground',
};
