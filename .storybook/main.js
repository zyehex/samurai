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
