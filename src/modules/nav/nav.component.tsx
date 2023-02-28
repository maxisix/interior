import Link from 'next/link'

export const Nav = () => (
  <nav className="absolute right-12 top-12	z-20	 grid grid-flow-col gap-6 font-sans text-white">
    <Link className="hover:text-[#525A55]" href="/">
      Home
    </Link>
    <Link className="hover:text-[#525A55]" href="/keyframe">
      Keyframe
    </Link>
    <Link className="hover:text-[#525A55]" href="/dark-mode">
      Dark Mode
    </Link>
    <Link className="hover:text-[#525A55]" href="/design-system">
      Design System
    </Link>
    <Link className="hover:text-[#525A55]" href="/custom-class">
      Custom Class
    </Link>
    <Link className="hover:text-[#525A55]" href="/responsive">
      Responsive
    </Link>
  </nav>
)
