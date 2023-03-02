import Link from "next/link"
import { cva } from "class-variance-authority"
import { FC } from "react"
import { ButtonProps } from "./button.def"
import { twMerge } from "tailwind-merge"

export const buttonClasses = cva(
  "relative rounded-[10px] inline-flex items-center text-white",
  {
    variants: {
      variant: {
        primary: ["bg-red-500"],
        secondary: ["bg-blue-700"],
      },
      size: {
        small: "text-xs px-3 h-7",
        medium: "text-sm px-4 h-8",
        large: "text-md px-6 h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
)

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  size,
  ...props
}) => {
  const classes = twMerge(
    buttonClasses({
      variant,
      size,
      className: props.className,
    })
  )

  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}
