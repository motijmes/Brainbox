// 'use client';

// import { useEffect } from 'react';

// export default function ChatWidget() {
//   useEffect(() => {
//     // Create and inject the main widget script
//     const script = document.createElement('script');
//     script.src = 'https://widgets.leadconnectorhq.com/loader.js';
//     script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
//     script.setAttribute('data-widget-id', '6750ae1674e93bce4b94e7b8');
//     document.body.appendChild(script);

//     // Create and inject the typing indicator script
//     const typingScript = document.createElement('script');
//     typingScript.textContent = `
//       function getRandomDelay(min = 1000, max = 2000) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//       }

//       let typingMessageElement = null;
//       let typingTimeout = null;
//       let maxTypingTimeout = null;

//       function showTypingIndicator() {
//         try {
//           clearTimeout(typingTimeout);
//           clearTimeout(maxTypingTimeout);
//           hideTypingIndicator();

//           const chatWidget = document.querySelector('chat-widget');
//           if (!chatWidget || !chatWidget.shadowRoot) return;

//           const avatarImgElement = chatWidget.shadowRoot.querySelector('img[alt="Avatar"]');
//           const avatarSrc = avatarImgElement ? avatarImgElement.src : null;

//           const chatPane = chatWidget.shadowRoot.querySelector('chat-pane');
//           if (!chatPane) return;

//           const chatMessage = document.createElement('chat-message');
//           chatMessage.classList.add('hydrated');
//           typingMessageElement = chatMessage;

//           chatPane.appendChild(chatMessage);

//           requestAnimationFrame(() => {
//             const ionItem = chatMessage.shadowRoot?.querySelector('ion-item');
//             if (!ionItem) return;

//             ionItem.className = "item item-has-start-slot md item-lines-none item-fill-none hydrated";

//             const messageContainer = ionItem.querySelector('.message-container');
//             if (!messageContainer) return;

//             messageContainer.setAttribute('slot', 'start');
//             const bubbleDiv = messageContainer.querySelector('.bubble');

//             if (bubbleDiv) {
//               bubbleDiv.className = "bubble incoming bubble-footer-padding bubble-min-w-auto";

//               if (avatarSrc) {
//                 const avatarImg = document.createElement('img');
//                 avatarImg.className = 'thumbnail-img';
//                 avatarImg.alt = 'Avatar';
//                 avatarImg.src = avatarSrc;
//                 bubbleDiv.insertAdjacentElement('beforebegin', avatarImg);
//               }

//               bubbleDiv.innerHTML = \`
//                 <div class="dot-container">
//                   <span class="dot"></span>
//                   <span class="dot"></span>
//                   <span class="dot"></span>
//                 </div>
//                 <style>
//                   .bubble-min-w-auto { min-width: auto !important; }
//                   .dot-container {
//                     display: flex;
//                     padding-top: 5px;
//                   }
//                   .dot {
//                     width: 5px;
//                     height: 5px;
//                     margin: 0px 2px;
//                     background-color: #555;
//                     border-radius: 50%;
//                     display: inline-block;
//                     animation: bounce 0.6s infinite alternate;
//                   }
//                   .dot:nth-child(1) { animation-delay: 0s; }
//                   .dot:nth-child(2) { animation-delay: 0.2s; }
//                   .dot:nth-child(3) { animation-delay: 0.4s; }
//                   @keyframes bounce {
//                     from { transform: translateY(0); }
//                     to { transform: translateY(-5px); }
//                   }
//                 </style>
//               \`;
//             }
//           });

//           requestAnimationFrame(() => {
//             const chatConversation = chatPane.shadowRoot?.querySelector('chat-conversation');
//             if (!chatConversation) return;

//             const ionContent = chatConversation.shadowRoot?.querySelector('ion-content');
//             if (!ionContent || !ionContent.shadowRoot) return;

//             const scrollContainer = ionContent.shadowRoot.querySelector('main');
//             if (!scrollContainer) return;

//             scrollContainer.scrollTop = scrollContainer.scrollHeight;
//           });
//         } catch (error) {
//           console.error('Error showing typing indicator:', error);
//         }
//       }

//       function hideTypingIndicator() {
//         try {
//           if (typingMessageElement?.parentNode) {
//             typingMessageElement.parentNode.removeChild(typingMessageElement);
//             typingMessageElement = null;
//           }
//         } catch (error) {
//           console.error('Error hiding typing indicator:', error);
//         }
//       }

//       // Patch fetch API
//       const originalFetch = window.fetch;
//       window.fetch = async function(...args) {
//         const [resource, config] = args;

//         if (config?.method === 'POST' && resource.includes('https://services.leadconnectorhq.com/conversations/providers/live-chat/messages')) {
//           clearTimeout(typingTimeout);
//           clearTimeout(maxTypingTimeout);

//           const randomDelay = getRandomDelay();
//           typingTimeout = setTimeout(showTypingIndicator, randomDelay);
//           maxTypingTimeout = setTimeout(() => {
//             hideTypingIndicator();
//             clearTimeout(typingTimeout);
//           }, 15000 + randomDelay);
//         }

//         return originalFetch(...args);
//       };

//       // Patch WebSocket API
//       const originalWebSocket = window.WebSocket;
//       window.WebSocket = function(...args) {
//         const socket = new originalWebSocket(...args);

//         socket.addEventListener('message', function(event) {
//           if (event.data.includes('sendMessage')) {
//             hideTypingIndicator();
//           }
//         });

//         return socket;
//       };
//     `;
//     document.body.appendChild(typingScript);

//     // Cleanup on unmount
//     return () => {
//       document.body.removeChild(script);
//       document.body.removeChild(typingScript);
//     };
//   }, []);

//   return null;
// }

'use client';

import { useEffect } from 'react';

export default function ChatWidget({ isChatOpen }) {
  useEffect(() => {
    if (!isChatOpen) return; // Only load when needed

    // Create and inject the main widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '6750ae1674e93bce4b94e7b8');
    document.body.appendChild(script);

    // Create and inject the typing indicator script
    const typingScript = document.createElement('script');
    typingScript.textContent = `
      function getRandomDelay(min = 1000, max = 2000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      let typingMessageElement = null;
      let typingTimeout = null;
      let maxTypingTimeout = null;

      function showTypingIndicator() {
        try {
          clearTimeout(typingTimeout);
          clearTimeout(maxTypingTimeout);
          hideTypingIndicator();

          const chatWidget = document.querySelector('chat-widget');
          if (!chatWidget || !chatWidget.shadowRoot) return;

          const avatarImgElement = chatWidget.shadowRoot.querySelector('img[alt="Avatar"]');
          const avatarSrc = avatarImgElement ? avatarImgElement.src : null;

          const chatPane = chatWidget.shadowRoot.querySelector('chat-pane');
          if (!chatPane) return;

          const chatMessage = document.createElement('chat-message');
          chatMessage.classList.add('hydrated');
          typingMessageElement = chatMessage;

          chatPane.appendChild(chatMessage);

          requestAnimationFrame(() => {
            const ionItem = chatMessage.shadowRoot?.querySelector('ion-item');
            if (!ionItem) return;

            ionItem.className = "item item-has-start-slot md item-lines-none item-fill-none hydrated";

            const messageContainer = ionItem.querySelector('.message-container');
            if (!messageContainer) return;

            messageContainer.setAttribute('slot', 'start');
            const bubbleDiv = messageContainer.querySelector('.bubble');

            if (bubbleDiv) {
              bubbleDiv.className = "bubble incoming bubble-footer-padding bubble-min-w-auto";

              if (avatarSrc) {
                const avatarImg = document.createElement('img');
                avatarImg.className = 'thumbnail-img';
                avatarImg.alt = 'Avatar';
                avatarImg.src = avatarSrc;
                bubbleDiv.insertAdjacentElement('beforebegin', avatarImg);
              }

              bubbleDiv.innerHTML = \`
                <div class="dot-container">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>
                <style>
                  .bubble-min-w-auto { min-width: auto !important; }
                  .dot-container {
                    display: flex;
                    padding-top: 5px;
                  }
                  .dot {
                    width: 5px;
                    height: 5px;
                    margin: 0px 2px;
                    background-color: #555;
                    border-radius: 50%;
                    display: inline-block;
                    animation: bounce 0.6s infinite alternate;
                  }
                  .dot:nth-child(1) { animation-delay: 0s; }
                  .dot:nth-child(2) { animation-delay: 0.2s; }
                  .dot:nth-child(3) { animation-delay: 0.4s; }
                  @keyframes bounce {
                    from { transform: translateY(0); }
                    to { transform: translateY(-5px); }
                  }
                </style>
              \`;
            }
          });
        } catch (error) {
          console.error('Error showing typing indicator:', error);
        }
      }

      function hideTypingIndicator() {
        try {
          if (typingMessageElement?.parentNode) {
            typingMessageElement.parentNode.removeChild(typingMessageElement);
            typingMessageElement = null;
          }
        } catch (error) {
          console.error('Error hiding typing indicator:', error);
        }
      }

      // Patch fetch API
      const originalFetch = window.fetch;
      window.fetch = async function(...args) {
        const [resource, config] = args;

        if (config?.method === 'POST' && resource.includes('https://services.leadconnectorhq.com/conversations/providers/live-chat/messages')) {
          clearTimeout(typingTimeout);
          clearTimeout(maxTypingTimeout);

          const randomDelay = getRandomDelay();
          typingTimeout = setTimeout(showTypingIndicator, randomDelay);
          maxTypingTimeout = setTimeout(() => {
            hideTypingIndicator();
            clearTimeout(typingTimeout);
          }, 15000 + randomDelay);
        }

        return originalFetch(...args);
      };

      // Patch WebSocket API
      const originalWebSocket = window.WebSocket;
      window.WebSocket = function(...args) {
        const socket = new originalWebSocket(...args);

        socket.addEventListener('message', function(event) {
          if (event.data.includes('sendMessage')) {
            hideTypingIndicator();
          }
        });

        return socket;
      };
    `;
    document.body.appendChild(typingScript);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(typingScript);
    };
  }, [isChatOpen]);

  return null;
}