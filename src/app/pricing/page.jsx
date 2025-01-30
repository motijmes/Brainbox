'use client'
import { Container } from '@/components/container'
import Pricing from '@/components/custom/Pricing'
import Footer from '@/components/footer'
import { GradientBackgroundOrignal } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'


export default function AboutUs() {
  return (
    <main className="overflow-hidden">
      <GradientBackgroundOrignal />
      <Container className="bg-linear-to-b from-white from-50% to-gray-100">
        <Navbar section="aboutUs" />
      </Container>
      <div className="bg-linear-to-b from-gray-100 from-50% to-white">
        <Pricing />
      </div>
      <Footer />
    </main>
  )
}
