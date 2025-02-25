import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import MENU_ITEMS from "@/lib/menu-list"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Icon from "@/components/Icon"
import Typography from "@/components/Typography"

const menuItems = MENU_ITEMS

export default function NavbarSheet() {
  const pathName = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden size-12"
          asChild
        >
          <Icon.menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 pl-0">
        <MobileLink
          href="/"
          className="flex items-center ms-8"
          onOpenChange={() => {}}
        >
          <div className="relative size-24">
            <Image
              src={"/assets/images/logo/logo-primary-black.png"}
              alt="Sanity Logo"
              fill
              className="object-contain"
            />
          </div>
        </MobileLink>
        <div className="my-16 h-[calc(100vh-8rem)]">
          <div className="flex flex-col">
            {menuItems.map((item) => {
              const isActive = pathName === item.href

              return (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onOpenChange={() => {}}
                  className={cn(
                    "px-8 py-4 ",
                    isActive
                      ? "bg-zinc-100"
                      : "bg-transparent hover:bg-zinc-100"
                  )}
                >
                  <Typography
                    size="title"
                    weight={isActive ? "bold" : "medium"}
                    text={item.title}
                  />
                </MobileLink>
              )
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps {
  href: string
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
