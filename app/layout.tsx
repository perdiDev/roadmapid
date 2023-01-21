import Footer from './layout/footer'
import './globals.css'
import Header from './layout/header'
import { Jaldi } from '@next/font/google'

const jaldi = Jaldi({
  weight: ["400", "700"],
  subsets: ['devanagari', "latin", "latin-ext"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jaldi.className}>
      <head />
      <body className='background'>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
