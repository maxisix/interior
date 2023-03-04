export const metadata = {
  title: "Custom Theme",
  description:
    "Custom theme are a great way to style your website with different colors, fonts, and more.",
}

export default function CustomClass() {
  return (
    <div className="container mx-auto grid h-screen items-center justify-center">
      <h1 className="text-7xl font-bold">Custom Theme</h1>

      <div className="flex flex-col items-center">
        <div className="bg-red h-16 w-16 rounded-full bg-grey-120" />
      </div>
    </div>
  )
}
