import Auth from "./auth";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="w-full flex items-center">
        <Sheet>
          <SheetTrigger>
            <AlignJustify className="mr-1 ml-1 mb-0.5 sm:mr-2 sm:ml-2 sm:w-8 sm:h-8" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Browse Content</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <h1 className="text-xl sm:text-3xl font-bold  align-bottom">
          FreeCreate
        </h1>
        <Link href="/" className="  ml-1.5 sm:ml-6 mt-1.5 ">
          About
        </Link>
        <Link href="/" className="  ml-1.5 sm:ml-6 mt-1.5 ">
          Donate
        </Link>
        <Link href="/" className="  ml-1.5 sm:ml-6 mt-1.5 ">
          App
        </Link>
        <Link
          href="/"
          className="justify-self-end ml-auto mr-1 sm:mr-2   mt-1.5 "
        >
          Profile
        </Link>
      </header>
      <main>
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        {/* <Auth />
        <Link href="/test">test</Link> */}
      </main>
    </>
  );
}
