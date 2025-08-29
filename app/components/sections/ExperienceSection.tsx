'use client'

import { motion } from 'framer-motion'

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Experience</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Corporate leadership and entrepreneurial journey
          </p>
        </motion.div>

        <div className="text-center py-20">
          <p className="text-lg text-neutral-500 dark:text-neutral-500">
            Experience section content will be implemented in Phase 4
          </p>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
