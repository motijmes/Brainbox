'use client'

import { Footer } from '@/components/footer'
import '@/styles/tailwind.css'
import LogoCloud from '@/components/logo-cloud'
import FeatureSection from '@/components/custom/FeatureSection'
import PlatformFeatures from '@/components/custom/PlatformFeatures'
import Hero from '@/components/custom/Hero'
import Pricing from '@/components/custom/Pricing'
import IntegrationSection from '@/components/custom/IntegrationSection'
import Userflow from '@/components/custom/Userflow'
import DemoShowcaseTabs from '@/components/custom/DemoShowcaseTabs'
import { BeamFlowDemo } from '@/components/ui/animated-beam-demo'

export default function Home() {
  return (
    <div className="overflow-hidden">
       <Hero />
       <main className="mt-4 sm:mt-6 md:mt-10">
        <h2 className="font-display text-6xl/tight font-medium tracking-tight sm:text-7xl/tight text-center">
          <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
            How it works
          </span>
        </h2>

        <div className="py-8 sm:py-12 md:py-16">
          <BeamFlowDemo />
        </div>
        <div className="py-8 sm:py-12 md:py-16">
          <Userflow />
        </div>
        <div className="py-8 sm:py-12 md:py-16">
          <DemoShowcaseTabs />
        </div>

        <div className="py-8 pt-0 sm:py-12 sm:pt-0 md:py-16 md:pt-0">
          <FeatureSection />
        </div>
        <div className="">
          <PlatformFeatures />
        </div>
        <div className="py-8 sm:py-12 md:py-16">
          <IntegrationSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}