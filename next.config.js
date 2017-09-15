const path = require('path');
const glob = require('glob');

const variables = require('./variables');

module.exports = {
  webpack: (config, { dev }) => { // eslint-disable-line no-unused-vars
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      },
    );
    return config;
  },

  exportPathMap: () => ({
    '/': { page: '/' },
    '/about': { page: '/about' },
  }),

  assetPrefix: variables.prodUrl,
};
