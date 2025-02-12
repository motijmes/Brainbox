import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-background-1 from-30% to-background-2 sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
      )}
    />
  )
}
export function GradientLight({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'to-background-light-2 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-background-1 from-10% sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-background-1 from-30% to-background-2',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
export function GradientBackgroundOrignal() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-[40rem] transform-gpu md:right-0',
          'from-background-light-1 via-background-light-2 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-20% via-background-1 via-40% via-70% to-background-2',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}

export function GradientBackgroundSection({
  size = 'lg', // sm, md, lg, xl
  opacity = 0.8,
  position = { top: '-11rem', right: '-15rem' },
  className = "",
}) {
  const sizeClasses = {
    sm: 'h-48 w-48',
    md: 'h-64 w-64',
    lg: 'h-96 w-96',
    xl: 'h-[36rem] w-[36rem]',
  }

  return (
    <div className={`"absolute inset-0" ${className}`}>
      <div
        className={clsx(
          'absolute transform-gpu',
          sizeClasses[size],
          'rounded-full',
          'bg-[radial-gradient(circle_at_30%_30%,var(--tw-gradient-stops))]',
          'from-background-1 from-30% to-background-2',
        )}
        style={{
          top: position.top,
          right: position.right,
          opacity: opacity,
          filter: 'blur(64px)',
          boxShadow: `
            inset -25px -25px 40px rgba(0,0,0,0.2),
            inset 0px 0px 40px rgba(255,255,255,0.2),
            20px 20px 60px rgba(0,0,0,0.2)
          `,
        }}
      />
    </div>
  )
}

export const GradientBorder = ({
  children,
  gradientColors = ['#fafc75', '#f724de'],
  borderRadius = '16px',
  padding = '2px',
  boxShadow = '0 5px 35px #1e222812',
  className = '',
}) => {
  const gradientBgStyle = {
    background: `linear-gradient(144deg, ${gradientColors[0]}, ${gradientColors[1]})`,
    borderRadius,
    padding,
    boxShadow,
  }

  // Calculate inner border radius to maintain smooth curves
  const innerRadiusNum = parseInt(borderRadius) - parseInt(padding)
  const innerBorderRadius = `${innerRadiusNum+2}px`

  return (
    <div
      className={clsx('relative overflow-hidden h-fit', className)}
      style={gradientBgStyle}
    >
      <div
        className="relative h-full w-full bg-background-2"
        style={{
          borderRadius: innerBorderRadius,
          // Add a subtle blur to soften the edge between gradient and background
          backdropFilter: 'blur(1px)',
          // Optional: add a very subtle inner shadow for depth
          boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
        }}
      >
        {children}
      </div>
    </div>
  )
}