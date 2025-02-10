'use client'
import { Container } from '@/components/container'
import Footer from '@/components/footer'
import {
  GradientBackground,
  GradientBackgroundOrignal,
} from '@/components/gradient'
import { GradientBackgroundSection, GradientBorder } from '@/components/gradient'
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
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

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
      <GradientBackgroundSection
        size="sm"
        opacity={0.3}
        position={{ top: '0', left: '0' }}
      />
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
      <div className="absolute -top-2 right-10 left-10 h-px bg-gradient-to-r from-transparent via-primary-1/20 to-transparent" />

      <div className="mb-3 flex items-center gap-2 rounded-xl bg-background-2 p-3">
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
        className="relative overflow-hidden rounded-xl bg-background-2"
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
            className="flex items-center gap-2 rounded-full bg-background-2 px-4 py-2 shadow-lg backdrop-blur-sm"
          >
            <SparklesIcon className="h-4 w-4 text-primary-1" />
            <span className="text-sm font-medium text-primary-2">
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
        <div key={index} className="relative py-8 sm:py-12 md:py-16">
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
                  <span className="text-text text-white">{section.title.regular}</span>
                  <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                    {section.title.gradient}
                  </span>
                </h2>

                <p className="mt-4 text-lg/7 font-medium text-primary-3 sm:text-xl/8 lg:mt-8">
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
                      <span className="text-sm/6 text-text/70 text-white">
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
    <main className="overflow-hidden bg-black">
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
                href="/"
                className="group flex items-center gap-1 rounded-full bg-background-1 px-3 py-0.5 text-sm/6 font-medium text-primary-2 border-primary-2 border-[1px] transition-colors duration-200 hover:bg-fuchsia-950/30"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Start Your Free Trial
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
            section="about-us"
          />
        </motion.div>
      </Container>
      
      {/* Header section */}
      <div className="relative">
        <Header />
      </div>

      {/* Contact section */}
      <div className="relative">
        <ContactPage />
      </div>

      {/* Footer */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0">
          <div className="h-px bg-gradient-to-r from-transparent via-primary-1/20 to-transparent" />
        </div>
        <Footer />
      </div>
    </main>
  )
}