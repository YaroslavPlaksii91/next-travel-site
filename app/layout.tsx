import './globals.css'
import 'tailwindcss/tailwind.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel Company - Experience World Adventures with Us',
  description: 'Travel Company offers unforgettable journeys to the best tourist destinations. Join us to experience world adventures!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
