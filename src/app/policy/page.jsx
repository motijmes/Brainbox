'use client'

import { Container } from '@/components/container'
import Footer from '@/components/footer'
import { GradientBackgroundOrignal } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import {
  AdjustmentsHorizontalIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  LockClosedIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
function PrivacyContent() {
  const sections = [
    {
      icon: InformationCircleIcon,
      title: '1. Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you sign up, create an account, or use our services, we may collect personal information such as your name, email address, phone number, and business information.',
        },
        {
          subtitle: 'Usage Data',
          text: 'We may collect information on how you access and use our website, including IP addresses, browser types, device identifiers, and usage patterns. This helps us improve our services and enhance your experience.',
        },
        {
          subtitle: 'Communication Information',
          text: 'We may collect information related to the communications you have with us, including SMS interactions if you opt into our messaging services.',
        },
      ],
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: '2. How We Use Your Information',
      content: [
        {
          subtitle: 'To Provide and Improve Our Services',
          text: 'We use the information we collect to operate and enhance our website, customize your experience, and respond to your requests.',
        },
        {
          subtitle: 'For Marketing and Promotional Communications',
          text: 'If you opt-in, we may use your contact information to send you updates, promotions, and other information about our services. You can opt out at any time.',
        },
        {
          subtitle: 'For Customer Support',
          text: 'We use your information to respond to inquiries and provide support regarding our services.',
        },
        {
          subtitle: 'To Comply with Legal Obligations',
          text: 'In some cases, we may be required by law to collect and share your information.',
        },
      ],
    },
    {
      icon: UserGroupIcon,
      title: '3. Sharing of Information',
      content: [
        {
          text: 'We do not share or sell your personal information to third parties for their own marketing purposes. We may share information with trusted service providers who assist us in operating our business, but they are contractually obligated to protect your information.',
        },
      ],
    },
    {
      icon: ShieldCheckIcon,
      title: '4. Data Security',
      content: [
        {
          text: 'We prioritize the security of your data. Accessible Agents uses administrative, technical, and physical safeguards to protect your information. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.',
        },
      ],
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: '5. Opt-In and Opt-Out Options for SMS Communications',
      content: [
        {
          text: 'Accessible Agents offers the option to receive SMS messages, including updates, reminders, and marketing information.',
        },
        {
          subtitle: 'Opt-In',
          text: 'To receive SMS updates and communications from Accessible Agents, text "START" to our dedicated number, 832-900-2881. By opting in, you consent to receive periodic SMS messages as part of our services.',
        },
        {
          subtitle: 'Opt-Out',
          text: 'You can stop receiving SMS messages from us at any time by texting "STOP" to the same number. This will unsubscribe you from all SMS communications. If you wish to rejoin, you can text "START" again to re-subscribe.',
        },
        {
          text: 'Standard messaging and data rates may apply. Please check with your mobile provider for details.',
        },
      ],
    },
    {
      icon: DocumentTextIcon,
      title: '6. Your Choices and Rights',
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access and correct your personal information. You can update your information directly within your account settings or by contacting us at info@accessibleagents.com.',
        },
        {
          subtitle: 'Deletion',
          text: 'You may request the deletion of your personal information. Please contact us for assistance.',
        },
        {
          subtitle: 'Opt-Out',
          text: 'If you wish to opt out of email communications, you can do so by following the unsubscribe link in any of our emails or by contacting us directly.',
        },
      ],
    },
    {
      icon: ClockIcon,
      title: '7. Changes to Our Privacy Policy',
      content: [
        {
          text: 'We may update this Privacy Policy periodically to reflect changes to our practices or for legal, operational, or regulatory reasons. Any changes will be posted on this page, and we encourage you to review our Privacy Policy regularly.',
        },
      ],
    },
  ]

  return (
    <Container className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-background-2 px-4 py-2 text-sm font-medium text-primary-2 border-[2px] border-primary-2"
          >
            <LockClosedIcon className="h-4 w-4" />
            Privacy Policy
          </motion.div>
          <h1 className="font-display text-4xl/tight font-medium tracking-tight">
            <span className="text-primary-3">Privacy Policy for </span>
            <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
              Accessible Agents
            </span>
          </h1>
          <p className="mt-4 text-lg text-primary-3/80">
            Accessible Agents is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, share, and protect
            information about you.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <section.icon className="h-6 w-6 text-primary-2" />
                </div>
                <div className="flex-1">
                  <h2 className="mb-4 text-xl font-semibold text-primary-3">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        {item.subtitle && (
                          <h3 className="mb-2 font-medium text-primary-3">
                            {item.subtitle}
                          </h3>
                        )}
                        <p className="leading-relaxed text-primary-3/80">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative line between sections */}
              {index !== sections.length - 1 && (
                <div className="absolute right-0 -bottom-6 left-0 h-px bg-gradient-to-r from-transparent via-primary-2/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-background-2 p-8 ring-1 ring-primary-2/10 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              <UserGroupIcon className="h-6 w-6 text-primary-2" />
            </div>
            <div>
              <h2 className="mb-4 text-xl font-semibold text-primary-3">
                8. Contact Us
              </h2>
              <p className="mb-6 leading-relaxed text-primary-3/80">
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-primary-2" />
                  <a
                    href="mailto:info@accessibleagents.com"
                    className="text-primary-2 hover:text-hover-1"
                  >
                    info@accessibleagents.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-primary-2" />
                  <span className="text-primary-3/80">+1-832-900-2881</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-primary-3/60">
                Thank you for trusting Accessible Agents with your information.
                We are committed to protecting your privacy and ensuring your
                experience with us is safe and secure.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default function PrivacyPolicy() {
  return (
    <main className="overflow-hidden">
        <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white [&_a]:text-white [&_svg]:text-white [&_img]:brightness-0 [&_img]:invert"
        >
          <Navbar
            banner={
              <Link
                href="/about-us#inline-CJncaycrRh5hGpavAAmu"
                className="group flex items-center gap-1 rounded-full bg-background-1 px-3 py-0.5 text-sm/6 font-medium text-primary-2 border-primary-2 border-[1px] transition-colors duration-200 hover:bg-fuchsia-950/30"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Get Started Today
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <ChevronRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </motion.span>
              </Link>
            }
            section="policy"
          />
        </motion.div>
      </Container>
      <PrivacyContent />
      <Footer />
    </main>
  )
}
