import { RiCheckboxBlankCircleFill, RiLinkM } from "react-icons/ri"

export type IconName = "link"
export type IconProps = { name?: IconName; className?: string }

const Icon = ({ name, ...rest }: IconProps) => {
  const attributs = { "aria-hidden": true, focusable: false }
  switch (name) {
    case "link":
      return <RiLinkM {...attributs} {...rest} />
    default:
      return <RiCheckboxBlankCircleFill {...attributs} {...rest} />
  }
}

export default Icon
