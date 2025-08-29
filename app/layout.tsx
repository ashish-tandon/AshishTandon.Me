import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashish Tandon - Portfolio',
  description: 'Agile Executive | Product Leader | Civic-Tech Founder | Professor | PhD Candidate. AI-powered personal portfolio showcasing professional excellence and innovation.',
  keywords: ['Ashish Tandon', 'Portfolio', 'Executive', 'Product Leader', 'Civic-Tech', 'Professor', 'PhD', 'AI', 'Innovation'],
  authors: [{ name: 'Ashish Tandon' }],
  creator: 'Ashish Tandon',
  publisher: 'Ashish Tandon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ashishtandon.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ashish Tandon - Portfolio',
    description: 'Agile Executive | Product Leader | Civic-Tech Founder | Professor | PhD Candidate',
    url: 'https://ashishtandon.me',
    siteName: 'Ashish Tandon Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ashish Tandon Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish Tandon - Portfolio',
    description: 'Agile Executive | Product Leader | Civic-Tech Founder | Professor | PhD Candidate',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white`}>
        {children}
      </body>
    </html>
  )
}
