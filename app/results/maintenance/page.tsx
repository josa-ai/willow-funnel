'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Target, Compass, Flame, Mail } from 'lucide-react'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { clearQuizData } from '@/lib/quiz-storage'

export default function MaintenanceModeResultsPage() {
  // Clear quiz data from sessionStorage on mount
  useEffect(() => {
    clearQuizData()
  }, [])

  return (
    <>
      {/* Result Header - darker beige with linen texture */}
      <section className="bg-surface-hero px-6 md:px-8 py-10 md:py-14 texture-linen relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.p
            className="text-gold font-medium text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Based on your responses, here&apos;s what we&apos;re seeing.
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your Diagnosis: Maintenance Mode
          </motion.h1>
          <motion.p
            className="text-xl text-text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            You&apos;ve done a great job providing clarity and inspiration to your team.
          </motion.p>
          <motion.p
            className="text-xl text-text-muted mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            But even high-performing teams need regular alignment.
          </motion.p>
        </div>
      </section>

      {/* What Your Results Tell Us */}
      <Section background="white">
        <div className="max-w-3xl mx-auto prose-funnel space-y-6">
          <h2 className="text-2xl md:text-3xl font-display text-primary-dark mb-6">
            Here&apos;s What Your Results Tell Us:
          </h2>
          <p>
            Your <strong>Vision</strong> is clear.
          </p>
          <p>
            Your <strong>Mission</strong> is defined.
          </p>
          <p>
            Your <strong>Purpose</strong> is felt.
          </p>
          <p className="text-xl font-display text-primary-dark pt-4">
            You&apos;ve built something strong.
          </p>
          <p>
            Your team knows where they&apos;re headed... why it matters... and what they&apos;re working toward.
          </p>
          <p>
            That&apos;s NOT easy to achieve.
          </p>
          <p className="font-medium text-text">
            And it puts you ahead of most leadership teams.
          </p>
          <p className="pt-4 text-xl font-display text-primary-dark">
            But here&apos;s the thing...
          </p>
          <p className="font-medium text-accent text-xl">
            Even high-performing teams need MAINTENANCE.
          </p>
        </div>
      </Section>

      {/* Why Alignment Isn't One and Done - gray background with noise texture */}
      <Section background="gray" texture="noise">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl mb-8">Why Alignment Isn&apos;t a &quot;One and Done&quot; Thing</h2>
          <div className="prose-funnel space-y-4">
            <p>Over time, things shift.</p>
            <p>New people join the team.</p>
            <p>Priorities evolve.</p>
            <p>Market conditions change.</p>
            <p className="pt-4 font-medium text-text">
              And slowly... that original alignment starts to fade.
            </p>
            <p className="pt-4">
              It&apos;s not a crisis.
            </p>
            <p className="text-xl font-display text-primary-dark">
              It&apos;s just drift.
            </p>
            <p className="pt-4">
              Like when the steering wheel on your car starts vibrating.
            </p>
            <p>
              Everything still WORKS.
            </p>
            <p>
              But you know something&apos;s off.
            </p>
            <p className="pt-4 font-medium text-text">
              And if you ignore it?
            </p>
            <p>
              That small drift becomes a bigger problem down the road.
            </p>
            <p className="pt-4 text-xl font-display text-primary-dark">
              You don&apos;t wait until the wheels fall off to get an alignment.
            </p>
            <p className="font-medium text-accent">
              You do it PROACTIVELY.
            </p>
            <p className="pt-4">
              Because you know maintaining performance is easier than rebuilding it.
            </p>
          </div>
        </div>
      </Section>

      {/* MVP Retreat for Maintenance - warm background */}
      <Section background="warm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">The MVP Retreat: Maintenance for High-Impact Teams</h2>
            <p className="text-xl text-text-muted">
              The MVP Retreat isn&apos;t just for &quot;broken&quot; teams.
            </p>
            <p className="text-xl font-medium text-text mt-2">
              It&apos;s the maintenance work every high-impact team requires to stay on track.
            </p>
          </div>

          <div className="prose-funnel space-y-4 mb-10">
            <p className="text-lg">A chance to:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <MaintenanceCard
              icon={<Target className="w-8 h-8" />}
              title="Recalibrate your Vision"
              description="Is it still the right destination?"
              color="primary"
            />

            {/* Mission */}
            <MaintenanceCard
              icon={<Compass className="w-8 h-8" />}
              title="Reconnect to your Mission"
              description="Are you still executing the right way?"
              color="accent"
            />

            {/* Purpose */}
            <MaintenanceCard
              icon={<Flame className="w-8 h-8" />}
              title="Reaffirm your Purpose"
              description="Does everyone still feel WHY this matters?"
              color="primary"
            />
          </div>

          <div className="mt-12 prose-funnel space-y-4 text-center">
            <p className="text-xl font-display text-primary-dark">
              Think of it as your team&apos;s annual alignment check.
            </p>
            <p>
              A dedicated space to step back from the day-to-day grind...
            </p>
            <p className="font-medium text-text">
              And make sure everyone&apos;s still rowing in the same direction.
            </p>
          </div>
        </div>
      </Section>

      {/* What Happens During the Retreat */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-10">What Happens During the Retreat?</h2>

          <div className="prose-funnel space-y-6 mb-12">
            <p className="text-lg">
              The MVP Retreat is a facilitated 2-day experience designed to strengthen the alignment you&apos;ve already built.
            </p>
          </div>

          {/* Day 1 */}
          <div className="card-elevated mb-6">
            <h3 className="text-xl font-display text-primary-dark mb-4">Day 1: Vision &amp; Mission</h3>
            <p className="text-text-muted mb-4">We&apos;ll work through:</p>
            <ul className="space-y-3">
              <RetreatItem>Whether your current Vision still reflects where you want to go</RetreatItem>
              <RetreatItem>How well your Mission (your strategy and execution) supports that Vision</RetreatItem>
              <RetreatItem>Where small gaps or drift have started to appear</RetreatItem>
              <RetreatItem>How to realign your team around a shared destination</RetreatItem>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="card-elevated mb-10">
            <h3 className="text-xl font-display text-primary-dark mb-4">Day 2: Purpose &amp; Integration</h3>
            <p className="text-text-muted mb-4">We&apos;ll focus on:</p>
            <ul className="space-y-3">
              <RetreatItem>Reconnecting your team to the WHY behind the work</RetreatItem>
              <RetreatItem>Making sure Purpose isn&apos;t just a poster on the wall... but something people FEEL</RetreatItem>
              <RetreatItem>Building rituals and practices to maintain alignment long after the retreat ends</RetreatItem>
            </ul>
          </div>

          {/* What You'll Leave With */}
          <div className="prose-funnel mb-8">
            <p className="text-lg font-medium text-text">You&apos;ll leave with:</p>
          </div>

          <div className="space-y-3">
            <OutcomeItem>A refreshed, recalibrated Vision that everyone owns</OutcomeItem>
            <OutcomeItem>A clear Mission that supports where you&apos;re actually headed</OutcomeItem>
            <OutcomeItem>A renewed sense of Purpose that keeps your team engaged and inspired</OutcomeItem>
            <OutcomeItem>A maintenance plan to prevent future drift</OutcomeItem>
          </div>
        </div>
      </Section>

      {/* Is This Right for Your Team? - sage green with grain texture */}
      <Section background="sage" texture="grain">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-8">Is This Right for Your Team?</h2>

          <div className="prose-funnel space-y-4 mb-10">
            <p className="text-lg">
              The MVP Retreat is designed for leadership teams who:
            </p>
          </div>

          <div className="space-y-4">
            <FitItem>Have already done the hard work of building alignment</FitItem>
            <FitItem>Want to MAINTAIN that alignment as they scale</FitItem>
            <FitItem>Recognize that staying on track requires intentional effort</FitItem>
            <FitItem>Are willing to invest 2 days to prevent months of drift</FitItem>
          </div>

          <div className="mt-10 text-center prose-funnel">
            <p className="text-xl font-display text-primary-dark">
              If that sounds like you...
            </p>
            <p className="text-2xl font-display text-accent mt-2">
              Let&apos;s talk.
            </p>
          </div>
        </div>
      </Section>

      {/* Final CTA - with linen texture */}
      <Section background="default" texture="linen">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Explore What This Could Look Like for Your Team?
          </h2>
          <p className="text-xl text-text-muted mb-10">Let&apos;s start with a conversation.</p>

          <div className="prose-funnel space-y-4 mb-10 text-left md:text-center">
            <p className="font-medium text-text">No pitch. No pressure.</p>
            <p>Just a candid discussion about:</p>
            <ul className="space-y-2 list-none pl-0 inline-block text-left">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-3 shrink-0" />
                <span>Where your Vision, Mission, and Purpose currently stand</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-3 shrink-0" />
                <span>Whether periodic alignment work makes sense for your team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-3 shrink-0" />
                <span>What the MVP Retreat could look like for your organization</span>
              </li>
            </ul>
          </div>

          {/* Shanae' Card */}
          <div className="card-elevated p-8 md:p-10 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                src="/shanae.jpg"
                alt="Shanae'"
                width={160}
                height={160}
                className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover"
              />
              <div className="text-center md:text-left">
                <p className="text-lg text-text-muted mb-4">
                  Book a 30-minute discovery call below.
                </p>
                <p className="text-text">
                  We&apos;ll talk through your team&apos;s unique situation.
                </p>
                <p className="text-text">
                  And if it&apos;s a fit... we&apos;ll map out what the retreat could look like for you.
                </p>
              </div>
            </div>
          </div>

          <Button href="/book" variant="gold" size="lg">
            BOOK YOUR DISCOVERY CALL
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-text-muted text-sm mt-6">
            This is a no-pressure conversation. We&apos;re here to explore whether this is the right solution for your team.
          </p>
        </div>
      </Section>

      {/* Check Your Inbox */}
      <Section background="warm">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Mail className="w-8 h-8 text-gold" />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Want the Full MVP Alignment Toolkit?
          </motion.h2>
          <motion.div
            className="prose-funnel space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg">
              We just sent your results to your inbox.
            </p>
            <p className="text-text-muted">
              But we&apos;ve also created a free guide with exercises, frameworks, and next steps to help you start realigning your team.
            </p>
            <p className="text-xl font-display text-primary-dark pt-4">
              It&apos;s waiting for you in your email.
            </p>
            <p className="text-text-muted pt-2">
              Check your inbox now (and your spam folder, just in case).
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  )
}

function MaintenanceCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: 'primary' | 'accent'
}) {
  const colorClasses = color === 'primary'
    ? 'bg-primary/10 text-primary'
    : 'bg-gold/10 text-gold'

  return (
    <motion.div
      className="card-elevated text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-14 h-14 rounded-full ${colorClasses} flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="font-display text-lg text-primary-dark mb-2">{title}</h3>
      <p className="text-text-muted">{description}</p>
    </motion.div>
  )
}

function RetreatItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <ArrowRight className="w-5 h-5 text-gold shrink-0 mt-0.5" />
      <span className="text-text">{children}</span>
    </li>
  )
}

function OutcomeItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex items-start gap-3 p-4 card-elevated"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center shrink-0">
        <Check className="w-4 h-4" />
      </div>
      <p className="text-text">{children}</p>
    </motion.div>
  )
}

function FitItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex items-start gap-4 p-5 card-elevated"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <ArrowRight className="w-5 h-5 text-gold shrink-0 mt-0.5" />
      <p className="text-lg text-text">{children}</p>
    </motion.div>
  )
}
