import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flight Pattern Carbon Calculator',
  description: 'Calculate and offset carbon footprint from flight patterns. Precise emissions tracking with ICAO methodology for frequent business travelers and travel managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e74c94dd-750f-4aba-8482-0467716e157d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
