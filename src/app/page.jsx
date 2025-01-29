import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import '@/styles/tailwind.css'
import ImageSlider from '@/components/custom/ImageSlider'
import LogoCloud from '@/components/logo-cloud'
import FeatureSection from '@/components/custom/FeatureSection'
import PlatformFeatures from '@/components/custom/PlatformFeatures'
import { motion } from 'framer-motion';
import Hero from '@/components/custom/Hero'
import Pricing from '@/components/custom/Pricing'
import IntegrationSection from '@/components/custom/IntegrationSection'


export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main className="mt-14">
        <LogoCloud />
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-16 pt-0">
          <FeatureSection />
        </div>
        <div className="bg-linear-to-b from-white from-50% to-gray-100">
          <PlatformFeatures />
        </div>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-16">
          <IntegrationSection />
        </div>
        <div className="bg-linear-to-b from-gray-100 from-50% to-white ">
          <Pricing />
        </div>
      </main>
      {/* <Testimonials />
       */}
      <Footer />
    </div>
  )
}
