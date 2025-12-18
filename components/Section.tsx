'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'default' | 'warm' | 'primary' | 'white'
  width?: 'narrow' | 'wide' | 'full'
  id?: string
}

const backgroundClasses = {
  default: 'bg-background',
  warm: 'bg-surface-warm',
  primary: 'bg-primary text-white',
  white: 'bg-white',
}

const widthClasses = {
  narrow: 'max-w-3xl',
  wide: 'max-w-6xl',
  full: 'max-w-full',
}

export function Section({
  children,
  className = '',
  background = 'default',
  width = 'wide',
  id,
}: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${backgroundClasses[background]} ${className}`}
    >
      <motion.div
        className={`${widthClasses[width]} mx-auto`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}
