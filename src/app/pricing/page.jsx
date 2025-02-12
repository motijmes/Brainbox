'use client'
import { Container } from '@/components/container'
import Pricing from '@/components/custom/Pricing'
import Footer from '@/components/footer'
import { GradientBackgroundOrignal } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function AboutUs() {
  return (
    <main className="overflow-hidden">
      {/* <GradientBackgroundOrignal /> */}
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
                  Start Your Get Started Today
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
            section="pricing"
          />
        </motion.div>
      </Container>
      <div className=" ">
        <Pricing />
      </div>
      <Footer />
    </main>
  )
}
