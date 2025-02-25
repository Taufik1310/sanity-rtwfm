import Link from "next/link"
import Image from "next/image"

import MENU_ITEMS from "@/lib/menu-list"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Typography from "@/components/Typography"

const menuItems = MENU_ITEMS

export default function NavbarMenu() {
  return (
    <div className="md:flex items-center gap-8">
      <Link href="/">
        <div className="relative w-32 h-12">
          <Image
            src={"/assets/images/logo/logo-secondary-black.png"}
            alt="Sanity Logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>
      <NavigationMenu className="hidden md:flex items-center">
        <NavigationMenuList className="flex items-center">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Typography
                    size="regular"
                    weight="regular"
                    text={item.title}
                  />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
