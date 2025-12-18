'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Target, Compass, Flame, Mail } from 'lucide-react'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { clearQuizData } from '@/lib/quiz-storage'

export default function ResultsPage() {
  // Clear quiz data from sessionStorage on mount
  useEffect(() => {
    clearQuizData()
  }, [])

  return (
    <>
      {/* Result Header - with linen texture */}
      <section className="bg-background px-6 md:px-8 py-10 md:py-14 texture-linen relative overflow-hidden">
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
            Your Result: The MVP Drift
          </motion.h1>
        </div>
      </section>

      {/* Diagnosis */}
      <Section background="white">
        <div className="max-w-3xl mx-auto prose-funnel space-y-6">
          <p>
            Your organization has <strong>Vision</strong>.
          </p>
          <p>
            You know where you want to go.
          </p>
          <p>
            You have <strong>Mission</strong>.
          </p>
          <p>
            You know what you&apos;re supposed to be doing.
          </p>
          <p className="text-xl font-display text-primary-dark pt-4">
            But somewhere along the way...
          </p>
          <p className="text-xl font-display text-primary-dark">
            Those two started drifting apart.
          </p>
          <p className="pt-4">
            And when Vision and Mission aren&apos;t tightly aligned...
          </p>
          <p className="font-medium text-text">
            Purpose — the fuel that keeps your leaders going — runs dry.
          </p>
        </div>
      </Section>

      {/* Real Time Impact - gray background with noise texture */}
      <Section background="gray" texture="noise">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl mb-8">Here&apos;s what that looks like in real time:</h2>
          <div className="space-y-4">
            <ImpactItem>
              Leaders working hard... but not always toward the same destination
            </ImpactItem>
            <ImpactItem>
              Departments executing on mission... but interpreting it differently
            </ImpactItem>
            <ImpactItem>
              Talented people burning out... because they&apos;ve lost sight of why it matters
            </ImpactItem>
          </div>
          <div className="mt-10 prose-funnel space-y-4">
            <p className="text-xl font-display text-primary-dark">
              This isn&apos;t about effort.
            </p>
            <p>
              Your team is full of capable, committed people.
            </p>
            <p>
              But without intentional space to realign Vision, Mission, and Purpose...
            </p>
            <p className="font-medium text-text">
              The drift widens.
            </p>
          </div>
        </div>
      </Section>

      {/* What Happens When MVP Drifts - warm background */}
      <Section background="warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4">What Happens When MVP Drifts?</h2>
          <p className="text-center text-text-muted text-xl mb-12">Let&apos;s break it down.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <DriftCard
              icon={<Target className="w-8 h-8" />}
              title="When Vision isn't clear..."
              points={[
                "People don't know where they're going.",
                "Decisions feel arbitrary.",
                "Strategic conversations loop without resolution.",
                "Teams default to urgency instead of intentionality."
              ]}
              color="primary"
            />

            {/* Mission */}
            <DriftCard
              icon={<Compass className="w-8 h-8" />}
              title="When Mission isn't aligned..."
              points={[
                "Departments work in silos.",
                "Execution becomes fragmented.",
                "Coordination takes twice as long.",
                "And nobody's sure if they're all walking the same path."
              ]}
              color="accent"
            />

            {/* Purpose */}
            <DriftCard
              icon={<Flame className="w-8 h-8" />}
              title="When Purpose runs dry..."
              points={[
                "Leaders lose their connection to \"why.\"",
                "Burnout creeps in.",
                "Meetings feel transactional.",
                "And the people who care most... start carrying weight they can't sustain."
              ]}
              color="primary"
            />
          </div>

          <div className="mt-12 prose-funnel space-y-4 text-center">
            <p className="text-xl font-display text-primary-dark">
              Over time, this compounds.
            </p>
            <p>Communication breaks down.</p>
            <p>Trust erodes.</p>
            <p>And even strong organizations start operating on autopilot.</p>
            <p className="pt-4">
              We&apos;ve seen it happen to mission-driven teams led by deeply committed people.
            </p>
            <p>
              Not because they lacked talent or vision.
            </p>
            <p className="font-medium text-text">
              But because they didn&apos;t create space to realign.
            </p>
          </div>
        </div>
      </Section>

      {/* What's Possible */}
      <Section background="primary">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            What&apos;s Possible When Leaders Realign Vision, Mission &amp; Purpose?
          </h2>
          <p className="text-2xl text-white/90 mb-10">Imagine this.</p>

          <div className="text-left space-y-6 text-white/90 text-lg">
            <p>Your next leadership meeting.</p>
            <p>
              Instead of surface-level updates and scattered priorities...
            </p>
            <p className="text-white font-medium">
              You&apos;re having real conversations.
            </p>
            <div className="pl-6 space-y-2">
              <p>About where you&apos;re going. <span className="text-accent-light">(Vision)</span></p>
              <p>About how you&apos;re getting there. <span className="text-accent-light">(Mission)</span></p>
              <p>About why it matters to each person in the room. <span className="text-accent-light">(Purpose)</span></p>
            </div>
            <p className="pt-4">
              Your team isn&apos;t just busy.
            </p>
            <p className="text-white font-medium">
              They&apos;re moving in the same direction.
            </p>
            <p>With clarity.</p>
            <p>With trust.</p>
            <p>
              Decisions feel grounded... because they&apos;re anchored in shared understanding.
            </p>
            <p>
              Communication flows... because everyone knows the destination AND the path.
            </p>
            <p className="pt-4">And your leaders?</p>
            <p className="text-white font-medium">
              They&apos;re reconnected to their why.
            </p>
            <p>Not running on fumes.</p>
            <p className="text-accent-light text-xl font-medium pt-2">
              Fueled by purpose.
            </p>
            <p className="pt-6 text-white font-medium text-xl">
              That&apos;s what happens when Vision, Mission, and Purpose are aligned.
            </p>
            <p className="text-white text-xl">
              And that&apos;s exactly what the MVP Retreat is designed to create.
            </p>
          </div>
        </div>
      </Section>

      {/* Introducing the MVP Retreat */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-medium text-lg mb-4">Introducing</p>
          <h2 className="text-4xl md:text-5xl mb-6">The MVP Retreat</h2>
          <p className="text-xl text-text-muted mb-10">
            A two-day executive leadership experience designed to help your team pause, realign Vision/Mission/Purpose, and rise.
          </p>

          <div className="text-left prose-funnel space-y-6">
            <h3 className="text-2xl font-display text-primary-dark">Here&apos;s how it works.</h3>
            <p>We don&apos;t come in with a cookie-cutter agenda.</p>
            <p>We start by understanding YOUR organization.</p>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                <span>What&apos;s the Vision? Where are you headed?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                <span>What&apos;s the Mission? What path are you walking?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                <span>What&apos;s the Purpose? What fuels your people?</span>
              </li>
            </ul>
            <p>
              Then we create space — intentional, facilitated, reflective space — for your leaders to:
            </p>
          </div>

          {/* What You'll Do */}
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            <OutcomeCard icon={<Check />}>
              Clarify the Vision — rebuild shared understanding of the destination
            </OutcomeCard>
            <OutcomeCard icon={<Check />}>
              Align the Mission — ensure every department/program knows how their work connects
            </OutcomeCard>
            <OutcomeCard icon={<Check />}>
              Reignite Purpose — help leaders reconnect to their personal &quot;why&quot;
            </OutcomeCard>
            <OutcomeCard icon={<Check />}>
              Strengthen Trust — deepen collaboration and rebuild relational capacity
            </OutcomeCard>
          </div>

          <div className="mt-12 prose-funnel space-y-4 text-left">
            <p className="text-xl font-display text-primary-dark">
              This isn&apos;t a typical strategic planning session.
            </p>
            <p>It&apos;s a transformative leadership experience.</p>
            <p>Grounded in wellness.</p>
            <p>Rooted in purpose.</p>
            <p className="font-medium text-text">
              Designed for leaders who are serious about building something sustainable.
            </p>
          </div>
        </div>
      </Section>

      {/* What You'll Walk Away With - sage green with grain texture */}
      <Section background="sage" texture="grain">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4">What You&apos;ll Walk Away With</h2>
          <p className="text-center text-text-muted text-lg mb-10">By the end of the retreat, your team will have:</p>

          <div className="space-y-4">
            <WalkAwayItem>
              A Shared Vision Statement — a unifying picture of where you&apos;re going
            </WalkAwayItem>
            <WalkAwayItem>
              Core Priorities &amp; Strategic Focus Areas — clear, mission-aligned goals
            </WalkAwayItem>
            <WalkAwayItem>
              A Roadmap — defined actions, timelines, and responsibilities across departments
            </WalkAwayItem>
            <WalkAwayItem>
              Renewed Trust &amp; Collaboration — stronger relationships among your leadership team
            </WalkAwayItem>
            <WalkAwayItem>
              Reconnection to Purpose — leaders who remember why this work matters
            </WalkAwayItem>
          </div>

          <div className="mt-12 text-center prose-funnel">
            <p className="text-xl font-display text-primary-dark mb-4">
              And most importantly...
            </p>
            <p className="text-2xl font-display text-accent">
              A culture shift.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <ShiftCard from="Reactive" to="Reflective" />
              <ShiftCard from="Siloed" to="Collaborative" />
              <ShiftCard from="Scattered" to="Aligned" />
            </div>
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
                <span>Where the gaps in alignment exist</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-3 shrink-0" />
                <span>Whether the MVP Retreat is the right next step for your organization</span>
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

function ImpactItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex items-start gap-4 p-4 card-elevated"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <ArrowRight className="w-5 h-5 text-gold shrink-0 mt-0.5" />
      <p className="text-lg text-text">{children}</p>
    </motion.div>
  )
}

function DriftCard({
  icon,
  title,
  points,
  color,
}: {
  icon: React.ReactNode
  title: string
  points: string[]
  color: 'primary' | 'accent'
}) {
  const colorClasses = color === 'primary'
    ? 'bg-primary/10 text-primary'
    : 'bg-gold/10 text-gold'

  return (
    <motion.div
      className="card-elevated"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-14 h-14 rounded-full ${colorClasses} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="font-display text-lg text-primary-dark mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-text-muted">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.div>
  )
}

function OutcomeCard({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <motion.div
      className="flex items-start gap-3 p-5 card-elevated text-left"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center shrink-0">
        {icon}
      </div>
      <p className="text-text">{children}</p>
    </motion.div>
  )
}

function WalkAwayItem({ children }: { children: React.ReactNode }) {
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

function ShiftCard({ from, to }: { from: string; to: string }) {
  return (
    <div className="card-elevated text-center">
      <p className="text-text-muted text-sm">From</p>
      <p className="text-text-light line-through">{from}</p>
      <p className="text-text-muted text-sm mt-2">to</p>
      <p className="text-gold font-medium">{to}</p>
    </div>
  )
}
