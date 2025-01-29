'use client'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Logo({ className }) {
  let transition = {
    duration: 0.5,
    ease: 'easeInOut',
  }

  return (
    <motion.div
      className={clsx(className, 'relative h-8 w-32')}
      whileHover={{ scale: 1.05 }}
      transition={transition}
    >
      <img
        src="/assets/logo.png"
        alt="Logo"
        className="h-full w-full object-contain  brightness-0 invert transition-all duration-300 hover:opacity-100"
      />
    </motion.div>
  )
}

// Smaller mark version if needed
export function Mark({ className }) {
  return (
    <motion.div
      className={clsx(className, 'relative h-8 w-8')}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src="/assets/logo.png"
        alt="Logo Mark"
        className="h-full w-full object-contain opacity-90 brightness-0 invert transition-all duration-300 hover:opacity-100"
      />
    </motion.div>
  )
}