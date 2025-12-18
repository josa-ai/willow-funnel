---
name: funnel-builder
description: Build high-converting website sales funnels with distinctive visual design. Use when creating landing pages, lead capture funnels, sales pages, product launch pages, webinar registration, checkout flows, or any conversion-focused multi-section page. Generates React/Next.js code with Tailwind CSS optimized for Vercel deployment. Preserves user-provided copy exactly while wrapping it in conversion-optimized, visually distinctive layouts that avoid generic AI aesthetics.
---

# Website Funnel Builder

Build high-converting sales funnels with distinctive design. This skill creates React/Next.js pages with Tailwind CSS, ready for Vercel deployment.

## Core Principles

### Copy Preservation (CRITICAL)
- **NEVER modify, rephrase, or "improve" user-provided copy**
- Headlines, subheadlines, body text, CTAs, testimonials: use EXACTLY as provided
- Only add structural elements (containers, animations, visual treatments)
- If copy seems incomplete, ask the user rather than filling gaps

### Funnel Essence Preservation
- Understand the funnel's purpose before coding
- Match visual tone to the offer (premium, urgent, friendly, professional)
- Maintain the psychological flow the user intended
- Ask: "What emotion should visitors feel at each section?"

## Design Philosophy

### Avoid AI Slop
Generic AI patterns to NEVER use:
- Purple-to-blue gradients on white backgrounds
- Inter, Roboto, Arial, system fonts
- Centered everything with equal spacing
- Generic hero with headline > subheadline > button pattern
- Stock photo grids in testimonial sections
- Cookie-cutter pricing cards with "Most Popular" badges
- Bland feature grids with icon + title + description

### Create Distinctive Funnels
Each funnel must have a CLEAR aesthetic identity. Choose ONE direction and commit:

**Bold/Challenger**: High contrast, oversized typography, diagonal cuts, animated reveals
**Premium/Luxury**: Refined serif fonts, generous whitespace, subtle animations, gold/cream accents
**Urgent/Scarcity**: Dark backgrounds, countdown timers, pulsing CTAs, red accents
**Friendly/Approachable**: Rounded shapes, warm colors, playful illustrations, bouncy animations
**Technical/SaaS**: Monospace accents, code-inspired elements, dark mode, terminal aesthetics
**Editorial/Story**: Magazine-style layouts, pull quotes, dramatic imagery, reading-focused
**Retro/Nostalgic**: Y2K elements, gradients, pixel art accents, vintage color palettes

## Funnel Architecture

### Standard Section Flow
Reference `references/section-patterns.md` for detailed patterns. Core sections:

1. **Hero** - Immediate value proposition, primary CTA
2. **Problem/Pain** - Agitate the problem (optional for warm traffic)
3. **Solution/Promise** - Your offer as the answer
4. **Features/Benefits** - What they get and why it matters
5. **Social Proof** - Testimonials, logos, stats, case studies
6. **Pricing/Offer** - Clear offer with value stack
7. **FAQ** - Objection handling
8. **Final CTA** - Urgency + last call to action

Not every funnel needs every section. Match sections to funnel type and user intent.

### Funnel Types
- **Lead Magnet**: Hero → Benefit bullets → Social proof → Opt-in form
- **Sales Page (Long)**: Full sequence with multiple proof sections
- **Sales Page (Short)**: Hero → Features → Pricing → CTA
- **Webinar Registration**: Hero → What you'll learn → About speaker → Register
- **Checkout/Order**: Summary → Trust badges → Payment → Guarantee
- **Thank You/Upsell**: Confirmation → Related offer → Next steps

## Implementation

### Tech Stack
- React 18+ with functional components and hooks
- Next.js App Router (recommended) or Pages Router
- Tailwind CSS for styling
- Framer Motion for animations (import as `motion`)
- Lucide React for icons

### Project Structure
```
app/
├── page.tsx          # Main funnel page
├── layout.tsx        # Root layout with fonts
├── globals.css       # Tailwind + custom styles
└── components/
    ├── Hero.tsx
    ├── Features.tsx
    ├── Testimonials.tsx
    ├── Pricing.tsx
    ├── FAQ.tsx
    └── CTA.tsx
```

### Typography Setup
Always use distinctive fonts. In `layout.tsx`:
```tsx
import { Playfair_Display, DM_Sans } from 'next/font/google'

const display = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-display' 
})
const body = DM_Sans({ 
  subsets: ['latin'], 
  variable: '--font-body' 
})
```

Font pairing suggestions (VARY these, never default to same choice):
- Display: Playfair Display, Fraunces, Clash Display, Syne, Cabinet Grotesk
- Body: DM Sans, Outfit, Plus Jakarta Sans, General Sans, Satoshi

### Color System
Define in `globals.css`:
```css
:root {
  --color-primary: #your-choice;
  --color-accent: #your-choice;
  --color-background: #your-choice;
  --color-surface: #your-choice;
  --color-text: #your-choice;
  --color-muted: #your-choice;
}
```

### Animation Patterns
Use Framer Motion for section reveals:
```tsx
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}
```

Stagger children for lists/cards:
```tsx
const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}
```

## Conversion Optimization

### Above the Fold (First 600px)
Must include:
- Primary headline (user's exact copy)
- Value proposition clarity
- Primary CTA button
- Trust indicator (optional but powerful)

### CTA Best Practices
- Minimum 48px touch target
- High contrast with background
- Action-oriented text (use user's copy)
- Consider dual CTAs: primary + secondary
- Subtle hover/focus states with micro-animation

### Social Proof Patterns
- Real names + photos when available
- Specific results over vague praise
- Video testimonials > text (embed if provided)
- Logo bars for B2B credibility
- Star ratings with count ("4.9 from 2,847 reviews")

### Urgency Elements (when appropriate)
- Countdown timers (only if real deadline)
- Stock/availability indicators
- "X people viewing" social proof
- Limited-time pricing display

## Responsive Design

Mobile-first approach:
- Stack layouts vertically on mobile
- Increase touch targets (min 48px)
- Simplify navigation
- Consider sticky mobile CTA bar
- Test text readability at 320px width

## Performance

- Lazy load below-fold images
- Use Next.js Image component
- Minimize client-side JS
- Preload critical fonts
- Consider skeleton states for dynamic content

## Vercel Deployment

The output is ready for Vercel:
1. Ensure `next.config.js` is properly configured
2. Include all necessary dependencies in `package.json`
3. Use environment variables for any API keys
4. Output should work with `vercel deploy` or `npm run build`

## Workflow

1. **Receive user's copy and funnel concept**
2. **Clarify if needed**: Ask about aesthetic direction, target audience, urgency level
3. **Choose design direction**: Commit to ONE aesthetic and document it
4. **Build sections**: Reference `references/section-patterns.md` for component patterns
5. **Assemble page**: Create single-page funnel with all sections
6. **Review**: Ensure copy is EXACTLY preserved, design is distinctive

## Reference Files

- `references/section-patterns.md` - Detailed patterns for each section type
- `references/conversion-principles.md` - Psychology and CRO techniques
- `references/design-tokens.md` - Color, typography, spacing systems
- `assets/components/` - Starter component templates

Read these references based on the funnel requirements before implementation.
