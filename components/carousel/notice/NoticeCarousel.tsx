import React, { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Aos from 'aos'
import 'aos/dist/aos.css'

//components
import CarouselIndicatorBar from '../CarouselIndicatorBar'

interface NoticeCarouselProps {
  noticeData: Array<JSX.Element>
}

export default function NoticeCarousel(
  props: NoticeCarouselProps
): JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  const onEventChange = function (currentIndex: number) {
    setCurrentCarouselIndex(currentIndex)
  }
  return (
    <div
      data-aos="fade-up"
      className="flex pb-14 md:pb-24 pt-5 md:pt-10 items-center justify-center flex-col"
    >
      <Carousel
        className="transition ease-in duration-200 w-11/12 md:w-10/12"
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
        infiniteLoop={true}
        emulateTouch={true}
        swipeable={true}
     
        onChange={onEventChange}
      >
        {props.noticeData}
      </Carousel>
      <CarouselIndicatorBar
        count={props.noticeData.length}
        currentIndex={currentCarouselIndex}
      />
    </div>
  )
}
