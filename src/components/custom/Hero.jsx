'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import ImageSlider from '@/components/custom/ImageSlider'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import SalesProcessFlow from './SalesProcessFlow'

function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />

      <Container className="relative text-white">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
            section={'home'}
          />
        </motion.div>

        {/* Changed to flex-col on mobile, row on larger screens */}
        <div className="flex flex-col items-center justify-between pt-8 pb-12 sm:pt-16 sm:pb-20 lg:flex-row lg:pt-24 lg:pb-32">
          {/* Left side - Animated text content */}
          <motion.div
            className="mb-12 w-full lg:mb-0 lg:max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h1
              variants={textVariants}
              className="font-display text-4xl/tight text-primary-3 font-medium tracking-tight  sm:text-5xl lg:text-7xl/[0.8]"
            >
              AI Powered SALES MACHINE{' '}
              <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                - More Leads, More Closings, Less Hassle
              </span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="mt-6 max-w-3xl text-lg/7 font-medium text-primary-3 sm:text-xl/8 lg:mt-8"
            >
              Accessible Agents is created by Award Winning Real Estate sales agentsfor agents and by agents.
              We know what you need to manage your business and make more sales because we were right there with you.
              We careated the best All-in-One AI Platform customized to fit your needs.
              Finally get organized! Send those holiday e-blasts on auto-pilot, send weekly e-mails in a few clicks, send mass text
              messages, create your own ads super fast and super easy, and stop spending so much on other ad agencies!
              Start creating your own leads in a few clicks and let our Accessible Agents qualify your leads for you and book your
              appointments on auto-pilot. It's simply amazing to be on a walk and have a new appointment scheduled on your calendar
              for you. Try it risk free.
            </motion.p>

            <motion.div
              variants={textVariants}
              className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row lg:mt-12"
            >
              <Button
                href="/about-us"
                as={motion.a}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className={"bg-primary-2 hover:bg-hover-1 text-white px-8 py-4 text-xl"}
              >
                Try It Risk Free!
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Animated Carousel */}
          <motion.div
            className="relative w-full lg:w-auto"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Adjusted glow effect container */}
            <motion.div
              className="absolute -inset-0.5 -z-10 rounded-2xl bg-white/15 blur-2xl"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Made the wrapper responsive */}
            <motion.div
              className="mx-auto w-full max-w-md overflow-hidden rounded-2xl lg:max-w-none"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <SalesProcessFlow />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
export default Hero
