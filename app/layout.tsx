import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Godwin Benedict | Benco Dev - Full Stack Developer',
  description: 'Modern portfolio of Godwin Benedict (Benco Dev). Full stack developer crafting elegant web experiences with cutting-edge technology.',
  generator: 'v0.app',
  icons: {
    // Use the custom Benco icon for favicon and apple icon
    icon: [
      {
        url: '/benco-icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/benco-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
