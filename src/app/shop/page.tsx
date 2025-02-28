import Typography from "@/components/Typography"
import { GetAllProduct } from "@/data/products"
import ProductCard from "../_components/Common/ProductCard"

const PRODUCTS = GetAllProduct()

export default function Shop() {
  return (
    <div className="w-full py-16 px-8 lg:px-16 flex flex-col gap-12">
      <Typography size="heading" weight="bold" text="ALL PRODUCT" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8">
        {PRODUCTS?.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </div>
  )
}
