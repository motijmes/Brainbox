
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
        className="absolute inset-0 bg-gradient-to-r from-violet-100/50 to-fuchsia-100/50 blur-3xl"
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
        <Subheading>Get started</Subheading>
        <motion.p
          className="mt-6 bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-3xl font-medium tracking-tight text-gray-900 text-transparent sm:text-5xl"
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
          className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-600"
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
            className="w-full bg-gradient-to-r from-primary-1 to-primary-2 text-white shadow-lg transition-all duration-300 hover:from-violet-700 hover:to-fuchsia-700 hover:shadow-xl sm:w-auto"
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
      className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-sm/6 font-medium text-gray-900 text-transparent"
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
        className="font-medium text-gray-600 transition-colors duration-200 hover:text-violet-600"
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
          <SitemapLink href="mailto:info@accessibleagents.com" index={0}>
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

function SocialIconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

function SocialIconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
    </svg>
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
          className="text-gray-600 transition-colors duration-200 hover:text-violet-600"
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
          className="text-gray-600 transition-colors duration-200 hover:text-fuchsia-600"
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
      className="text-sm/6 text-gray-600"
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
    <footer className="relative overflow-hidden pt-16">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white to-violet-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.violet.50/0.8),transparent_50%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <motion.div
          className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-violet-200 to-fuchsia-200 opacity-20 sm:left-[calc(50%-30rem)]"
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
