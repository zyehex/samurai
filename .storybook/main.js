module.exports = {
  stories: ['../src/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-storysource'
  ],

  webpackFinal: config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:6]'
            }
          }
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            plugins: [require('autoprefixer')]
          }
        },
        'sass-loader'
      ]
    });

    config.module.rules.push({
      test: /\.tsx?$/,
      use: ['awesome-typescript-loader', 'react-docgen-typescript-loader']
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
};
