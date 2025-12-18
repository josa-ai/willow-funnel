'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { quizQuestions } from '@/lib/quiz-data'
import { Button } from '@/components/Button'
import { saveQuizData } from '@/lib/quiz-storage'

export function Quiz() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [answerTexts, setAnswerTexts] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const question = quizQuestions[currentQuestion]
  const totalQuestions = quizQuestions.length
  const progress = ((currentQuestion) / totalQuestions) * 100

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex)
  }

  const handleNext = () => {
    if (selectedOption === null) return

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = question.options[selectedOption].score
    setAnswers(newAnswers)

    // Also store the answer text for webhook payload
    const newAnswerTexts = [...answerTexts]
    newAnswerTexts[currentQuestion] = question.options[selectedOption].text
    setAnswerTexts(newAnswerTexts)

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(answers[currentQuestion + 1] !== undefined
        ? question.options.findIndex(o => o.score === answers[currentQuestion + 1])
        : null)
    } else {
      // Quiz complete - save answers to sessionStorage and redirect to email capture
      const answersPayload: Record<string, string> = {}
      newAnswerTexts.forEach((text, index) => {
        answersPayload[`question_${index + 1}`] = text
      })
      saveQuizData(answersPayload)
      router.push('/capture')
    }

    setSelectedOption(null)
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      // Restore previous answer
      const prevAnswer = answers[currentQuestion - 1]
      if (prevAnswer !== undefined) {
        const prevQuestion = quizQuestions[currentQuestion - 1]
        const optionIndex = prevQuestion.options.findIndex(o => o.score === prevAnswer)
        setSelectedOption(optionIndex)
      }
    }
  }

  const isLastQuestion = currentQuestion === totalQuestions - 1

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-text-muted mb-2">
          <span>Question {currentQuestion + 1} of {totalQuestions}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-display text-primary-dark mb-8">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200
                  ${selectedOption === index
                    ? 'border-primary bg-primary/5 text-primary-dark'
                    : 'border-border bg-white hover:border-primary/50 hover:bg-surface-warm'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0
                      ${selectedOption === index
                        ? 'border-primary bg-primary'
                        : 'border-text-light'
                      }
                    `}
                  >
                    {selectedOption === index && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-lg">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-10">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all
            ${currentQuestion === 0
              ? 'text-text-light cursor-not-allowed'
              : 'text-text-muted hover:text-primary'
            }
          `}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <Button
          onClick={handleNext}
          disabled={selectedOption === null}
          variant="primary"
          size="md"
        >
          {isLastQuestion ? 'SUBMIT & SEE MY RESULTS' : 'Next'}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
