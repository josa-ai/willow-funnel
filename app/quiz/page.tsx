'use client'

import { motion } from 'framer-motion'
import { Target, Compass, Flame } from 'lucide-react'
import { Quiz } from '@/components/Quiz'

export default function QuizPage() {
  return (
    <>
      {/* Quiz Header - darker beige with linen texture */}
      <section className="bg-surface-hero px-6 md:px-8 pt-8 pb-6 texture-linen relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            The MVP Alignment Diagnostic
          </motion.h1>
          <motion.p
            className="text-xl text-text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Answer 10 questions to discover where Vision, Mission, and Purpose have drifted apart on your leadership team.
          </motion.p>
        </div>
      </section>

      {/* How It Works - sage background */}
      <section className="bg-surface-sage px-6 md:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-6 prose-funnel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-display text-primary-dark">Here&apos;s how this works.</h2>
            <p>
              Most leadership teams don&apos;t realize WHERE the breakdown is happening.
            </p>
            <p>
              They just know things feel... scattered.
            </p>
            <p className="font-medium text-text">
              This diagnostic will help you pinpoint the gaps.
            </p>
          </motion.div>

          {/* MVP Framework */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-elevated text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg text-primary-dark mb-2">Vision</h3>
              <p className="text-text-muted text-sm">The destination. Where you&apos;re going.</p>
            </div>
            <div className="card-elevated text-center">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Compass className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-lg text-primary-dark mb-2">Mission</h3>
              <p className="text-text-muted text-sm">The path. What you&apos;re doing to get there.</p>
            </div>
            <div className="card-elevated text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Flame className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg text-primary-dark mb-2">Purpose</h3>
              <p className="text-text-muted text-sm">The fuel. Why it matters to each person.</p>
            </div>
          </motion.div>

          {/* What Happens When Aligned */}
          <motion.div
            className="mt-10 space-y-4 prose-funnel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>When those three are aligned?</p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span>Leadership feels clear.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span>Teams move together.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span>Decisions get easier.</span>
              </li>
            </ul>
            <p>When they drift?</p>
            <p className="font-medium text-text">
              Even talented people end up working at cross purposes.
            </p>
          </motion.div>

          {/* Instructions */}
          <motion.div
            className="mt-10 p-6 card-elevated"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-lg text-text mb-4">
              <strong>Answer these 10 questions honestly.</strong>
            </p>
            <p className="text-text-muted">
              There are no right or wrong answers.
            </p>
            <p className="text-text-muted">
              Just click what feels most true for your team right now.
            </p>
            <p className="text-text-muted mt-4">
              You&apos;ll see your results immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Section - cream background (closest to white) */}
      <section className="bg-cream px-6 md:px-8 py-10 md:py-14 relative overflow-hidden">
        <Quiz />
      </section>
    </>
  )
}
