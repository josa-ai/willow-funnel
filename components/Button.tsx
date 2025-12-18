import Link from 'next/link'
import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'gold'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-primary shadow-card',
  secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white focus-visible:ring-primary',
  accent: 'bg-accent text-white hover:bg-accent-dark hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-accent',
  gold: 'btn-gold btn-pulse focus-visible:ring-gold',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-10 py-5 text-lg',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      variant = 'primary',
      size = 'md',
      href,
      children,
      className = '',
      onClick,
      type = 'button',
      disabled = false,
    },
    ref
  ) {
    const baseClasses = `
      inline-flex items-center justify-center gap-2
      rounded-full font-body font-medium
      transition-all duration-300 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
    `

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      )
    }

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {children}
      </button>
    )
  }
)
