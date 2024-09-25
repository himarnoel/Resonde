import React from 'react'
import EmblaCarousel from './EmblaCarousel'

const ProcessCarousel = () => {
    const OPTIONS = {
        align: 'start',
        dragFree: true,
        loop: true,
        slidesToScroll: 'auto'
      }

    const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default ProcessCarousel