import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dan - AI Engineer Portfolio',
  description: 'AI Engineer specializing in multi-agent systems and AI automation',
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

