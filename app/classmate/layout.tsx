import { Arimo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'
import './styles.css'

const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arimo',
})
const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={arimo.variable + libre_franklin.variable}>
        {children}
      </body>
    </html>
  )
}