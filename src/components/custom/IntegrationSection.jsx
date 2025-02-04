"use client"
import { motion } from 'framer-motion'
import { GradientBorder } from '../gradient'

const IntegrationSection = () => {
  const integrations = [
    {
      name: 'Google',
      logo: '/assets/integration1.png',
      color: 'from-blue-500/30 to-blue-600/30',
    },
    {
      name: 'Zapier',
      logo: '/assets/integration2.png',
      color: 'from-purple-500/30 to-purple-600/30',
    },
    {
      name: 'Facebook Messenger',
      logo: '/assets/integration3.png',
      color: 'from-indigo-500/30 to-indigo-600/30',
    },
  ]

  return (
    <div className="relative overflow-hidden py-3">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-1/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-primary-2/5 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent"
            >
              Integrations
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-lg text-primary-3"
          >
            Seamlessly integrates with over 200+ platforms, including major
            social media channels, to simplify your marketing and communication
            efforts.
          </motion.p>
        </motion.div>

        {/* Logos Container */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-3">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative w-full max-w-[240px]"
              >
                {/* Logo Card */}
                <motion.div
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  className=""
                >
                  <GradientBorder>
                    <div className="relative rounded-2xl bg-background-2 p-6 ring-1 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:ring-primary-1/20">
                      {/* Background Gradient */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${integration.color}`}
                      />

                      {/* Logo Image */}
                      <motion.div
                        className="relative flex h-16 items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={integration.logo}
                          alt={integration.name}
                          className="h-12 w-auto"
                        />
                      </motion.div>

                      {/* Integration Name */}
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-4 text-center"
                      >
                        <p className="text-sm font-medium text-primary-2">
                          {integration.name}
                        </p>
                      </motion.div>
                    </div>
                  </GradientBorder>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary-1/10 to-primary-2/10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntegrationSection
