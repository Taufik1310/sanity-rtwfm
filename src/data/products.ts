const PRODUCTS = [
  {
    id: "sanity-black-t-shirt-drop-2025",
    name: "SANITY BLACK T-SHIRT DROP [2025]",
    price: 130000,
    description:
      "Black 20s cotton short sleeve T-shirts, tubular fit, seamless double needle 2cm collar, taped neck and shoulders, satin & cotton label, double needle sleeve and bottom hem, silver and white plastisol ink screen print.",
    thumbnail: "sanity-black-tshirt-drop-2025-2.png",
    pics: [
      "sanity-black-tshirt-drop-2025-1.png",
      "sanity-black-tshirt-drop-2025-2.png",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
]

export function GetAllProduct() {
  return PRODUCTS
}

export function GetDetailProduct(id: string) {
  return PRODUCTS.find((product) => product.id === id) || null
}
