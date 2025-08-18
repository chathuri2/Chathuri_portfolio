import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chathuri Nirosha - AI Engineer & Software Developer',
  description: 'Portfolio of Chathuri Nirosha - AI Engineer, Software Developer, and UI/UX Designer passionate about creating innovative solutions.',
  keywords: 'AI Engineer, Software Developer, Web Developer, Mobile Developer, UI/UX Designer, Machine Learning, React, Next.js',
  author: 'Chathuri Nirosha',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}