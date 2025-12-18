# Conversion Principles Reference

Psychology and CRO techniques for high-converting funnels. Apply these principles through visual design without changing user copy.

## Core Psychology

### Cognitive Load Reduction
- One clear action per screen/section
- Visual hierarchy guides eye flow
- Group related elements
- Progressive disclosure (reveal complexity gradually)
- Remove anything that doesn't serve conversion

### Pattern Interrupts
- Break visual expectations to recapture attention
- Use at transitions between sections
- Examples: diagonal breaks, color shifts, animation triggers
- Don't overuse—reserve for key moments

### Anchoring
- Show original/comparison price before actual price
- Present larger numbers first (value stack before price)
- Lead with impressive stats in social proof

## Visual Trust Signals

### Above the Fold Trust
Must appear in hero or immediately after:
- Client logos (if B2B)
- Star rating + review count
- Specific result metric
- Security badge (for checkout)
- Money-back guarantee badge

### Social Proof Hierarchy (strongest to weakest)
1. Video testimonials with specific results
2. Written testimonials with photos + full names + titles
3. Star ratings with total count
4. Client/brand logos
5. "As seen in" media mentions
6. User count ("Join 10,000+ customers")

### Trust Badge Placement
- Near CTAs (especially checkout)
- At transition points where doubt occurs
- Footer (comprehensive list)
- Never clustered in overwhelming groups

## CTA Optimization

### Visual Weight
- CTAs must be the most visually prominent elements
- Use primary brand color with high contrast
- Sufficient padding (min 16px vertical, 32px horizontal)
- Size hierarchy: primary > secondary > tertiary

### Button States
```css
/* Base state */
.cta {
  background: var(--primary);
  transition: all 0.2s ease;
}

/* Hover - subtle lift */
.cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--primary), 0.3);
}

/* Focus - accessibility ring */
.cta:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Active - press */
.cta:active {
  transform: translateY(0);
}
```

### Micro-copy Near CTAs
Position small supportive text below buttons:
- Risk reducers: "No credit card required" / "Cancel anytime"
- Social proof: "Join 2,847 happy customers"
- Urgency: "Only 3 spots left" / "Offer ends tonight"
- Guarantee: "30-day money-back guarantee"

### Multiple CTAs
- Repeat primary CTA every 2-3 scroll-lengths
- Vary surrounding context, not button text
- Consider sticky mobile CTA bar for long pages
- Secondary CTA for different buyer stages ("Learn more" vs "Buy now")

## Urgency and Scarcity

### Legitimate Urgency Techniques
- Countdown timers (only for real deadlines)
- Stock/inventory indicators
- Limited enrollment periods
- Price increase warnings
- Seasonal/event-based offers

### Visual Urgency Cues
- Red/orange accent colors near deadlines
- Pulsing or animated elements (subtle)
- Progress bars showing remaining capacity
- "X viewing now" real-time indicators

### Warning: Fake Urgency
- Never fake scarcity—damages trust
- If timer resets on refresh, don't use it
- Be specific: "Sale ends December 31" not "Limited time"

## Page Flow Psychology

### The Decision Journey
```
PROBLEM → AGITATION → SOLUTION → PROOF → OFFER → ACTION
```

Each section should:
1. Answer questions raised by previous section
2. Create new questions answered by next section
3. Build momentum toward decision

### Objection Mapping
Anticipate and address objections in sequence:
- Hero: "Is this for me?" → Clear positioning
- Features: "What do I get?" → Specific benefits
- Proof: "Does it work?" → Results + testimonials
- Pricing: "Can I afford it?" → Value stack + guarantee
- FAQ: "What if...?" → Risk elimination
- Final CTA: "Should I act now?" → Urgency + reassurance

### Friction Points to Address Visually
- Form length → Multi-step forms, progress indicators
- Price shock → Value stacking before reveal
- Commitment fear → Guarantee badges, exit ease
- Information overload → Accordion FAQs, tabs
- Trust deficit → Proof throughout, not just once

## Mobile Conversion

### Critical Mobile Considerations
- 60%+ traffic is mobile—design mobile-first
- Thumb zone: key actions in bottom 50% of screen
- Touch targets: minimum 48px × 48px
- Avoid hover-dependent interactions
- Consider sticky bottom CTA bar

### Mobile Form Optimization
- Appropriate input types (email, tel, etc.)
- Autofill attributes
- Inline validation
- Large touch targets
- Single column layouts

## Performance Impact

### Speed = Conversions
- Every 100ms delay = ~1% conversion loss
- First Contentful Paint < 1.8s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1

### Perceived Performance
- Skeleton screens during load
- Optimistic UI updates
- Progressive image loading
- Animation masks loading states

## Testing Priorities

### High-Impact Test Elements (in order)
1. Headline (biggest lever)
2. Primary CTA copy and design
3. Hero image/video
4. Social proof placement/format
5. Pricing presentation
6. Form length/fields

### Visual A/B Test Ideas
- Button color contrast levels
- CTA placement (inline vs. floating)
- Social proof format (quotes vs. cards)
- Hero layout (split vs. centered)
- Pricing card designs

## Accessibility = Conversion

Accessible design reaches more customers:
- Color contrast: 4.5:1 for text, 3:1 for UI
- Focus states visible on all interactive elements
- Alt text for meaningful images
- Keyboard navigation support
- Screen reader compatibility

## Emotional Design Triggers

### By Funnel Type

**Premium/Luxury Products**
- Generous whitespace
- Muted, sophisticated colors
- Serif typography
- High-quality photography
- Understated animations

**Urgent/Scarcity Offers**
- Darker backgrounds
- Red/orange accents
- Bold, condensed typography
- Countdown timers
- Higher contrast

**Community/Membership**
- Warm, inviting colors
- Rounded shapes
- User photos/avatars
- Social proof density
- Welcoming copy tone

**Technical/SaaS Products**
- Clean, systematic layouts
- Monospace accents
- Dark mode options
- Feature comparisons
- Integration logos

**Educational/Course**
- Instructor imagery
- Curriculum previews
- Student transformations
- Module breakdowns
- Certificate/badge visuals
