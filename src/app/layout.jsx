import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Accessible Agents',
    default:
      'Accessible Agents - All-in-One Platform for Realtors, by Realtors',
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
      </head>
      {/* <body className="text-gray-950 antialiased">{children}</body> */}
      <body className="antialiased">{children}</body>
    </html>
  )
}
