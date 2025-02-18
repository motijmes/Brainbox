'use client'

import React from 'react'
import '@/styles/tailwind.css'
import Script from 'next/script'
import ChatWidget from '@/components/ui/ChatWidget'
import { useState } from 'react'

function RootLayout({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Pass both isChatOpen and setIsChatOpen to page component
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { 
        isChatOpen,
        setIsChatOpen 
      });
    }
    return child;
  });

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
        {childrenWithProps}
        <ChatWidget isChatOpen={isChatOpen} />
      </body>
    </html>
  )
}

export default RootLayout