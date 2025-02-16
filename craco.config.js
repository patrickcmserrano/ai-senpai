module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.forEach((rule) => {
        if (rule.enforce === 'pre' && rule.use && rule.use.some((use) => use.loader === 'source-map-loader')) {
          rule.exclude = [
            /node_modules\/graphql-request\/dist\/createRequestBody\.js/,
            /node_modules\/graphql-request\/dist\/index\.js/,
            /node_modules\/graphql-request\/dist\/types\.js/
          ];
        }
      });
      return webpackConfig;
    },
  },
};
