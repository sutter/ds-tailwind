import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Spinner from "./index"

export default {
  title: "Example/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {}

export const customCSS = Template.bind({})
customCSS.args = {
  className: "text-[red] !w-8 !h-8",
}
