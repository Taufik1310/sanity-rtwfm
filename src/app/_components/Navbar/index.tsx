"use client"

import type * as React from "react"

import NavbarSheet from "./Sheet"
import NavbarMenu from "./Menu"
import NavbarTool from "./Tool"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex items-center justify-between gap-4 py-4 px-2 md:px-16">
        <NavbarSheet />
        <NavbarMenu />
        <NavbarTool />
      </div>
    </header>
  )
}
