import HomeHero from "./_components/Hero"
import HomeProducts from "./_components/Products"

export default function Home() {
  return (
    <div className="w-full">
      <HomeHero />
      <HomeProducts />
    </div>
  )
}
