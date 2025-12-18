# Design Tokens Reference

Pre-built design systems to apply. Choose ONE system per funnel and commit fully. Customize colors but maintain the structural relationships.

## Typography Systems

### System 1: Editorial/Magazine
```css
/* Elegant contrast between display and body */
--font-display: 'Playfair Display', serif;
--font-body: 'Source Sans 3', sans-serif;

/* Scale */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 2rem;        /* 32px */
--text-4xl: 2.5rem;      /* 40px */
--text-5xl: 3.5rem;      /* 56px */
--text-6xl: 4.5rem;      /* 72px */
--text-7xl: 6rem;        /* 96px */
```

### System 2: Modern Tech
```css
/* Clean geometric pairing */
--font-display: 'Cabinet Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;

/* Tighter scale for UI-focused */
--text-xs: 0.75rem;
--text-sm: 0.8125rem;
--text-base: 0.875rem;
--text-lg: 1rem;
--text-xl: 1.125rem;
--text-2xl: 1.25rem;
--text-3xl: 1.5rem;
--text-4xl: 2rem;
--text-5xl: 2.5rem;
--text-6xl: 3rem;
```

### System 3: Bold Statement
```css
/* High-impact display-focused */
--font-display: 'Clash Display', sans-serif;
--font-body: 'Satoshi', sans-serif;

/* Dramatic scale jumps */
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.25rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 3rem;
--text-4xl: 4rem;
--text-5xl: 5rem;
--text-6xl: 7rem;
--text-7xl: 9rem;
```

### System 4: Warm/Friendly
```css
/* Approachable and rounded */
--font-display: 'Fraunces', serif;
--font-body: 'Plus Jakarta Sans', sans-serif;

/* Comfortable reading scale */
--text-sm: 0.875rem;
--text-base: 1.0625rem;
--text-lg: 1.25rem;
--text-xl: 1.5rem;
--text-2xl: 1.875rem;
--text-3xl: 2.25rem;
--text-4xl: 3rem;
--text-5xl: 4rem;
```

## Color Palettes

### Palette 1: Dark Luxe
```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #141414;
  --color-surface-elevated: #1a1a1a;
  --color-border: #262626;
  --color-text: #fafafa;
  --color-text-muted: #a1a1a1;
  --color-primary: #d4af37;
  --color-primary-muted: #b8962e;
  --color-accent: #f5f5dc;
  --color-success: #22c55e;
  --color-error: #ef4444;
}
```

### Palette 2: Ocean Professional
```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-surface-elevated: #ffffff;
  --color-border: #e2e8f0;
  --color-text: #0f172a;
  --color-text-muted: #64748b;
  --color-primary: #0369a1;
  --color-primary-muted: #0284c7;
  --color-accent: #06b6d4;
  --color-success: #059669;
  --color-error: #dc2626;
}
```

### Palette 3: Warm Terracotta
```css
:root {
  --color-background: #fdf8f3;
  --color-surface: #ffffff;
  --color-surface-elevated: #fff9f5;
  --color-border: #e7ddd3;
  --color-text: #2d1f1a;
  --color-text-muted: #6b5750;
  --color-primary: #c45d3a;
  --color-primary-muted: #d97055;
  --color-accent: #8b6f4e;
  --color-success: #4d7c0f;
  --color-error: #b91c1c;
}
```

### Palette 4: Midnight Tech
```css
:root {
  --color-background: #030712;
  --color-surface: #0f172a;
  --color-surface-elevated: #1e293b;
  --color-border: #334155;
  --color-text: #f1f5f9;
  --color-text-muted: #94a3b8;
  --color-primary: #6366f1;
  --color-primary-muted: #818cf8;
  --color-accent: #22d3ee;
  --color-success: #10b981;
  --color-error: #f43f5e;
}
```

### Palette 5: Forest Organic
```css
:root {
  --color-background: #f5f7f4;
  --color-surface: #ffffff;
  --color-surface-elevated: #fafbf9;
  --color-border: #d4dbd0;
  --color-text: #1a2e1a;
  --color-text-muted: #4a6349;
  --color-primary: #2d5a2d;
  --color-primary-muted: #3d7a3d;
  --color-accent: #b8860b;
  --color-success: #166534;
  --color-error: #991b1b;
}
```

### Palette 6: Electric Urgency
```css
:root {
  --color-background: #18181b;
  --color-surface: #27272a;
  --color-surface-elevated: #3f3f46;
  --color-border: #52525b;
  --color-text: #fafafa;
  --color-text-muted: #a1a1aa;
  --color-primary: #f43f5e;
  --color-primary-muted: #fb7185;
  --color-accent: #fbbf24;
  --color-success: #22c55e;
  --color-error: #ef4444;
}
```

## Spacing System

Use consistent spacing multiples (base: 4px or 0.25rem):

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Section Spacing
- Between sections: `py-24` (96px) minimum, `py-32` (128px) for breathing room
- Container padding: `px-6` (24px) mobile, `px-8` (32px) desktop
- Max content width: `max-w-6xl` (1152px) or `max-w-4xl` (896px) for text-heavy

## Border Radius Scales

### Sharp/Professional
```css
--radius-sm: 0.25rem;
--radius-md: 0.5rem;
--radius-lg: 0.75rem;
--radius-xl: 1rem;
```

### Rounded/Friendly
```css
--radius-sm: 0.5rem;
--radius-md: 1rem;
--radius-lg: 1.5rem;
--radius-xl: 2rem;
--radius-2xl: 3rem;
```

### Pill/Playful
```css
--radius-sm: 9999px;
--radius-md: 9999px;
--radius-lg: 9999px;
```

## Shadow Scales

### Subtle/Elegant
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 6px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.02);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.06), 0 8px 10px rgba(0,0,0,0.02);
```

### Bold/Dramatic
```css
--shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
--shadow-md: 0 8px 16px rgba(0,0,0,0.12);
--shadow-lg: 0 16px 32px rgba(0,0,0,0.15);
--shadow-xl: 0 24px 48px rgba(0,0,0,0.2);
```

### Colored Glow (use primary color)
```css
--shadow-glow-sm: 0 4px 14px rgba(var(--primary-rgb), 0.25);
--shadow-glow-md: 0 8px 24px rgba(var(--primary-rgb), 0.3);
--shadow-glow-lg: 0 12px 36px rgba(var(--primary-rgb), 0.35);
```

## Animation Tokens

### Timing Functions
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
```

### Durations
```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 400ms;
--duration-slower: 600ms;
```

### Standard Transitions
```css
/* Buttons, links */
.interactive {
  transition: all var(--duration-fast) var(--ease-out);
}

/* Cards, panels */
.container {
  transition: all var(--duration-normal) var(--ease-out);
}

/* Page elements, reveals */
.reveal {
  transition: all var(--duration-slow) var(--ease-smooth);
}
```

## Tailwind Config Extension

Add to `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        muted: 'var(--color-text-muted)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
}
```
