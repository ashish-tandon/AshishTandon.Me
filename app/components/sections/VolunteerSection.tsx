'use client'

import { motion } from 'framer-motion'

const VolunteerSection = () => {
  return (
    <section id="volunteer" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Volunteer</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Community engagement and social impact
          </p>
        </motion.div>

        <div className="text-center py-20">
          <p className="text-lg text-neutral-500 dark:text-neutral-500">
            Volunteer section content will be implemented in Phase 4
          </p>
        </div>
      </div>
    </section>
  )
}

export default VolunteerSection
