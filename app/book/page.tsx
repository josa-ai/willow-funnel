'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Video, MessageCircle } from 'lucide-react'

export default function BookPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-background px-6 md:px-8 py-10 md:py-14 paper-texture relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let&apos;s Talk About Your Team
          </motion.h1>
          <motion.div
            className="prose-funnel space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>You&apos;ve taken the diagnostic.</p>
            <p>You know where the gaps are.</p>
            <p className="font-medium text-text">
              Now let&apos;s explore whether the MVP Retreat is the right next step for your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We'll Cover */}
      <section className="bg-surface-warm px-6 md:px-8 py-10 md:py-14">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl mb-8">Here&apos;s what we&apos;ll cover on this 30-minute call:</h2>

            <div className="space-y-4">
              <CoverItem icon={<ArrowRight />}>
                Where your Vision, Mission, and Purpose currently stand
              </CoverItem>
              <CoverItem icon={<ArrowRight />}>
                The specific alignment gaps showing up on your team
              </CoverItem>
              <CoverItem icon={<ArrowRight />}>
                What a customized MVP Retreat could look like for your organization
              </CoverItem>
              <CoverItem icon={<ArrowRight />}>
                Whether this is the right fit (and the right timing) for you
              </CoverItem>
            </div>

            <div className="mt-10 card-elevated space-y-4">
              <p className="text-xl font-display text-gold">No pitch.</p>
              <p className="text-xl font-display text-gold">No pressure.</p>
              <p className="text-text">
                Just an honest conversation about what your team needs... and whether we&apos;re the right people to help.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="bg-cream px-6 md:px-8 py-10 md:py-14">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl mb-4">Choose a time below:</h2>
          </motion.div>

          {/* Calendar Placeholder */}
          <motion.div
            className="card-elevated border-2 border-dashed border-gold/30 p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-gold" />
            </div>
            <p className="text-xl font-display text-primary-dark mb-2">Calendar Booking Widget</p>
            <p className="text-text-muted mb-6">
              Calendly or Cal.com embed will go here
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>30 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-gold" />
                <span>Video call</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-gold" />
                <span>Discovery conversation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* After You Book */}
      <section className="bg-background px-6 md:px-8 py-10 md:py-14 paper-texture relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl mb-8">After you book:</h2>

            <div className="prose-funnel space-y-4 mb-12">
              <p>
                You&apos;ll get a confirmation email with the call details.
              </p>
              <p>
                We&apos;ll also send a short prep questionnaire so we can make the most of our time together.
              </p>
            </div>

            {/* Shanae' Signature */}
            <div className="card-elevated">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Image
                  src="/shanae.jpg"
                  alt="Shanae'"
                  width={120}
                  height={120}
                  className="rounded-full w-24 h-24 object-cover ring-4 ring-gold/20"
                />
                <div className="text-center sm:text-left">
                  <p className="text-xl font-display text-primary-dark mb-2">
                    Looking forward to connecting.
                  </p>
                  <p className="text-2xl font-display text-gold">– Shanae&apos;</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function CoverItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <motion.div
      className="flex items-start gap-4 p-5 bg-cream rounded-xl border border-sage-light/20 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-6 h-6 text-gold shrink-0 mt-0.5">
        {icon}
      </div>
      <p className="text-lg text-text">{children}</p>
    </motion.div>
  )
}
