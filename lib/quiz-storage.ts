// Session storage keys
const QUIZ_DATA_KEY = 'willow_quiz_data'

export interface QuizData {
  answers: Record<string, string> // question_1: "answer text", etc.
  totalScore: number // Sum of all answer scores (10-50 range)
  timestamp: string
}

/**
 * Save quiz answers to sessionStorage
 * @param answers - Object with question keys and answer text values
 * @param totalScore - Sum of all answer scores
 */
export function saveQuizData(answers: Record<string, string>, totalScore: number): void {
  if (typeof window === 'undefined') return

  const data: QuizData = {
    answers,
    totalScore,
    timestamp: new Date().toISOString(),
  }

  try {
    sessionStorage.setItem(QUIZ_DATA_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Failed to save quiz data to sessionStorage:', error)
  }
}

/**
 * Retrieve quiz data from sessionStorage
 * @returns QuizData object or null if not found
 */
export function getQuizData(): QuizData | null {
  if (typeof window === 'undefined') return null

  try {
    const stored = sessionStorage.getItem(QUIZ_DATA_KEY)
    if (!stored) return null
    return JSON.parse(stored) as QuizData
  } catch (error) {
    console.error('Failed to retrieve quiz data from sessionStorage:', error)
    return null
  }
}

/**
 * Clear quiz data from sessionStorage
 * Call this after results page has loaded
 */
export function clearQuizData(): void {
  if (typeof window === 'undefined') return

  try {
    sessionStorage.removeItem(QUIZ_DATA_KEY)
  } catch (error) {
    console.error('Failed to clear quiz data from sessionStorage:', error)
  }
}

/**
 * Check if quiz data exists in sessionStorage
 */
export function hasQuizData(): boolean {
  if (typeof window === 'undefined') return false

  try {
    return sessionStorage.getItem(QUIZ_DATA_KEY) !== null
  } catch {
    return false
  }
}
