import "../styles/globals.css"

export const parameters = {
  darkMode: {
    stylePreview: true,
    current: "light",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
