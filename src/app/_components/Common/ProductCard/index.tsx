import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

import { ProductType } from "@/types/product"
import { IDRFormat } from "@/lib/utils"

export default function ProductCard({
  id,
  name,
  price,
  thumbnail,
}: ProductType) {
  return (
    <Card className="aspect-[3/4] group relative flex flex-col rounded-sm">
      <figure className="group-hover:opacity-90 relative aspect-square h-6/12">
        <Image
          className="object-contain"
          src={`/product/images/${thumbnail}`}
          alt={name}
          fill
        />
      </figure>
      <CardContent className="p-4 flex flex-col justify-between items-start gap-2">
        <Link href={`/shop/product/${id}`} className="text-start">
          <h3 className="text-base font-bold">{name}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <p className="text-lg font-extrabold">{IDRFormat(price)}</p>
          <p className="text-base font-regular line-through text-zinc-400">
            {IDRFormat(price * 2)}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
