interface SectionDividerProps {
  fromColor?: string
  toColor?: string
  flip?: boolean
}

export function SectionDivider({
  fromColor = 'background',
  toColor = 'surface-warm',
  flip = false
}: SectionDividerProps) {
  // Map color names to actual Tailwind color values (MORE PRONOUNCED)
  const colorMap: Record<string, string> = {
    'background': '#f7f6f3',
    'surface-warm': '#ece5d8',    // More pronounced beige
    'surface-sage': '#dce8dc',    // More pronounced sage
    'surface-gray': '#e8e8e4',    // More pronounced gray
    'surface-cream': '#f8f4ec',   // Warmer cream
    'white': '#ffffff',
    'cream': '#FFFDF8',
    'primary': '#5d7052',
    'forest': '#435442',
  }

  const fromBg = colorMap[fromColor] || colorMap['background']
  const toFill = colorMap[toColor] || colorMap['surface-warm']

  return (
    <div
      className={`relative h-12 md:h-16 w-full ${flip ? 'rotate-180' : ''}`}
      style={{ backgroundColor: fromBg }}
    >
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill={toFill}
          d="M0,40 C360,90 720,10 1080,50 C1260,70 1350,60 1440,40 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  )
}
