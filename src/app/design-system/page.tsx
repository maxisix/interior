import { Button } from "@/components/button/button.component"
import { Heading } from "@/components/heading/heading.component"

export const metadata = {
  title: "Design System",
  description: "Great way to build a design system",
}

export default function DesignSystem() {
  return (
    <div className="container mx-auto">
      <div className="flex h-screen flex-col items-center justify-center">
        <Heading.h1 className="patate">Hello World</Heading.h1>
        <Heading.h2 className="text-cyan-800 dark:text-cyan-200">
          Hello World
        </Heading.h2>
        <Heading.h3 id="hello_world">Hello World</Heading.h3>
        <Heading.h4 className="text-cyan-800">Hello World</Heading.h4>
        <Heading.h5>Hello World</Heading.h5>
        <Heading.h6>Hello World</Heading.h6>
      </div>

      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <Button size={"small"}>Button</Button>
        <Button size={"medium"}>Button</Button>
        <Button size={"large"}>Button</Button>

        <Button href="/keyframe">Button</Button>
        <Button href="https://www.maximebeaudoin.com" size={"small"}>
          Button
        </Button>
      </div>
    </div>
  )
}
