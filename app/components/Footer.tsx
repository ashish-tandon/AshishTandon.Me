'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ashish-tandon',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/ashish-tandon',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:ashish@ashishtandon.me',
      label: 'Email',
    },
  ]

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Ashish Tandon</h3>
            <p className="text-neutral-400 mb-4">
              Blending strategy, technology, and community to build systems that empower people.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-200">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Research', 'Projects', 'Blog', 'Volunteer', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-200">Get In Touch</h4>
            <div className="space-y-2 text-neutral-400">
              <p>Ready to collaborate?</p>
              <p>Let's build something amazing together.</p>
              <a
                href="mailto:ashish@ashishtandon.me"
                className="inline-block mt-4 text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                ashish@ashishtandon.me
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Ashish Tandon. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-neutral-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>and modern web technologies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
