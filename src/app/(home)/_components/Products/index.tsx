import Link from "next/link"

import ProductCard from "@/app/_components/Common/ProductCard"
import Typography from "@/components/Typography"
import { Button } from "@/components/ui/button"

import PRODUCTS from "@/data/products"

const productList = PRODUCTS

export default function HomeProducts() {
  return (
    <div className="w-full flex flex-col items-center gap-12 text-center px-8">
      <Typography size="title" weight="extrabold" text="ALL PRODUCT" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8">
        {productList?.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
      <Button
        variant={"outline"}
        className="bg-transparent rounded-none py-4 px-8 border-black"
        asChild
      >
        <Link href={"/shop"}>
          <Typography size="regular" weight="semibold" text="View All" />
        </Link>
      </Button>
    </div>
  )
}
