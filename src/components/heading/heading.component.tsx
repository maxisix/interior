import { createElement, type FC } from "react"
import { cva } from "class-variance-authority"
import { HeadingProps, HeadingTag } from "./heading.def"
import { twMerge } from "tailwind-merge"

export const headingClasses = cva("text-black dark:text-white", {
  variants: {
    as: {
      h1: ["text-5xl", "md:text-6xl", "font-bold", "leading-tight"],
      h2: ["text-4xl", "md:text-5xl", "font-bold", "leading-tight"],
      h3: ["text-3xl", "md:text-4xl", "font-bold", "leading-tight"],
      h4: ["text-2xl", "md:text-3xl", "font-bold", "leading-tight"],
      h5: ["text-xl", "md:text-2xl", "font-bold", "leading-tight"],
      h6: ["text-lg", "md:text-xl", "font-bold", "leading-tight"],
    },
  },
})

const makeHeading = (tag: HeadingTag): FC<HeadingProps> => {
  return function Heading({ as = tag, className, ...otherProps }) {
    return createElement(as, {
      ...otherProps,
      className: twMerge(headingClasses({ as, className })),
    })
  }
}

export const Heading = {
  h1: makeHeading("h1"),
  h2: makeHeading("h2"),
  h3: makeHeading("h3"),
  h4: makeHeading("h4"),
  h5: makeHeading("h5"),
  h6: makeHeading("h6"),
}
