import '~/styles/index.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import { Header } from '~/modules/header'

const font = Inter({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Leefslylist',
  description: 'Leefslylist'
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => (
  <html lang="en" className={font.className}>
    <body className="scroll-bar text-dark">
      <Header />
      <main>{children}</main>
    </body>
  </html>
)

export default RootLayout
