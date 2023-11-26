import './globals.css'
import type { Metadata } from 'next'
import { Inter, Bai_Jamjuree, Josefin_Sans, Alata } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
})
const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-baiJamjuree',
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-josefin',
})

const alata = Alata({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alata',
})

export const metadata: Metadata = {
  title: 'TailwindCSS Projects',
  description: 'TailwindCSS Projects for Practice and Reference',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${baiJamjuree.variable} ${josefin.variable} ${alata.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
