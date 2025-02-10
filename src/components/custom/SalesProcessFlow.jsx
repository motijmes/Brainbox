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
} from 'lucide-react'
import React from 'react'

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
            <Circle text="AI Finds Leads" className="ml-4" status={statuses[1]}>
              <Search size={20} className="text-primary-2" />
            </Circle>
            <Circle text="AI talks to EVERY LEAD" className="ml-6" status={statuses[2]}>
              <Bot size={20} className="text-primary-2" />
            </Circle>
            <Circle
              text="New Lead placed in organized CRM"
              className="ml-6"
              status={statuses[3]}
            >
              <Search size={20} className="text-primary-2" />
            </Circle>
            <Circle text="AI Qualifies Leads" status={statuses[4]} className="ml-5">
              <BadgeCheck size={20} className="text-primary-2" />
            </Circle>
            <Circle
              text="AI Books Your New Appointment"
              className="ml-4"
              status={statuses[5]}
            >
              <Calendar size={20} className="text-primary-2" />
            </Circle>
            <Circle text="CLOSE MORE SALES FASTER!!" status={statuses[6]}>
              <HandshakeIcon size={20} className="text-primary-2" />
            </Circle>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesProcessFlow
