'use client'

import React from 'react'
import '@/styles/tailwind.css'
import Script from 'next/script'
import ChatWidget from '@/components/ui/ChatWidget'
import { useState } from 'react'

function RootLayout({ children }) {

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
        <ChatWidget/>
      </body>
    </html>
  )
}

export default RootLayout