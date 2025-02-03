'use client'
import { motion } from 'framer-motion'
import {
  Calendar,
  Linkedin,
  Mail,
  SearchCheck,
  SparklesIcon,
} from 'lucide-react'
import { GradientBackgroundSection } from '../gradient'
import SalesProcessFlow from './SalesProcessFlow'
import ImageSlider from './ImageSlider'

export default function ModernUserflow() {
  return (
    <div className="relative">
      <GradientBackgroundSection
        size="md"
        opacity={0.3}
        position={{ top: '0', right: '0' }}
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-1/10 px-4 py-2 text-sm font-medium text-primary-1">
              <SparklesIcon className="h-4 w-4" />
              Sales Automation
            </div>

            {/* Title */}
            <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
              <span className="text-text">Work every lead and scale your </span>
              <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                sales activity
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-base/relaxed text-text/80">
              Automate your sales process and turn leads into customers on
              autopilot. Our intelligent system handles the routine tasks while
              you focus on closing deals.
            </p>

            {/* Feature list */}
            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, text: 'Nurture prospects automatically' },
                { icon: SearchCheck, text: 'Integrate with your tech stack' },
                { icon: Calendar, text: 'Book meetings 24/7' },
                { icon: Linkedin, text: 'Personalise your outreach' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <feature.icon className="h-6 w-6 flex-none text-primary-1" />
                  <span className="text-sm/6 text-text/70">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-1 hover:text-primary-2"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Userflow animation section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            {/* <SalesProcessFlow /> */}
            <ImageSlider/>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
