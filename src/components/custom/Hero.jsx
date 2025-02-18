'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
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

  const handleOpenChat = () => {
    window.leadConnector.chatWidget.openWidget()
  };


  return (
    <div className="relative">
      <Container className="relative text-white">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
                  Book a 15 Minute Demo
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

        <div className="flex flex-col items-center justify-between pt-8 pb-12 sm:pt-16 sm:pb-20 lg:flex-row lg:pt-24 lg:pb-32">
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
              className="font-display text-4xl/tight text-primary-3 font-medium tracking-tight sm:text-5xl lg:text-7xl/[0.8]"
            >
              All-in-One AI Platform{' '}
              <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                for Realtors, by Realtors
              </span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="mt-6 max-w-3xl text-lg/7 font-medium text-primary-3 sm:text-xl/8 lg:mt-8"
            >
              AI-powered platform built by award-winning Realtors who understand your daily challenges firsthand. Transform your business with automated email campaigns, instant ad creation, and smart lead generation. Let our AI qualify leads and schedule appointments while you focus on what matters most: closing deals. 
            </motion.p>

            <motion.div
          variants={textVariants}
          className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row lg:mt-12"
        >
          <Button
            onClick={handleOpenChat}
            className="bg-primary-2 text-white hover:bg-hover-1 text-lg px-8 py-4 text-xl"
          >
            Book a Demo!
          </Button>
        </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full lg:w-auto"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
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