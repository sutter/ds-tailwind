import "../styles/globals.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <div className="bg-grey-1000-main dark:bg-grey-50-main p-4 min-h-screen">
      <Story />
    </div>
  ),
]
