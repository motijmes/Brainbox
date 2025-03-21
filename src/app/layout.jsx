'use client'

import ChatWidget from '@/components/ui/ChatWidget'
import '@/styles/tailwind.css'
import Script from 'next/script'

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
      <body className="bg-background-1 antialiased">
        {children}
        <ChatWidget />
        <Script
          id="px-grabber"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(doc, tag, id){
                var js = doc.getElementsByTagName(tag)[0];
                if (doc.getElementById(id)) {return;}
                js = doc.createElement(tag); 
                js.id = id;
                js.src = "https://my.gomobileleads.com/px.min.js";
                js.type = "text/javascript";
                doc.head.appendChild(js);
                js.onload = function() {pxfired();};
              }(document, 'script', 'px-grabber'));
              
              function pxfired() {
                PxGrabber.setOptions({
                  Label: "32810787|" + window.location.href,
                });
                PxGrabber.render();
              }
            `,
          }}
        />
      </body>
    </html>
  )
}

export default RootLayout
