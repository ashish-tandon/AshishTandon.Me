'use client'

import { motion } from 'framer-motion'
import { Download, Linkedin, Github, Mail, ArrowDown } from 'lucide-react'
import ParticleNetwork from '@/components/ParticleNetwork'

const HeroSection = () => {
  const quickActions = [
    {
      icon: Download,
      label: 'Download CV',
      href: '/cv.pdf',
      variant: 'primary' as const,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ashish-tandon',
      variant: 'secondary' as const,
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ashish-tandon',
      variant: 'secondary' as const,
    },
    {
      icon: Mail,
      label: 'Contact',
      href: '#contact',
      variant: 'ghost' as const,
    },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <ParticleNetwork />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="heading-gradient">Ashish Tandon</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-400 mb-8 font-medium"
          >
            Agile Executive | Product Leader | Civic-Tech Founder | Professor | PhD Candidate
          </motion.p>

          {/* Accent Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <blockquote className="text-lg md:text-xl text-neutral-500 dark:text-neutral-500 italic">
              "Systems should serve people, not the other way around."
            </blockquote>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Blending strategy, technology, and community to build systems that empower people. 
            From corporate leadership to civic innovation, I focus on creating sustainable impact 
            through thoughtful design and strategic execution.
          </motion.p>

          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {quickActions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.href.startsWith('http') ? '_blank' : undefined}
                rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  action.variant === 'primary'
                    ? 'button-primary'
                    : action.variant === 'secondary'
                    ? 'button-secondary'
                    : 'button-ghost'
                }`}
              >
                <action.icon size={20} />
                {action.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-neutral-400 dark:text-neutral-600"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary-100 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-30" />
    </section>
  )
}

export default HeroSection
