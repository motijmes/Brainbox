import React, { useEffect } from 'react';
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
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.accessibleagents.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="relative overflow-hidden py-24 bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-1/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 rounded-full bg-primary-2/5 blur-3xl"
        />
      </div>

      <Container className="">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#FFEB3B]/10 px-4 py-2 text-sm font-medium text-[#FFEB3B]"
          >
            <SparklesIcon className="h-4 w-4" />
            Get in Touch
          </motion.div>
          <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
            <span className="text-white">Let&apos;s Start a </span>
            <span className="bg-gradient-to-r from-[#FFEB3B] via-[#FF8E8E] to-[#FF66FF] bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#121212] p-6 ring-1 shadow-2xl shadow-black/5 ring-black/5 backdrop-blur-sm lg:p-8"
          >
            <div className="h-full">
              <iframe
                src="https://api.accessibleagents.com/widget/form/CJncaycrRh5hGpavAAmu"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  border: 'none', 
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                  display: 'block'
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
                data-height="534"
                data-layout-iframe-id="inline-CJncaycrRh5hGpavAAmu"
                data-form-id="CJncaycrRh5hGpavAAmu"
                title="Accessible Agents New Website Form"
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
                details: ['123 Business Avenue', 'Silicon Valley, CA 94025'],
              },
              {
                icon: MailIcon,
                title: 'Email us',
                details: ['support@example.com', 'sales@example.com'],
              },
              {
                icon: Phone,
                title: 'Call us',
                details: ['+1 (555) 123-4567', 'Mon-Fri from 8am to 5pm'],
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
  );
};

export default ContactPage;