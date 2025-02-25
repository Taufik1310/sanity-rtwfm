import { Button } from "@/components/ui/button"
import Icon from "@/components/Icon"

export default function NavbarTool() {
  return (
    <div className="flex items-center justify-between gap-4 md:gap-8 md:justify-end">
      <Button variant="ghost" size="icon" asChild className="size-6">
        <Icon.search />
      </Button>
      <Button variant="ghost" size="icon" asChild className="size-6">
        <Icon.cart />
      </Button>
    </div>
  )
}
