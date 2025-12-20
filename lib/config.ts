// Go High Level Webhook Configuration
// Add your webhook URL in .env.local file:
// NEXT_PUBLIC_GHL_WEBHOOK_URL=your_webhook_url_here

export const GHL_WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || ''

// Quiz result types based on score
export const QUIZ_RESULTS = {
  MVP_DRIFT: 'MVP Drift',
  MAINTENANCE_MODE: 'Maintenance Mode',
} as const

// Score threshold: 31+ points = Maintenance Mode, 30 or below = MVP Drift
export const MAINTENANCE_MODE_THRESHOLD = 31

// Get result type based on total score
export function getResultType(totalScore: number): string {
  return totalScore >= MAINTENANCE_MODE_THRESHOLD
    ? QUIZ_RESULTS.MAINTENANCE_MODE
    : QUIZ_RESULTS.MVP_DRIFT
}

// Get result page route based on total score
export function getResultRoute(totalScore: number): string {
  return totalScore >= MAINTENANCE_MODE_THRESHOLD
    ? '/results/maintenance'
    : '/results'
}
