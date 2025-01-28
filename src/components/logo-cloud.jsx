'use client'

const LogoCloud = () => {
  return (
    <div className="bg-white/95 py-16 backdrop-blur-sm sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex items-center justify-between">
          <img
            alt="REMAX"
            src="/assets/partner1.png"
            width={158}
            height={48}
            className=" w-auto object-contain"
          />
          <img
            alt="Keller Williams"
            src="/assets/partner4.png"
            width={158}
            height={48}
            className=" w-auto object-contain"
          />
          <img
            alt="EXIT"
            src="/assets/partner5.png"
            width={158}
            height={48}
            className=" w-auto object-contain"
          />
          <img
            alt="eXp"
            src="/assets/partner2.png"
            width={158}
            height={48}
            className=" w-auto object-contain"
          />
          <img
            alt="eXp"
            src="/assets/partner6.png"
            width={158}
            height={48}
            className=" w-auto object-contain"
          />
          <img
            alt="eXp"
            src="/assets/partner7.png"
            width={158}
            height={48}
            className=" w-auto object-contain"
          />
          <img
            alt="COMPASS"
            src="/assets/partner3.png"
            width={158}
            height={48}
            className=" w-auto object-contain"
          />
        </div>

        <div className="mt-10 flex justify-center">
          <p className="relative rounded-full bg-primary-1/5 px-4 py-1.5 text-sm/6 text-text ring-1 ring-primary-1/10">
            <span className="hidden md:inline">
              Trusted by thousands of real estate professionals nationwide.{' '}
            </span>
            <a
              href="#"
              className="font-semibold text-primary-1 hover:text-primary-2"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Read our customer stories <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogoCloud