import { Rethink_Sans } from 'next/font/google'
import { Inter as Fira_Mono } from 'next/font/google'
import './styles.css'
import { Inter as FontSans } from "next/font/google"

const rethink_sans = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rethink_sans',
})


const fira_mono = Fira_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira_mono',
})


const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
  })


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={rethink_sans.variable + fira_mono.variable}>
        {children}
      </body>
    </html>
  )
}
