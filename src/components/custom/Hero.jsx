'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import ImageSlider from '@/components/custom/ImageSlider'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'

function Hero() {
  // Animation variants for text content
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
      {/* Using existing Gradient component */}
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />

      <Container className="relative text-white">
        {/* Animated Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Navbar
            banner={
              <Link
                href="/"
                className="group flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white transition-colors duration-200 hover:bg-fuchsia-950/30"
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

        <div className="flex items-center justify-between pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          {/* Left side - Animated text content */}
          <motion.div
            className="max-w-2xl"
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
              className="font-display text-3xl/[0.9] font-medium tracking-tight sm:text-8xl/[0.8] md:text-7xl/[0.8]"
            >
              All-in-One Platform for Realtors, by Realtors
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="mt-8 max-w-3xl text-xl/7 font-medium text-white/75 sm:text-2xl/8"
            >
              This platform, designed by real estate pros, understands your
              needs. With tools like lead management, automated follow-ups, and
              scheduling, it streamlines workflows and strengthens client
              relationships—all in one hub.
            </motion.p>

            <motion.div
              variants={textVariants}
              className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row"
            >
              <Button
                href="#"
                variant="hero"
                as={motion.a}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Try It Risk Free!
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Animated Carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Animated glow effect */}
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

            {/* ImageSlider wrapper with animations */}
            <motion.div
              className="overflow-hidden rounded-2xl bg-white/95 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <ImageSlider />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
