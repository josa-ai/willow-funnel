// Go High Level Webhook Configuration
// Add your webhook URL in .env.local file:
// NEXT_PUBLIC_GHL_WEBHOOK_URL=your_webhook_url_here

export const GHL_WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || ''

// Quiz result type - currently only "MVP Drift" is used
export const QUIZ_RESULT_TYPE = 'MVP Drift'
