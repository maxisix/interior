import { FC, PropsWithChildren } from 'react'
import { Playfair_Display } from '@next/font/google'
import clsx from 'clsx'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--playfairDisplay',
})

export const Font: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={clsx('font-serif', playfairDisplay.variable)}>
      {children}
    </div>
  )
}
