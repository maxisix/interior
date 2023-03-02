import { VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "react"
import { buttonClasses } from "./button.component"

type ButtonBaseProps = VariantProps<typeof buttonClasses>

interface ButtonAsAnchorProps
  extends HTMLAttributes<HTMLElementTagNameMap["a"]> {
  href: string
}
interface ButtonAsButtonProps
  extends HTMLAttributes<HTMLElementTagNameMap["button"]> {
  href?: never
}

export type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps)
