import '~/styles/index.css'

// import { promises as fs } from 'fs'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'

// import type { Locale } from '~/i18n/i18n'

const font = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'WoodLand',
  description: 'WoodLand'
}

interface RootLayoutProps {
  children: ReactNode
  // params: { lang: Locale }
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  // const dictionary = await fs.readFile(
  //   process.cwd() + `/src/i18n/dictionaries/${params.lang}.json`,
  //   'utf8'
  // )

  return (
    <html lang="en" className={font.className}>
      <body className="scroll-bar">
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
