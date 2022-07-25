import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { RiFocus2Line } from "react-icons/ri"

import Button from "./index"

export default {
  title: "Example/Button",
  component: Button,
  args: {
    label: "Button",
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}

export const withTheme = () => (
  <div className="flex items-center gap-4">
    <Button label="Button" theme="primary" />
    <Button label="Button" theme="secondary" />
    <Button label="Button" theme="tertiary" />
    <Button label="Button" theme="tertiary-no-border" />
  </div>
)

export const isDisabled = () => (
  <div className="flex items-center gap-4">
    <Button label="Button" theme="primary" isDisabled />
    <Button label="Button" theme="secondary" isDisabled />
    <Button label="Button" theme="tertiary" isDisabled />
    <Button label="Button" theme="tertiary-no-border" isDisabled />
  </div>
)

export const withSize = () => (
  <div className="flex items-center gap-4">
    <Button label="Button" size="xs" />
    <Button label="Button" size="md" />
    <Button label="Button" size="lg" />
  </div>
)

export const withIcon = () => (
  <div className="grid gap-4">
    <div className="flex items-center gap-4">
      <Button label="Button" size="xs" iconLeft={<RiFocus2Line />} />
      <Button label="Button" size="md" iconLeft={<RiFocus2Line />} />
      <Button label="Button" size="lg" iconLeft={<RiFocus2Line />} />
    </div>
    <div className="flex items-center gap-4">
      <Button
        label="Button"
        size="xs"
        theme="secondary"
        iconRight={<RiFocus2Line />}
      />
      <Button
        label="Button"
        size="md"
        theme="secondary"
        iconRight={<RiFocus2Line />}
      />
      <Button
        label="Button"
        size="lg"
        theme="secondary"
        iconRight={<RiFocus2Line />}
      />
    </div>
  </div>
)
