import '~/styles/index.css'

// import { promises as fs } from 'fs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import { Header } from '~/modules/header'

// import type { Locale } from '~/i18n/i18n'

const font = Inter({
  weight: ['400', '600'],
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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
