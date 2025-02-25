import Image from "next/image"

import Typography from "@/components/Typography"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomeHeroContent() {
  return (
    <div className="absolute size-full flex flex-col justify-center items-center gap-16 py-12 px-8 text-white">
      <div className="relative size-16">
        <Image
          src={"/assets/images/logo/logo-primary-white.png"}
          alt="Sanity Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-4 text-center ">
        <Typography
          size="heading"
          weight="bold"
          text="RECOVER THE WORLD FROM MADNESS"
        />
        <Typography size="title" weight="light" text="AVALAIBLE NOW" />
      </div>
      <div className="flex flex-col items-center gap-4 text-center ">
        <Button
          variant={"outline"}
          className="bg-transparent rounded-none py-6 px-12"
          asChild
        >
          <Link href={"/shop"}>
            <Typography size="title" weight="light" text="SHOP NOW" />
          </Link>
        </Button>
        <Typography
          size="small"
          weight="light"
          text="to create clothing that inspires mindfulness, resilience, and positive action in a chaotic world."
        />
      </div>
    </div>
  )
}
