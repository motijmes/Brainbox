import {
  BadgeCheck,
  Bot,
  Calendar,
  CheckCircle2,
  HandshakeIcon,
  Loader2,
  PenSquare,
  Search,
  Facebook,
  Google
} from 'lucide-react'
import React from 'react'
import { TbBrandGoogle } from "react-icons/tb";
const Circle = React.forwardRef(
  ({ className, children, text, status }, ref) => {
    const getBackgroundColor = () => {
      switch (status) {
        case 'loading':
          return 'bg-amber-50'
        case 'success':
          return 'bg-green-50'
        default:
          return 'bg-white/80'
      }
    }

    const getTextColor = () => {
      switch (status) {
        case 'loading':
          return 'text-amber-700'
        case 'success':
          return 'text-green-700'
        default:
          return 'text-gray-700'
      }
    }

    const getIcon = () => {
      switch (status) {
        case 'loading':
          return (
            <Loader2 className="mr-2 h-4 w-4 animate-spin text-amber-500" />
          )
        case 'success':
          return <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
        default:
          return null
      }
    }

    return (
      <div
        className={`flex items-center gap-3 transition-all duration-500 ${
          status === 'hidden'
            ? 'translate-y-4 opacity-0'
            : 'translate-y-0 opacity-100'
        } ${className}`}
        ref={ref}
      >
        <div className="z-10 flex size-12 items-center justify-center rounded-full bg-background-2  p-2  shadow-lg border-primary-2 border-[1px]">
          {children}
        </div>
        <div
          className={`flex items-center px-4 py-2 text-sm font-medium ${getBackgroundColor()} rounded-xl ring-1 shadow-sm ring-black/5 backdrop-blur-sm transition-colors duration-300`}
        >
          {getIcon()}
          <span className={`${getTextColor()} transition-colors duration-300`}>
            {text}
          </span>
        </div>
      </div>
    )
  },
)

Circle.displayName = 'Circle'

const SalesProcessFlow = ({ className = '', isAnimating = true }) => {
  const [statuses, setStatuses] = React.useState([
    'hidden',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
  ])

  React.useEffect(() => {
    if (!isAnimating) {
      // Show all steps as success when animation is paused
      setStatuses(new Array(8).fill('success'))
      return
    }

    const processStep = (index) => {
      if (index >= statuses.length) {
        setTimeout(() => {
          setStatuses([
            'hidden',
            'hidden',
            'hidden',
            'hidden',
            'hidden',
            'hidden',
            'hidden',
            'hidden',
          ])
          setTimeout(() => processStep(0), 300)
        }, 500)
        return
      }

      setStatuses((prev) => {
        const newStatuses = [...prev]
        newStatuses[index] = 'loading'
        return newStatuses
      })

      setTimeout(() => {
        setStatuses((prev) => {
          const newStatuses = [...prev]
          newStatuses[index] = 'success'
          return newStatuses
        })
        processStep(index + 1)
      }, 1500)
    }

    const initialTimer = setTimeout(() => processStep(0), 100)

    return () => {
      clearTimeout(initialTimer)
    }
  }, [isAnimating,statuses.length]) 

  return (
    <div className={`relative ${className}`}>
      <div className="relative flex max-h-[700px] w-full max-w-[600px] min-w-[430px] items-center justify-center overflow-hidden rounded-2xl p-12 ring-1 shadow-2xl shadow-white/10 ring-white/20 backdrop-blur-md">
        <svg
          className="absolute top-2 left-12 h-full"
          width="60"
          height="520"
          viewBox="0 0 60 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M5 0 C5 0, 45 130, 45 260 C45 390, 5 520, 5 520"
            stroke="url(#paint0_linear)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="0.5 8"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="5"
              y1="0"
              x2="5"
              y2="520"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        <div className="flex size-full flex-col items-stretch justify-between">
          <div className="flex flex-col gap-6">
            <Circle text="Run Proven Winning Ads" status={statuses[0]}>
              <Facebook size={20} className="text-primary-2" />
            </Circle>
            <Circle text="Capture Leads" className="ml-4" status={statuses[1]}>
              <Search size={20} className="text-primary-2" />
            </Circle>
            <Circle text="Bot engages with leads" className="ml-6" status={statuses[2]}>
              <Bot size={20} className="text-primary-2" />
            </Circle>
            <Circle
              text="Lead placed in CRM"
              className="ml-6"
              status={statuses[3]}
            >
              <Search size={20} className="text-primary-2" />
            </Circle>
            <Circle text="AI Qualifies Leads" status={statuses[4]} className="ml-5">
              <BadgeCheck size={20} className="text-primary-2" />
            </Circle>
            <Circle
              text="AI Books Appointment"
              className="ml-4"
              status={statuses[5]}
            >
              <Calendar size={20} className="text-primary-2" />
            </Circle>
            <Circle text="Automated Google Review" status={statuses[6]} className="ml-2">
              <TbBrandGoogle size={20} className="text-primary-2" />
            </Circle>
            {/* <Circle text="Automated Google Reviews" status={statuses[6]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="currentColor" className="text-primary-2">
                <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
            </Circle> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesProcessFlow
