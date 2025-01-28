import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent bg-gray-950 shadow-md',
    'text-base font-medium whitespace-nowrap text-white',
    'data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800',
  ),
  custom: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'group relative isolate rounded-full border-0',
    // Gradient background
    'bg-gradient-to-r from-primary-1 to-primary-2',
    // Text styling
    'text-base font-medium whitespace-nowrap text-white',
    // Shadow effects
    'shadow-lg shadow-primary-1/25',
    // Hover and animation effects
    'transition-all duration-300 ease-out',
    'hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-2/30',
    'active:scale-[0.98]',
    // Disabled state
    'data-disabled:opacity-40',
    // Overlay for hover effect
    'before:absolute before:inset-0 before:-z-10 before:rounded-full',
    'before:bg-gradient-to-r before:from-primary-2 before:to-primary-1',
    'before:opacity-0 before:transition-opacity',
    'hover:before:opacity-100',
  ),
  hero: clsx(
    'inline-flex items-center justify-center px-6 py-3',
    'rounded-full bg-white',
    'text-base font-medium',
    'transition-all duration-300',
    'shadow-md hover:shadow-lg',
    // Instead of gradient text, we'll use solid color that matches your brand
    'text-primary-1',
    'hover:text-primary-2',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent bg-white/15 ring-1 shadow-md ring-[#D15052]/15',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'text-base font-medium whitespace-nowrap text-gray-950',
    'data-disabled:bg-white/15 data-disabled:opacity-40 data-hover:bg-white/20',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)]',
    'rounded-lg border border-transparent ring-1 shadow-sm ring-black/10',
    'text-sm font-medium whitespace-nowrap text-gray-950',
    'data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50',
  ),
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(className, variants[variant])

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
