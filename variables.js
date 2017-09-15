const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  prodUrl: isProd ? 'https://slightlyoffbeat.github.io/old-fashioned' : '',
};
