import '@/styles/tailwind.css'
import Script from 'next/script'
import ChatWidget from '@/components/ui/ChatWidget'

export const metadata = {
  title: {
    template: '%s - Accessible Agents',
    default: 'Accessible Agents - All-in-One Platform for Realtors, by Realtors',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <Script src="https://api.accessibleagents.com/js/form_embed.js" />
      </head>
      <body className="antialiased bg-background-1">
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}