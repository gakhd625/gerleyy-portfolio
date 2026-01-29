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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'light';
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">{children}</body>
    </html>
  )
}

