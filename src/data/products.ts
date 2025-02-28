const PRODUCTS = [
  {
    id: 1,
    name: "SANITY BLACK T-SHIRT DROP [2025]",
    price: 130000,
    description:
      "Black 20s cotton short sleeve T-shirts, tubular fit, seamless double needle 2cm collar, taped neck and shoulders, satin & cotton label, double needle sleeve and bottom hem, silver and white plastisol ink screen print.",
    thumbnail: "sanity-black-tshirt-drop-2025-1.png",
    pics: [
      "sanity-black-tshirt-drop-2025-1.png",
      "sanity-black-tshirt-drop-2025-2.png",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 1,
    name: "SANITY WHITE T-SHIRT DROP [2025]",
    price: 130000,
    description:
      "White 20s cotton short sleeve T-shirts, tubular fit, seamless double needle 2cm collar, taped neck and shoulders, satin & cotton label, double needle sleeve and bottom hem, silver and white plastisol ink screen print.",
    thumbnail: "sanity-white-tshirt-drop-2025-1.png",
    pics: [
      "sanity-white-tshirt-drop-2025-1.png",
      "sanity-white-tshirt-drop-2025-2.png",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
]

export function GetAllProduct() {
  return PRODUCTS
}
