"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Section } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";



const MobileNav = ({ user }: MobileNavProps) => {
  const Pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet side="right">
        <SheetTrigger  >
          <Image
          
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
          <SheetContent side="left" className="border-none bg-white">

            <Link href='/' className=' gap-1 px-4 item-center flex cursor-pointer'>
              <Image
                src="icons/logo.svg" alt="logo" width={34} height={34} />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Matto</h1>
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 text-white pt-16">
                  {sidebarLinks.map((item) => {
                    const isActive = Pathname === item.route || Pathname.startsWith('${item.route}/')
                    return (
                      <SheetClose asChild key={item.route}>


                        <Link href={item.route} key={item.label}

                          className={cn("mobilenav-sheet_close w-full", { "bg-bank-gradient": isActive })}>

                          < Image src={item.imgURL}
                            alt={"item.label"}
                            width={20}
                            height={20}

                            className={cn({ "brightness-[3] invert-0": isActive })} />

                          <p className={cn(' text-16 text-semibold text-black-2 ', { 'text-white': isActive })}>
                            {item.label}
                          </p>
                        </Link>

                      </SheetClose>



                    )
                  })}
                  USER
                </nav>
              </SheetClose>
              FOOTER
            </div>



          </SheetContent>
        </SheetTrigger>
      </Sheet >

    </section >




  )
}

export default MobileNav;


