/**
 * Funnel Starter Template
 * 
 * Copy this as a starting point and customize:
 * 1. Choose design tokens from references/design-tokens.md
 * 2. Select section patterns from references/section-patterns.md
 * 3. Apply user copy EXACTLY as provided
 * 4. Add distinctive visual elements per chosen aesthetic
 */

// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Check, Star, ArrowRight, Shield, Clock, Users } from 'lucide-react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// Reusable Button component
function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  [key: string]: any
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200'
  
  const variants = {
    primary: 'bg-primary text-white hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg',
    secondary: 'bg-surface border-2 border-border hover:border-primary',
    ghost: 'hover:bg-surface'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// ==================== HERO SECTION ====================
function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-6"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-primary"
          >
            {/* USER COPY: Eyebrow */}
          </motion.span>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl lg:text-6xl xl:text-7xl font-display leading-tight"
          >
            {/* USER COPY: Headline - preserve EXACTLY */}
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-muted max-w-lg"
          >
            {/* USER COPY: Subheadline */}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <Button size="lg">
              {/* USER COPY: Primary CTA */}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="ghost" size="lg">
              {/* USER COPY: Secondary CTA (optional) */}
            </Button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-6">
            <div className="flex -space-x-3">
              {/* Avatar stack - replace with actual images */}
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-surface border-2 border-background" />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted">
                {/* USER COPY: Social proof text */}
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Add hero image/visual here */}
          <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl" />
          
          {/* Floating elements for visual interest */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}

// ==================== FEATURES SECTION ====================
function Features() {
  // Replace with user's actual features
  const features = [
    { icon: Shield, title: 'Feature 1', description: 'Description' },
    { icon: Clock, title: 'Feature 2', description: 'Description' },
    { icon: Users, title: 'Feature 3', description: 'Description' },
  ]
  
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-display">
            {/* USER COPY: Section headline */}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted mt-4 max-w-2xl mx-auto">
            {/* USER COPY: Section subheadline */}
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ==================== TESTIMONIALS SECTION ====================
function Testimonials() {
  // Replace with user's actual testimonials
  const testimonials = [
    { quote: '', name: '', title: '', avatar: '' },
  ]
  
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display">
            {/* USER COPY: Testimonial section headline */}
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-surface rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted/20" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-muted">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== CTA SECTION ====================
function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-primary text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-display mb-6">
          {/* USER COPY: Final CTA headline */}
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl opacity-90 mb-8">
          {/* USER COPY: Final CTA subheadline */}
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Button 
            size="xl" 
            className="bg-white text-primary hover:bg-white/90"
          >
            {/* USER COPY: Final CTA button */}
          </Button>
        </motion.div>
        <motion.p variants={fadeInUp} className="text-sm opacity-70 mt-6">
          {/* USER COPY: Guarantee/risk reversal text */}
        </motion.p>
      </motion.div>
    </section>
  )
}

// ==================== MAIN PAGE ====================
export default function FunnelPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Features />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}
