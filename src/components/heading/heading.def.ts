import { VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "react"
import { headingClasses } from "./heading.component"

export type HeadingTag = `h${1 | 2 | 3 | 4 | 5 | 6}`

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingClasses> {
  as?: HeadingTag
}
