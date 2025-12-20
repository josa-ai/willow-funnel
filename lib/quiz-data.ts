export interface QuizQuestion {
  id: number
  question: string
  options: {
    text: string
    score: number
  }[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Does your leadership team have a clear, shared picture of where the organization is headed?",
    options: [
      { text: "Yes. Everyone can articulate it.", score: 5 },
      { text: "Mostly. Some interpretations vary.", score: 4 },
      { text: "Unclear. People have different ideas.", score: 2 },
      { text: "No. We need to rebuild that foundation.", score: 1 },
    ],
  },
  {
    id: 2,
    question: "When was the last time your team paused to clarify or revisit your organizational vision?",
    options: [
      { text: "Within the last 3 months", score: 5 },
      { text: "Within the last 6 months", score: 4 },
      { text: "Over a year ago", score: 2 },
      { text: "Can't remember", score: 1 },
    ],
  },
  {
    id: 3,
    question: "How well does your team understand the connection between their daily work and the organization's broader mission?",
    options: [
      { text: "Crystal clear. Everyone sees how their work connects.", score: 5 },
      { text: "Mostly clear, but some gaps exist.", score: 4 },
      { text: "Unclear. People know their tasks but not the bigger picture.", score: 2 },
      { text: "Disconnected. The link isn't obvious.", score: 1 },
    ],
  },
  {
    id: 4,
    question: "How aligned are your departments/programs when it comes to executing on the mission?",
    options: [
      { text: "Highly aligned. We coordinate well.", score: 5 },
      { text: "Somewhat aligned, but silos exist.", score: 4 },
      { text: "Fragmented. Everyone's doing their own thing.", score: 2 },
      { text: "Unclear. We haven't defined how we work together.", score: 1 },
    ],
  },
  {
    id: 5,
    question: "How connected do your leaders feel to their personal \"why\" for doing this work?",
    options: [
      { text: "Deeply connected. It fuels them.", score: 5 },
      { text: "Somewhat connected, but the day-to-day clouds it.", score: 4 },
      { text: "Disconnected. They're running on autopilot.", score: 2 },
      { text: "Burned out. The why is buried.", score: 1 },
    ],
  },
  {
    id: 6,
    question: "How would you describe the culture among your leadership team?",
    options: [
      { text: "Purpose-driven and collaborative", score: 5 },
      { text: "Functional but strained", score: 3 },
      { text: "Fragmented and stressed", score: 2 },
      { text: "Unsustainable", score: 1 },
    ],
  },
  {
    id: 7,
    question: "How often do urgent tasks override strategic priorities?",
    options: [
      { text: "Rarely. We protect strategic focus.", score: 5 },
      { text: "Sometimes. Depends on the season.", score: 3 },
      { text: "Often. We're constantly putting out fires.", score: 2 },
      { text: "Always. We're in reactive mode.", score: 1 },
    ],
  },
  {
    id: 8,
    question: "How would you describe decision-making across your leadership team?",
    options: [
      { text: "Aligned and strategic", score: 5 },
      { text: "Mostly coordinated with occasional gaps", score: 4 },
      { text: "Scattered across departments", score: 2 },
      { text: "Reactive and unclear", score: 1 },
    ],
  },
  {
    id: 9,
    question: "Does your organization have capacity (budget, time, executive buy-in) to invest in strategic alignment and leadership development?",
    options: [
      { text: "Yes, we have capacity and budget.", score: 5 },
      { text: "We could create capacity for the right solution.", score: 4 },
      { text: "We'd need to discuss internally.", score: 2 },
      { text: "Not at this time.", score: 1 },
    ],
  },
  {
    id: 10,
    question: "What's your role?",
    options: [
      { text: "Executive Director / CEO", score: 5 },
      { text: "Senior Leadership / C-Suite", score: 5 },
      { text: "Board Leadership", score: 4 },
      { text: "Program/Department Lead", score: 3 },
    ],
  },
]
