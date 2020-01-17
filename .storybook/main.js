module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader')
        },
        {
          loader: require.resolve('react-docgen-typescript-loader')
        }
      ]
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
};
