"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import Icon from "@/components/Icon"
import Typography from "@/components/Typography"
import { useEffect, useState } from "react"

export default function CTAWhatsapp() {
  const [baseUrl, setBaseUrl] = useState("")

  useEffect(() => {
    setBaseUrl(window.location.origin)
  }, [])

  return (
    <Button
      asChild
      className="fixed bottom-6 right-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
    >
      <Link
        href={`whatsapp://send?phone=${
          process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
        }&text=${encodeURIComponent(
          `${baseUrl} \n\nI'm interested in this product and I have a few questions. Can you help?`
        )}`}
        target="_blank"
      >
        <Icon.whatsapp />
        <Typography size="regular" weight="semibold" text="Chat With Us" />
      </Link>
    </Button>
  )
}
