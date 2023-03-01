import { AnalyticsWrapper } from "@/modules/analytics/analytics.component"
import { Font } from "@/modules/font/font.component"
import { Nav } from "@/modules/nav/nav.component"
import "./globals.css"

export const metadata = {
  title: "Interior design",
  description: "For the love of interior design and Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black dark:text-white">
        <Font>
          <Nav />
          {children}
        </Font>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
