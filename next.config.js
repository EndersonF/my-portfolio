const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  images: {
    domains: ['images.prismic.io']
  }
});
