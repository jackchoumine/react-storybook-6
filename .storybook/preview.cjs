export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // FIXME 排序不生效
  options: {
    storySort: (a, b) => {
      return 1 //a.title === b.title ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })
    },
  },
}
