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

function Header() {
  return (
    <header className="w-full flex items-center">
      {/* <Sheet>
      <SheetTrigger>
        <AlignJustify className=" ml-1 sm:mb-0.5 sm:mr-2 sm:ml-2 sm:w-8 sm:h-8" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Browse Content</SheetTitle>
          <SheetDescription>
            Select what type of content you're interested in.
          </SheetDescription>
        </SheetHeader>
        <ul className="text-muted-foreground">
          <li>Fiction</li>
          <li>Poetry</li>
          <li>Essays</li>
          <li>Blogs</li>
          <li>Reviews</li>
          <li>Visual Art</li>
          <li>Web Comics</li>
          <li>Music</li>
          <li>Podcasts</li>
          <li>Animation</li>
          <li>Video</li>
        </ul>
      </SheetContent>
    </Sheet> */}
      <h1 className="text-xl ml-1 sm:ml-2 sm:text-3xl font-bold  align-bottom">
        FreeCreate
      </h1>
      <Link
        href="/about"
        id="about"
        className=" text-sm sm:text-base ml-2 sm:ml-6 mt-0.5 sm:mt-1.5 hover:underline"
      >
        About
      </Link>
      <Link
        href="/donate"
        className=" text-sm sm:text-base ml-2 sm:ml-6 mt-0.5 sm:mt-1.5 hover:underline"
      >
        Donate
      </Link>
      <Link
        href="/app"
        className=" text-sm sm:text-base ml-2 sm:ml-6 mt-0.5 sm:mt-1.5 hover:underline"
      >
        App
      </Link>
      <Link
        href="/profile"
        className="justify-self-end text-sm sm:text-base ml-auto mr-1 mt-0.5 sm:mr-2 sm:mt-1.5 hover:underline"
      >
        Profile
      </Link>
    </header>
  );
}

export default Header;
