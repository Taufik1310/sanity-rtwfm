import Image from "next/image"
import HomeHeroContent from "./Content"

export default function HomeHero() {
  return (
    <div className="w-full h-[calc(100vh-8rem)] relative backdrop-brightness-50">
      <Image
        src={"/assets/images/hero-banner.jpg"}
        alt="Sanity Hero 1"
        fill
        className="object-cover brightness-[.35]"
      />
      <HomeHeroContent />
    </div>
  )
}
