import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/container';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { 
  Building2, 
  MailIcon, 
  MessageSquare, 
  Phone,
} from 'lucide-react';

const ContactPage = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  // Reset iframe loaded state when component mounts or URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setIframeLoaded(false);
      // Small delay to ensure state is reset before new load
      setTimeout(() => {
        const iframe = document.getElementById('inline-CJncaycrRh5hGpavAAmu');
        if (iframe) {
          iframe.contentWindow.location.reload();
        }
      }, 100);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div id="contact-form" className="relative overflow-hidden py-24 bg-black">
      {/* Background decoration stays the same */}
      <div className="absolute inset-0 -z-10">
        {/* Your existing background motion divs */}
      </div>

      <Container className="bg-black">
        {/* Section Header stays the same */}
        
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#121212] p-6 ring-1 shadow-2xl shadow-black/5 ring-black/5 backdrop-blur-sm lg:p-8"
          >
            <div className={`h-[900px] mb-20 lg:h-[700px] transition-opacity duration-300 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <iframe
                src="https://api.accessibleagents.com/widget/form/CJncaycrRh5hGpavAAmu"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  border: 'none', 
                  borderRadius: '12px',
                  backgroundColor: 'transparent',
                  marginBottom: '-20px'
                }}
                id="inline-CJncaycrRh5hGpavAAmu" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Accessible Agents New Website Form"
                data-height="580"
                data-layout-iframe-id="inline-CJncaycrRh5hGpavAAmu"
                data-form-id="CJncaycrRh5hGpavAAmu"
                title="Accessible Agents New Website Form"
                onLoad={handleIframeLoad}
              />
            </div>
          </motion.div>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {[
              {
                icon: Building2,
                title: 'Visit our office',
                details: ['1 Riverway, Suite 1700,Houston, TX 77056'],
              },
              {
                icon: MailIcon,
                title: 'Email us',
                details: ['info@accessibleagents.com'],
              },
              {
                icon: Phone,
                title: 'Call us',
                details: ['+1 (832) 900-2881'],
              },
              {
                icon: MessageSquare,
                title: 'Live chat',
                details: ['Chat with our team', 'Available 24/7'],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 rounded-2xl bg-[#121212] p-5 ring-1 shadow-lg shadow-black/5 ring-black/5 backdrop-blur-sm hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFEB3B]/10">
                  <item.icon className="h-6 w-6 text-[#FF66FF]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#FF66FF]">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="mt-1 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  )
};

export default ContactPage;