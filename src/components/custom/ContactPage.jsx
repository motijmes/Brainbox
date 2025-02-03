import React from 'react';
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
  return (
    <div className="relative overflow-hidden py-24">
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

      <Container>
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
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-1/10 px-4 py-2 text-sm font-medium text-primary-1"
          >
            <SparklesIcon className="h-4 w-4" />
            Get in Touch
          </motion.div>
          <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
            <span className="text-text">Let&apos;s Start a </span>
            <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
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
            className="rounded-2xl bg-white/80 p-8 ring-1 shadow-2xl shadow-black/5 ring-black/5 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-1 focus:ring-2 focus:ring-primary-1/20 focus:outline-none"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-1 focus:ring-2 focus:ring-primary-1/20 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-1 focus:ring-2 focus:ring-primary-1/20 focus:outline-none"
                    placeholder="Your message"
                  />
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-lg bg-gradient-to-r from-primary-1 to-primary-2 px-8 py-3 text-center text-sm font-medium text-white hover:opacity-90 focus:ring-2 focus:ring-primary-1/20 focus:outline-none"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
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
                className="flex gap-4 rounded-xl bg-white/80 p-6 ring-1 shadow-lg shadow-black/5 ring-black/5 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-1/10">
                  <item.icon className="h-6 w-6 text-primary-1" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="mt-1 text-sm text-gray-500">
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