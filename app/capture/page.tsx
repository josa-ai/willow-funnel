'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2, Mail } from 'lucide-react'
import { Button } from '@/components/Button'
import { getQuizData, hasQuizData } from '@/lib/quiz-storage'
import { GHL_WEBHOOK_URL, QUIZ_RESULT_TYPE } from '@/lib/config'

export default function CapturePage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)

  // Check if user has quiz data, redirect if not
  useEffect(() => {
    if (!hasQuizData()) {
      router.push('/quiz')
    }
  }, [router])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate email
    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)

    // Get quiz data from sessionStorage
    const quizData = getQuizData()

    // Prepare webhook payload
    const payload = {
      email: email.trim(),
      quiz_result: QUIZ_RESULT_TYPE,
      timestamp: quizData?.timestamp || new Date().toISOString(),
      answers: quizData?.answers || {},
    }

    // Send to Go High Level webhook
    try {
      if (GHL_WEBHOOK_URL) {
        const response = await fetch(GHL_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          console.error('Webhook response not OK:', response.status)
        }
      } else {
        console.warn('GHL_WEBHOOK_URL is not configured. Skipping webhook.')
      }
    } catch (err) {
      // Log error but don't block user from seeing results
      console.error('Failed to send data to webhook:', err)
    }

    // Show redirecting state and navigate to results
    setIsSubmitting(false)
    setIsRedirecting(true)

    // Small delay for UX, then redirect
    setTimeout(() => {
      router.push('/results')
    }, 1000)
  }

  if (isRedirecting) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center bg-background px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-6" />
          <p className="text-xl font-display text-primary-dark">Generating your results...</p>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="min-h-[80vh] flex items-center bg-background px-6 md:px-8 py-10 md:py-14 paper-texture relative overflow-hidden">
      <div className="max-w-xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8">
            <Mail className="w-10 h-10 text-gold" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl mb-4">Almost Done!</h1>

          {/* Subheadline */}
          <p className="text-xl text-text-muted mb-8">
            Enter your email to unlock your personalized MVP Alignment results.
          </p>

          {/* Benefits */}
          <div className="card-elevated mb-8 text-left">
            <p className="text-text font-medium mb-4">We&apos;ll send you:</p>
            <ul className="space-y-3">
              <BenefitItem>Your full diagnostic breakdown</BenefitItem>
              <BenefitItem>Insights on where Vision, Mission, and Purpose have drifted</BenefitItem>
              <BenefitItem>A roadmap for what to do next</BenefitItem>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError('')
                }}
                placeholder="your@email.com"
                className={`w-full px-6 py-4 rounded-xl border-2 bg-cream text-lg shadow-card
                  focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all
                  ${error
                    ? 'border-red-400 focus:border-red-400'
                    : 'border-border focus:border-gold'
                  }
                `}
                disabled={isSubmitting}
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 text-left">{error}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  SEE MY RESULTS
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          {/* Privacy text */}
          <p className="text-text-muted text-sm mt-6">
            We respect your inbox. No spam. Just helpful insights on leadership alignment.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function BenefitItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <ArrowRight className="w-5 h-5 text-gold shrink-0 mt-0.5" />
      <span className="text-text">{children}</span>
    </li>
  )
}
