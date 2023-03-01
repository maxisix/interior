import Link from "next/link"
import { cva, VariantProps } from "class-variance-authority"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import clsx from "clsx"

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode
}

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never
}

type ButtonProps = ButtonBaseProps & (ButtonAsAnchorProps | ButtonAsButtonProps)

const buttonClasses = cva(
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

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => <span className={clsx("highlight", className)}>{children}</span>

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className })

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
