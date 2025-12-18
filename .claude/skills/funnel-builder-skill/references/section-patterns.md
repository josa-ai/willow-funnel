# Section Patterns Reference

Detailed patterns for each funnel section. Use these as starting points, then customize to match the chosen aesthetic direction.

## Hero Sections

### Pattern: Split Hero (Left Copy, Right Visual)
```tsx
<section className="min-h-screen grid lg:grid-cols-2 gap-8 items-center px-6 py-20">
  <div className="space-y-6">
    <span className="text-sm uppercase tracking-widest text-accent">
      {eyebrow}
    </span>
    <h1 className="text-5xl lg:text-7xl font-display leading-tight">
      {headline}
    </h1>
    <p className="text-xl text-muted max-w-lg">{subheadline}</p>
    <div className="flex gap-4 pt-4">
      <Button size="lg">{primaryCta}</Button>
      <Button variant="ghost">{secondaryCta}</Button>
    </div>
    <div className="flex items-center gap-4 pt-6">
      <AvatarStack />
      <p className="text-sm text-muted">{socialProof}</p>
    </div>
  </div>
  <div className="relative">
    <Image ... />
    {/* Add floating elements, badges, decorative shapes */}
  </div>
</section>
```

### Pattern: Centered Hero (Bold Statement)
```tsx
<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-4xl space-y-8"
  >
    <h1 className="text-6xl lg:text-8xl font-display">{headline}</h1>
    <p className="text-2xl text-muted max-w-2xl mx-auto">{subheadline}</p>
    <Button size="xl" className="mt-8">{cta}</Button>
  </motion.div>
</section>
```

### Pattern: Video Hero
```tsx
<section className="relative min-h-screen overflow-hidden">
  <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
    <source src={videoUrl} type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/60" />
  <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">
    <div className="max-w-3xl text-white space-y-6">
      <h1 className="text-5xl lg:text-7xl font-display">{headline}</h1>
      <p className="text-xl opacity-90">{subheadline}</p>
      <Button size="lg">{cta}</Button>
    </div>
  </div>
</section>
```

### Pattern: Diagonal/Angled Hero
```tsx
<section className="relative min-h-screen overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" 
       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />
  <div className="relative z-10 container mx-auto px-6 py-32">
    {/* Content */}
  </div>
</section>
```

## Problem/Pain Sections

### Pattern: Before/After Comparison
```tsx
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-display text-center mb-16">{headline}</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-red-50 dark:bg-red-950/30 rounded-2xl p-8 border-2 border-red-200">
        <h3 className="text-2xl font-bold text-red-600 mb-6">Without {product}</h3>
        <ul className="space-y-4">
          {painPoints.map(point => (
            <li className="flex gap-3">
              <X className="text-red-500 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-950/30 rounded-2xl p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold text-green-600 mb-6">With {product}</h3>
        <ul className="space-y-4">
          {benefits.map(benefit => (
            <li className="flex gap-3">
              <Check className="text-green-500 shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>
```

### Pattern: Statistic Shock
```tsx
<section className="py-24 px-6 bg-surface">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-8xl font-display text-primary mb-6">{shockingStat}</p>
    <h2 className="text-3xl font-bold mb-4">{headline}</h2>
    <p className="text-xl text-muted">{explanation}</p>
  </div>
</section>
```

## Features/Benefits Sections

### Pattern: Bento Grid
```tsx
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-display text-center mb-16">{headline}</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Large feature spanning 2 cols */}
      <div className="col-span-2 row-span-2 bg-gradient-to-br from-primary/10 to-primary/5 
                      rounded-3xl p-8 flex flex-col justify-end">
        <Icon className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-2xl font-bold">{features[0].title}</h3>
        <p className="text-muted mt-2">{features[0].description}</p>
      </div>
      {/* Smaller features */}
      {features.slice(1).map(feature => (
        <div className="bg-surface rounded-2xl p-6 hover:shadow-lg transition-shadow">
          <Icon className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-bold">{feature.title}</h3>
          <p className="text-sm text-muted mt-1">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Pattern: Alternating Feature Rows
```tsx
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto space-y-32">
    {features.map((feature, i) => (
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? 'lg:flex-row-reverse' : ''}`}>
        <div className={i % 2 ? 'lg:order-2' : ''}>
          <span className="text-primary font-mono text-sm">0{i + 1}</span>
          <h3 className="text-3xl font-display mt-2 mb-4">{feature.title}</h3>
          <p className="text-lg text-muted">{feature.description}</p>
          <ul className="mt-6 space-y-2">
            {feature.bullets.map(bullet => (
              <li className="flex gap-2 items-center">
                <Check className="w-5 h-5 text-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`relative ${i % 2 ? 'lg:order-1' : ''}`}>
          <Image ... />
        </div>
      </div>
    ))}
  </div>
</section>
```

### Pattern: Icon Cards with Hover
```tsx
<section className="py-24 px-6 bg-surface">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-display">{headline}</h2>
      <p className="text-xl text-muted mt-4 max-w-2xl mx-auto">{subheadline}</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {features.map(feature => (
        <motion.div 
          whileHover={{ y: -8 }}
          className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <feature.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
          <p className="text-muted">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

## Social Proof Sections

### Pattern: Testimonial Carousel
```tsx
<section className="py-24 px-6 overflow-hidden">
  <div className="max-w-4xl mx-auto text-center mb-16">
    <h2 className="text-4xl font-display">{headline}</h2>
  </div>
  <div className="flex gap-6 animate-scroll">
    {[...testimonials, ...testimonials].map((t, i) => (
      <div key={i} className="flex-shrink-0 w-[400px] bg-surface rounded-2xl p-8">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
        </div>
        <p className="text-lg mb-6">"{t.quote}"</p>
        <div className="flex items-center gap-4">
          <Image src={t.avatar} className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-bold">{t.name}</p>
            <p className="text-sm text-muted">{t.title}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
```

### Pattern: Featured Testimonial (Large Quote)
```tsx
<section className="py-24 px-6 bg-primary text-white">
  <div className="max-w-4xl mx-auto text-center">
    <Quote className="w-16 h-16 mx-auto mb-8 opacity-50" />
    <blockquote className="text-3xl lg:text-4xl font-display leading-relaxed mb-8">
      "{testimonial.quote}"
    </blockquote>
    <div className="flex items-center justify-center gap-4">
      <Image src={testimonial.avatar} className="w-16 h-16 rounded-full" />
      <div className="text-left">
        <p className="font-bold text-lg">{testimonial.name}</p>
        <p className="opacity-80">{testimonial.title}</p>
      </div>
    </div>
  </div>
</section>
```

### Pattern: Logo Bar
```tsx
<section className="py-16 px-6 border-y border-border">
  <div className="max-w-6xl mx-auto">
    <p className="text-center text-sm text-muted mb-8">{trustedByText}</p>
    <div className="flex flex-wrap justify-center items-center gap-12">
      {logos.map(logo => (
        <Image 
          src={logo} 
          className="h-8 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
        />
      ))}
    </div>
  </div>
</section>
```

### Pattern: Stats Bar
```tsx
<section className="py-16 px-6 bg-surface">
  <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
    {stats.map(stat => (
      <div className="text-center">
        <p className="text-5xl font-display text-primary">{stat.value}</p>
        <p className="text-muted mt-2">{stat.label}</p>
      </div>
    ))}
  </div>
</section>
```

## Pricing Sections

### Pattern: Three-Tier Pricing
```tsx
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-display">{headline}</h2>
      <p className="text-xl text-muted mt-4">{subheadline}</p>
    </div>
    <div className="grid lg:grid-cols-3 gap-8">
      {plans.map((plan, i) => (
        <div className={`rounded-3xl p-8 ${plan.featured ? 'bg-primary text-white ring-4 ring-primary/20 scale-105' : 'bg-surface'}`}>
          {plan.featured && (
            <span className="text-xs uppercase tracking-wider opacity-80">Most Popular</span>
          )}
          <h3 className="text-2xl font-bold mt-2">{plan.name}</h3>
          <p className={`mt-2 ${plan.featured ? 'opacity-80' : 'text-muted'}`}>{plan.description}</p>
          <p className="mt-6">
            <span className="text-5xl font-display">{plan.price}</span>
            <span className={plan.featured ? 'opacity-80' : 'text-muted'}>/month</span>
          </p>
          <Button 
            className={`w-full mt-6 ${plan.featured ? 'bg-white text-primary hover:bg-white/90' : ''}`}
          >
            {plan.cta}
          </Button>
          <ul className="mt-8 space-y-4">
            {plan.features.map(feature => (
              <li className="flex gap-3">
                <Check className={`w-5 h-5 ${plan.featured ? 'text-white' : 'text-primary'}`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Pattern: Single Offer with Value Stack
```tsx
<section className="py-24 px-6">
  <div className="max-w-4xl mx-auto">
    <div className="bg-surface rounded-3xl p-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <h2 className="text-4xl font-display mb-8">{headline}</h2>
      
      <div className="space-y-4 mb-8">
        {valueItems.map(item => (
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <Check className="text-primary" />
              <span className="font-medium">{item.name}</span>
            </div>
            <span className="text-muted line-through">{item.value}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-end gap-4 mb-8">
        <span className="text-muted line-through text-2xl">{originalPrice}</span>
        <span className="text-6xl font-display text-primary">{price}</span>
      </div>
      
      <Button size="xl" className="w-full">{cta}</Button>
      
      <div className="flex justify-center gap-6 mt-6">
        {guarantees.map(g => (
          <div className="flex items-center gap-2 text-sm text-muted">
            <g.icon className="w-4 h-4" />
            <span>{g.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

## FAQ Sections

### Pattern: Accordion FAQ
```tsx
<section className="py-24 px-6">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-display text-center mb-16">{headline}</h2>
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div className="border border-border rounded-2xl overflow-hidden">
          <button 
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="font-bold text-lg">{faq.question}</span>
            <ChevronDown className={`transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-muted">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </div>
</section>
```

## CTA Sections

### Pattern: Urgent Final CTA
```tsx
<section className="py-24 px-6 bg-primary text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl lg:text-5xl font-display mb-6">{headline}</h2>
    <p className="text-xl opacity-90 mb-8">{subheadline}</p>
    
    {countdown && (
      <div className="flex justify-center gap-4 mb-8">
        {Object.entries(countdown).map(([unit, value]) => (
          <div className="bg-white/10 rounded-xl p-4 min-w-[80px]">
            <p className="text-4xl font-mono font-bold">{value}</p>
            <p className="text-sm opacity-70">{unit}</p>
          </div>
        ))}
      </div>
    )}
    
    <Button size="xl" className="bg-white text-primary hover:bg-white/90">
      {cta}
    </Button>
    
    <p className="text-sm opacity-70 mt-4">{guarantee}</p>
  </div>
</section>
```

### Pattern: Minimal CTA Strip
```tsx
<section className="py-16 px-6 border-t border-border">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
      <h3 className="text-2xl font-display">{headline}</h3>
      <p className="text-muted">{subheadline}</p>
    </div>
    <Button size="lg">{cta}</Button>
  </div>
</section>
```

## Lead Capture Forms

### Pattern: Inline Form
```tsx
<form className="flex gap-4 max-w-lg">
  <input 
    type="email"
    placeholder="Enter your email"
    className="flex-1 px-6 py-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary"
  />
  <Button type="submit" size="lg">{cta}</Button>
</form>
```

### Pattern: Modal/Popup Form
```tsx
<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="bg-background rounded-3xl p-8 max-w-md w-full mx-4"
  >
    <button onClick={onClose} className="absolute top-4 right-4">
      <X />
    </button>
    <h3 className="text-2xl font-display mb-2">{headline}</h3>
    <p className="text-muted mb-6">{subheadline}</p>
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full ..." />
      <input type="email" placeholder="Email" className="w-full ..." />
      <Button type="submit" className="w-full">{cta}</Button>
    </form>
  </motion.div>
</div>
```
