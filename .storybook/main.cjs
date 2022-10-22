module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    // storyStoreV7: true,
  },
  //FIXME more info
  // https://github.com/storybookjs/storybook/issues/1291#issuecomment-1147754699
  viteFinal: (config, { configType }) => {
    // console.log(config)
    // some configs
    if (configType === 'PRODUCTION') {
      config.base = './'
    }
    return config
  },
}
