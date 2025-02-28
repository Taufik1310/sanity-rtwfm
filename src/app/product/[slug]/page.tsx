"use client"

import { notFound } from "next/navigation"
import { use, useState } from "react"

import ProductDetailGallery from "../_components/Gallery"
import Typography from "@/components/Typography"
import { Button } from "@/components/ui/button"

import { GetDetailProduct } from "@/data/products"
import { IDRFormat } from "@/lib/utils"

export default function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const product = GetDetailProduct(slug)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  if (!product) return notFound()

  const currentUrl =
    typeof window !== "undefined"
      ? window.location.origin + `/product/${slug}`
      : ""

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size before buying.")
      return
    }

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

    const message = `
    *${product.name}*%0A
    *Size:* ${selectedSize}%0A
    *Price:* ${IDRFormat(product.price)}%0A
    *Product Link:* ${currentUrl}%0A%0A
    I'm interested in buying this item.`

    const whatsappUrl = `whatsapp://send?phone=${whatsappNumber}&text=${message}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="w-full py-16 px-8 md:px-16 flex flex-col lg:flex-row gap-12">
      <ProductDetailGallery pics={product.pics} />
      <div className="w-full lg:w-5/12 flex flex-col gap-8">
        <Typography size="heading" weight="bold" text={product.name} />
        <div className="w-full flex items-center gap-2">
          <Typography
            size="heading"
            weight="medium"
            text={IDRFormat(product.price)}
          />
          <Typography
            size="title"
            weight="regular"
            text={IDRFormat(product.price * 2)}
            className="line-through text-zinc-400"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Typography
            size="large"
            weight="bold"
            text="SIZE"
            className="text-zinc-400"
          />
          <div className="w-full flex flex-wrap gap-4">
            {product.sizes.map((size) => (
              <Button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`cursor-pointer px-6 py-6 border rounded-full flex items-center justify-center ${
                  selectedSize === size
                    ? "bg-black text-white hover:bg-black"
                    : "bg-transparent text-black hover:bg-black hover:text-white"
                }`}
              >
                <Typography size="title" weight="medium" text={size} />
              </Button>
            ))}
          </div>
        </div>
        <Button className="py-6" onClick={() => handleBuyNow()}>
          <Typography size="title" weight="medium" text={"Buy It Now"} />
        </Button>
        <Typography
          size="regular"
          weight="regular"
          text={product.description}
          className="text-zinc-500"
        />
      </div>
    </div>
  )
}
