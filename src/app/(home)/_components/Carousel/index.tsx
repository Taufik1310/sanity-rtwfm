"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import PHOTOSHOOT_CAROUSEL from "@/data/photoshoot-carousel"
import Image from "next/image"

const carouselItems = PHOTOSHOOT_CAROUSEL

export default function HomeCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="w-full p-4 flex items-center justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-9/12 md:w-8/12 lg:w-6/12"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[3/4]">
                <Image
                  src={`/images/photoshoot/${item}`}
                  alt={item}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
