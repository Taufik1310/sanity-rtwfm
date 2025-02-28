import Link from "next/link"

import Typography from "@/components/Typography"
import { Button } from "@/components/ui/button"

import { GetSocialMediaList } from "@/data/social-media"
import { GetFooterMenu } from "@/data/footer-menu"

const SOCIAL_MEDIA = GetSocialMediaList()
const FOOTER_MENU = GetFooterMenu()

export default function Footer() {
  return (
    <footer className="w-full px-4">
      <div className="w-full border-t border-b py-12 px-4 flex items-center justify-center gap-8">
        {SOCIAL_MEDIA?.map((item, index) => (
          <Button key={index} asChild>
            <Link
              href={item.link}
              className="w-6/12 md:w-4/12 lg:w-2/12 flex items-center justify-center"
            >
              <item.icon />
              <Typography size="small" weight="bold" text={item.name} />
            </Link>
          </Button>
        ))}
      </div>
      <div className="w-full py-12 flex flex-col items-center gap-8">
        <ul className="w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {FOOTER_MENU?.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                <Typography size="regular" weight="regular" text={item.name} />
              </Link>
            </li>
          ))}
        </ul>
        <Typography
          size="small"
          weight="regular"
          text={`&copy; ${new Date().getFullYear()}, SANITY RTWFM Powered by Taufik Ismail`}
        />
      </div>
    </footer>
  )
}
