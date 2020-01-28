module.exports = {
  stories: [
    '../src/Intro.stories.mdx',
    '../src/components/**/*.stories.(js|jsx|mdx)'
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      },
    },
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ]
};
