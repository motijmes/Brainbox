'use client'

import AutoPlay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  useCarouselButtons,
} from '../ui/carousel-button'
import {
  CarouselIndicator,
  useCarouselIndicator,
} from '../ui/carousel-indicator'

const ImageSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoPlay()])
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarouselButtons(emblaApi)
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useCarouselIndicator(emblaApi)

  const slides = [
    {
      url: '/assets/slide1.png',
      title: 'Dashboard View',
    },
    {
      url: '/assets/slide2.png',
      title: 'Template Library',
    },
    {
      url: '/assets/slide3.png',
      title: 'Template Library',
    },
    {
      url: '/assets/slide4.png',
      title: 'Template Library',
    },
    {
      url: '/assets/slide5.png',
      title: 'Template Library',
    },
  ]

  return (
    <div className="relative  z-10">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%]" key={index}>
              <div className="m-4 aspect-video">
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-primary-1 ring-1 ring-primary-1/20 transition-colors hover:bg-primary-1 hover:text-white"
      />

      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-primary-1 ring-1 ring-primary-1/20 transition-colors hover:bg-primary-1 hover:text-white"
      />

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {scrollSnaps.map((_, index) => (
          <CarouselIndicator
            key={index}
            onClick={() => onDotButtonClick(index)}
            // className={`h-2 w-2 rounded-full transition-colors ${
            //   index === selectedIndex ? 'bg-primary1' : 'bg-primary-1/50'
            // }`}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === selectedIndex
                ? 'bg-primary-1' 
                : 'bg-primary-light-1/50' 
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
