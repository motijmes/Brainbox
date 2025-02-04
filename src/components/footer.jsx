
"use client"
import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { motion } from 'framer-motion'
import { Button } from './button'
import { Container } from './container'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'
import { Facebook, Instagram } from 'lucide-react'


function CallToAction() {
  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Subheading className={"text-primary-3"}>Get started</Subheading>
        <motion.p
          className="mt-6 bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-3xl font-medium tracking-tight  text-transparent sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to dive in?
          <br />
          Start your free trial today.
        </motion.p>
        <motion.p
          className="mx-auto mt-6 max-w-xs text-sm/6 text-primary-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Get the cheat codes for selling and unlock your team&apos;s revenue
          potential.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            as={motion.a}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-2 hover:bg-hover-1 text-primary-3"
            href="#"
          >
            Get started
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

function SitemapHeading({ children }) {
  return (
    <motion.h3
      className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-sm/6 font-medium text-primary-2 text-transparent"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h3>
  )
}

function SitemapLinks({ children, delay = 0 }) {
  return (
    <motion.ul
      className="mt-6 space-y-4 text-sm/6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.ul>
  )
}

function SitemapLink({ children, href, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className="font-medium text-primary-3 transition-colors duration-200 hover:text-violet-600 break-words"
      >
        {children}
      </Link>
    </motion.li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Navigation</SitemapHeading>
        <SitemapLinks delay={0.2}>
          <SitemapLink href="/about-us" index={0}>
            About Us
          </SitemapLink>
          <SitemapLink href="/pricing" index={1}>
            Pricing
          </SitemapLink>
          <SitemapLink href="/services" index={2}>
            Services
          </SitemapLink>
          <SitemapLink href="/private-policy" index={3}>
            Private Policy
          </SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Contact</SitemapHeading>
        <SitemapLinks delay={0.3}>
          <SitemapLink href="mailto:info@accessibleagents.com" index={0} className="">
            info@accessibleagents.com
          </SitemapLink>
          <SitemapLink href="tel:832-900-2881" index={1}>
            832-900-2881
          </SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Connect With Us</SitemapHeading>
        <SitemapLinks delay={0.4}>
          <SitemapLink href="#" index={0}>
            Facebook
          </SitemapLink>
          <SitemapLink href="#" index={1}>
            Instagram
          </SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialLinks() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link
          href="https://facebook.com"
          target="_blank"
          aria-label="Visit us on Facebook"
          className="text-primary-3 transition-colors duration-200 hover:text-violet-600"
        >
          <Facebook className="size-5" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Link
          href="https://instagram.com"
          target="_blank"
          aria-label="Visit us on Instagram"
          className="text-primary-3 transition-colors duration-200 hover:text-fuchsia-600"
        >
          <Instagram className="size-5" />
        </Link>
      </motion.div>
    </>
  )
}
function Copyright() {
  return (
    <motion.div
      className="text-sm/6 text-primary-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      &copy; {new Date().getFullYear()} AccessibleAgents. All rights reserved
    </motion.div>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-8 md:pt-16 bg-background-2">
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <motion.div
          className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 rotate-[30deg] opacity-20 sm:left-[calc(50%-30rem)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
      <Container className="relative">
        <CallToAction />
        <PlusGrid className="pb-16">
          <PlusGridRow>
            <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
              <div className="col-span-2 flex">
                <PlusGridItem className="pt-6 lg:pb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Logo className="h-9" />
                  </motion.div>
                </PlusGridItem>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                <Sitemap />
              </div>
            </div>
          </PlusGridRow>
          <PlusGridRow className="flex justify-between">
            <div>
              <PlusGridItem className="py-3">
                <Copyright />
              </PlusGridItem>
            </div>
            <div className="flex">
              <PlusGridItem className="flex items-center gap-8 py-3">
                <SocialLinks />
              </PlusGridItem>
            </div>
          </PlusGridRow>
        </PlusGrid>
      </Container>
    </footer>
  )
}

export default Footer
