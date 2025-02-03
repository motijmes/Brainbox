
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


export const metadata = {
  description: 'All-in-One Platform for Realtors, by Realtors',
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main className="mt-14">
        <LogoCloud />

        <div className="bg-gradient-to-b from-white via-gray-100 to-white py-16">
          <BeamFlowDemo />
        </div>
        <div className="bg-gradient-to-b from-white via-gray-100 to-white py-16">
          <Userflow />
        </div>
        <div className="bg-gradient-to-b from-white via-gray-100 to-white py-16">
          <DemoShowcaseTabs />
        </div>
        {/* <div className="bg-gradient-to-b from-white via-gray-100 to-white py-16 pt-0">
          <VideoShowcase />
        </div> */}
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-16 pt-0">
          <FeatureSection />
        </div>
        <div className="bg-linear-to-b from-white from-50% to-gray-100">
          <PlatformFeatures />
        </div>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-16">
          <IntegrationSection />
        </div>
        <div className="bg-linear-to-b from-gray-100 from-50% to-white">
          <Pricing />
        </div>
      </main>
      {/* <Testimonials />
       */}
      <Footer />
    </div>
  )
}
