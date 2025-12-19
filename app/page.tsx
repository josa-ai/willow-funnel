'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Target, Compass, Flame } from 'lucide-react'
import Lottie from 'lottie-react'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionDivider } from '@/components/SectionDivider'
import oppositeDirections from '@/public/animations/opposite_directions.json'
import interpretation from '@/public/animations/interpretation.json'
import burnout from '@/public/animations/Burnout.json'

export default function HomePage() {
  return (
    <>
      {/* Hero Section - darker beige with linen texture */}
      <section className="min-h-[85vh] flex items-center bg-surface-hero px-6 md:px-8 py-12 md:py-16 texture-linen relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-balance mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Is Your Leadership Team Running on Empty?
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            When Vision, Mission, and Purpose drift apart... even the strongest teams start to fracture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Button href="/quiz" size="lg" variant="gold">
              Take the Free Quiz
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <SectionDivider fromColor="surface-hero" toColor="surface-gray" />

      {/* Pain Points Section - gray background with noise texture */}
      <Section background="gray" texture="noise">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Here&apos;s what that looks like:</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PainPointCard delay={0} animation={oppositeDirections}>
            Leaders working hard... but not always toward the same destination.
          </PainPointCard>
          <PainPointCard delay={0.1} animation={interpretation}>
            Departments executing on mission... but interpreting it differently.
          </PainPointCard>
          <PainPointCard delay={0.2} animation={burnout} animationHeight={96}>
            Talented, committed people burning out... because they&apos;ve lost sight of why it matters.
          </PainPointCard>
        </div>
      </Section>

      {/* This Isn't About Effort */}
      <Section background="default">
        <div className="max-w-3xl mx-auto">
          <div className="prose-funnel space-y-6">
            <p className="text-2xl md:text-3xl font-display text-primary-dark">
              This isn&apos;t about effort.
            </p>
            <p>
              Your team is <strong>FULL</strong> of capable, caring people.
            </p>
            <p>
              But without intentional space to realign...
            </p>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-3 shrink-0" />
                <span>The drift widens.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-3 shrink-0" />
                <span>Decisions feel harder.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-3 shrink-0" />
                <span>Communication breaks down.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-3 shrink-0" />
                <span>And the people who care most... start carrying weight they can&apos;t sustain.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Empathy Bridge - warm beige with grain texture */}
      <Section background="warm" texture="grain">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-display text-primary-dark mb-8">
            Sound familiar?
          </p>
          <p className="text-xl md:text-2xl text-primary font-medium mb-6">
            You&apos;re not alone.
          </p>
          <div className="prose-funnel space-y-6 text-left md:text-center">
            <p>
              We work with mission-driven organizations led by deeply committed leaders.
            </p>
            <p>
              And we see this pattern all the time.
            </p>
            <p>
              Not because teams lack talent or vision...
            </p>
            <p className="font-medium text-text">
              But because they haven&apos;t created space to pause, reflect, and realign.
            </p>
          </div>
        </div>
      </Section>

      {/* The Good News - sage green background */}
      <Section background="sage">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-display text-accent mb-6">
            The good news?
          </p>
          <p className="text-3xl md:text-4xl font-display text-primary-dark mb-10">
            This is addressable.
          </p>
          <p className="prose-funnel mb-12">
            And it starts with understanding WHERE the gaps in alignment actually are.
          </p>

          {/* MVP Framework Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <MVPCard
              icon={<Target className="w-8 h-8" />}
              title="Vision"
              question="Is it Vision clarity?"
              color="primary"
            />
            <MVPCard
              icon={<Compass className="w-8 h-8" />}
              title="Mission"
              question="Mission alignment?"
              color="accent"
            />
            <MVPCard
              icon={<Flame className="w-8 h-8" />}
              title="Purpose"
              question="Or Purpose disconnection?"
              color="primary"
            />
          </div>
        </div>
      </Section>

      {/* Quiz CTA Section */}
      <Section background="primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl mb-6">
            Take the 2-Minute MVP Diagnostic
          </h2>
          <p className="text-white/90 text-xl mb-4">
            Answer 10 quick questions about your team.
          </p>
          <p className="text-white/80 text-lg mb-10">
            And we&apos;ll show you exactly where the drift is happening...<br />
            And what it takes to close those gaps.
          </p>
          <Button href="/quiz" variant="gold" size="lg">
            TAKE THE FREE QUIZ
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-white/60 text-sm mt-6">
            No email required to see your results. Takes less than 2 minutes.
          </p>
        </div>
      </Section>
    </>
  )
}

function PainPointCard({
  children,
  delay,
  animation,
  animationHeight = 80
}: {
  children: React.ReactNode
  delay: number
  animation?: object
  animationHeight?: number
}) {
  return (
    <motion.div
      className="card-elevated"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <p className="text-lg text-text leading-relaxed">{children}</p>
      {animation && (
        <div className="mt-4 flex justify-center">
          <Lottie
            animationData={animation}
            loop={true}
            style={{ height: animationHeight, width: 'auto' }}
          />
        </div>
      )}
    </motion.div>
  )
}

function MVPCard({
  icon,
  title,
  question,
  color,
}: {
  icon: React.ReactNode
  title: string
  question: string
  color: 'primary' | 'accent'
}) {
  const colorClasses = color === 'primary'
    ? 'bg-primary/10 text-primary'
    : 'bg-accent/10 text-accent'

  return (
    <motion.div
      className="card-elevated text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className={`w-16 h-16 rounded-full ${colorClasses} flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-display text-primary-dark mb-2">{title}</h3>
      <p className="text-text-muted">{question}</p>
    </motion.div>
  )
}
