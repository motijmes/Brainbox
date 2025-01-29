import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-primary-1 from-30% to-primary-2 sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
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
        'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-primary-1 from-10% to-primary-light-2 sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
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
          'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-primary-1 from-30% to-primary-2',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}

export  function GradientBackgroundSection({
  size = 'lg', // sm, md, lg, xl
  opacity = 0.8,
  position = { top: '-11rem', right: '-15rem' },
}) {
  const sizeClasses = {
    sm: 'h-48 w-48',
    md: 'h-64 w-64',
    lg: 'h-96 w-96',
    xl: 'h-[36rem] w-[36rem]',
  }

  return (
    <div className="absolute inset-0 ">
      <div
        className={clsx(
          'absolute transform-gpu',
          sizeClasses[size],
          'rounded-full',
          'bg-[radial-gradient(circle_at_30%_30%,var(--tw-gradient-stops))]',
          'from-primary-1 from-30% to-primary-2',
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