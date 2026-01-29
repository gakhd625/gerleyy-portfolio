import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gerlie - Software Engineer Portfolio',
  description: 'Cybersecurity and Software Engineer focused on building secure, scalable systems and protecting applications from modern threats.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

