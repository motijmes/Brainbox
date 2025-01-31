'use client'

import { Container } from '@/components/container'
import DemoShowcase from '@/components/custom/DemoShowcase'
import Footer from '@/components/footer'
import { GradientBackgroundOrignal } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import {
  AdjustmentsHorizontalIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  LockClosedIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'


export default function Demo() {
  return (
    <main className="overflow-hidden">
      <GradientBackgroundOrignal />
      <Container className="bg-linear-to-b from-gray-100 from-50% to-white">
        <Navbar section="privacy" />
      </Container>
      <DemoShowcase/>
      <Footer />
    </main>
  )
}
