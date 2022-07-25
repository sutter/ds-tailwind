import clsx from "clsx"

import styles from "./index.module.css"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  theme?: "primary" | "secondary" | "tertiary" | "tertiary-no-border"
  size?: "xs" | "md" | "lg"
  isDisabled?: boolean
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
}

const Button = ({
  theme = "primary",
  size = "md",
  label,
  isDisabled,
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) => {
  const buttonStyles = clsx(
    styles.core,
    theme === "primary" && styles.primary,
    theme === "secondary" && styles.secondary,
    theme === "tertiary" && styles.tertiary,
    theme === "tertiary-no-border" && styles["tertiary-no-border"],
    size === "xs" && styles.xs,
    size === "md" && styles.md,
    size === "lg" && styles.lg
  )
  return (
    <button className={buttonStyles} disabled={isDisabled} {...rest}>
      {iconLeft}
      <span className={styles.label}>{label}</span>
      {iconRight}
    </button>
  )
}

export default Button
