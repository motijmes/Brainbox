'use client'
import { Container } from '@/components/container'
import Footer from '@/components/footer'
import {
  GradientBackground,
  GradientBackgroundOrignal,
} from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { AnimatedNumber } from '@/components/animated-number'
import { motion } from 'framer-motion'
import { SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import {
  ChartBarIcon,
  RocketLaunchIcon,
  BookOpenIcon,
} from '@heroicons/react/24/solid'
import ContactPage from '@/components/custom/ContactPage'

function Header() {
  const sections = [
    {
      badge: { icon: SparklesIcon, text: 'About Us' },
      title: {
        regular: 'We Transform ',
        gradient: 'Real Estate Management',
      },
      description:
        'We are a team of real estate professionals and tech innovators dedicated to transforming how agents manage and grow their business. With deep industry experience, we understand the unique demands realtors face every day. Our all-in-one platform was crafted to meet those needs directly, using cutting-edge technology and an integrated AI engine to streamline lead management, automate communication, and boost client engagement.',
      features: [
        {
          icon: SparklesIcon,
          text: 'AI-powered platform for streamlined lead management',
        },
        {
          icon: RocketLaunchIcon,
          text: 'Cutting-edge technology with integrated AI engine',
        },
        {
          icon: CheckCircleIcon,
          text: 'Advanced tools for meaningful client connections',
        },
      ],
      image: '/assets/feature1.png',
    },
    {
      badge: { icon: BookOpenIcon, text: 'Our Story' },
      title: {
        regular: 'Building a ',
        gradient: 'Smarter Platform',
      },
      description:
        'Our journey began with a simple observation: real estate professionals are juggling too much. Between managing leads, scheduling showings, following up with clients, and staying visible across digital channels, we saw that agents needed a smarter way to handle their workload without sacrificing quality or personal touch.',
      features: [
        {
          icon: CheckCircleIcon,
          text: 'Platform designed by realtors, for realtors',
        },
        {
          icon: CheckCircleIcon,
          text: 'Latest advancements in AI and automation',
        },
        {
          icon: CheckCircleIcon,
          text: 'All-in-one solution for business growth',
        },
      ],
      image: '/assets/feature2.png',
    },
  ]

  const renderImageInterface = (section) => (
    <div className="relative rounded-2xl bg-white/80 p-2 ring-1 shadow-2xl shadow-black/5 ring-black/5 backdrop-blur-sm">
      <div className="absolute -top-2 right-10 left-10 h-px bg-gradient-to-r from-transparent via-primary-1/20 to-transparent" />

      <div className="mb-3 flex items-center gap-2 rounded-xl bg-gray-50/80 p-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-rose-400" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <SparklesIcon className="h-4 w-4 text-primary-1" />
          <span className="text-xs font-medium text-primary-1">
            AI Assistant Active
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-xl bg-gray-50/80"
      >
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={section.image}
            alt={section.title.regular + section.title.gradient}
            className="h-full w-full transform object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm"
          >
            <SparklesIcon className="h-4 w-4 text-primary-1" />
            <span className="text-sm font-medium text-gray-900">
              {section.badge.text}
            </span>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary-1/30 to-primary-2/30 blur-xl" />
      <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary-2/30 to-primary-1/30 blur-xl" />
    </div>
  )

  return (
    <div className="relative overflow-hidden">
      {sections.map((section, index) => (
        <div key={index} className="relative py-20 sm:py-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-1/5 blur-3xl" />
            <div className="absolute top-1/2 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-2/5 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className={`mx-auto flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-1/10 px-4 py-2 text-sm font-medium text-primary-1">
                  <section.badge.icon className="h-4 w-4" />
                  {section.badge.text}
                </div>

                <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
                  <span className="text-text">{section.title.regular}</span>
                  <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                    {section.title.gradient}
                  </span>
                </h2>

                <p className="mt-4 text-base/relaxed text-text/80">
                  {section.description}
                </p>

                <div className="mt-8 space-y-4">
                  {section.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <feature.icon className="h-6 w-6 flex-none text-primary-1" />
                      <span className="text-sm/6 text-text/70">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                {renderImageInterface(section)}
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AboutUs() {
  return (
    <main className="overflow-hidden">
      <GradientBackgroundOrignal />
      <Container className="bg-linear-to-b from-white from-50% to-gray-100">
        <Navbar section="aboutUs" />
      </Container>
      <div className="bg-linear-to-b from-gray-100 from-50% to-white">
        <Header />
      </div>
      <div className="g-gradient-to-b bg-linear-to-b from-white via-gray-100 to-white">
        <ContactPage />
      </div>
      <Footer />
    </main>
  )
}