import Icon from "@/components/Icon"
import Typography from "@/components/Typography"

export default function Headbar() {
  return (
    <div className="flex items-center overflow-hidden bg-black">
      <ul className="flex items-center animate-infinite-scroll gap-4 bg-black py-4 text-white">
        {[...Array(40)].map((_, index) =>
          (index + 1) % 2 === 0 ? (
            <Typography
              key={index}
              size="regular"
              weight="bold"
              text="RECOVER THE WORLD FROM MADNESS"
              className="text-nowrap"
            />
          ) : (
            <StarComponent key={index} />
          )
        )}
      </ul>
    </div>
  )
}

function StarComponent() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(3)].map((_, index) => (
        <Icon.star key={index} />
      ))}
    </div>
  )
}
