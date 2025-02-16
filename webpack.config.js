module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules\/graphql-request\/dist\/createRequestBody\.js/,
          /node_modules\/graphql-request\/dist\/index\.js/,
          /node_modules\/graphql-request\/dist\/types\.js/
        ],
      },
    ],
  },
  ignoreWarnings: [
    {
      module: /graphql-request\/dist\/createRequestBody\.js/,
    },
    {
      module: /graphql-request\/dist\/index\.js/,
    },
    {
      module: /graphql-request\/dist\/types\.js/,
    },
  ],
};
