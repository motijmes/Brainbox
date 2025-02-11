// 'use client'
// import { clsx } from 'clsx'
// import { motion } from 'framer-motion'

// export function Logo({ className, variant = 'original' }) {
//   let transition = {
//     duration: 0.5,
//     ease: 'easeInOut',
//   }

//   const variantStyles = {
//     original: '', // No filters - shows original colored logo
//     // light: 'brightness-0 invert', // White version for header
//   }

//   return (
//     <motion.div
//       className={clsx(className, 'relative min-h-8 min-w-32')}
//       whileHover={{ scale: 1.05 }}
//       transition={transition}
//     >
//       <img
//         src="/assets/logo2.png"
//         alt="Logo"
//         className={clsx(
//           'h-full w-full object-contain transition-all duration-300',
//           variantStyles[variant],
//         )}
//       />
//     </motion.div>
//   )
// }

// // Smaller mark version if needed
// export function Mark({ className, variant = 'original' }) {
//   const variantStyles = {
//     original: '', // No filters - shows original colored logo
//     light: 'brightness-0 invert', // White version for header
//   }

//   return (
//     <motion.div
//       className={clsx(className, 'relative h-8 w-8')}
//       whileHover={{ scale: 1.1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <img
//         src="/assets/logo2.png"
//         alt="Logo Mark"
//         className={clsx(
//           'h-full w-full object-contain transition-all duration-300',
//           variantStyles[variant],
//         )}
//       />
//     </motion.div>
//   )
// }
'use client'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Logo({ className, variant = 'original' }) {
  let transition = {
    duration: 0.5,
    ease: 'easeInOut',
  }

  const variantStyles = {
    original: '',
  }

  return (
<motion.div
  className={clsx(className, 'relative flex items-center')} // Added flex and items-center
  whileHover={{ scale: 1.05 }}
  transition={transition}
>
  <img
    src="/assets/logo2.png"
    alt="Accessible Agents"
    className={clsx(
      'h-24 w-auto max-w-[180px]', // Reduced height for better navbar fit
      'object-contain transition-all duration-300',
      variant === 'original'
    )}
    style={{ 
      filter: variant === 'original' ? 'none' : undefined,
      transformOrigin: 'left center' // Align left while keeping centered height-wise
    }}
  />
</motion.div>

  )
}

// Smaller mark version if needed
export function Mark({ className, variant = 'original' }) {
  const variantStyles = {
    original: '',
  }

  return (
    <motion.div
      className={clsx(className, 'relative h-9')} // Match navbar height
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src="/assets/logo.png"
        alt="Accessible Agents Mark"
        className={clsx(
          'h-full w-auto object-contain transition-all duration-300',
          variant === 'original' 
        )}
        style={{ 
          filter: variant === 'original' ? 'none' : undefined,
          transform: 'scale(1.5)',
          transformOrigin: 'left center'
        }}
      />
    </motion.div>
  )
}