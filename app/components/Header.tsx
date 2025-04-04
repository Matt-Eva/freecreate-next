import Link from "next/link";
import FullScreenButton from "./FullScreenButton";
import ProfileIcon from "./ProfileIcon";

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
    <header className="fixed top-0 z-10 bg-white w-screen flex items-center h-[40px] sm:h-[45px] mb-[10px]">
      <Sheet>
        <SheetTrigger>
          <AlignJustify
            strokeWidth={1}
            className="  hover:text-black hover:cursor-pointer transition ease-in-out duration-500 ml-1 sm:mb-0.5 sm:mr-3 sm:ml-3 sm:w-8 sm:h-8"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Browse Content</SheetTitle>
            <SheetDescription>
              Select what type of content you're interested in.
            </SheetDescription>
          </SheetHeader>
          <ul className="">
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
      </Sheet>
      <h1 className=" mt-0.5 ml-1 sm:ml-2 sm:text-2xl font-bold  align-bottom  hover:text-black transition ease-in-out duration-500">
        <Link href="/">FreeCreate</Link>
      </h1>
      <Link
        href="/about"
        id="about"
        className="underline text-sm sm:text-base ml-1 sm:ml-6 mt-0.5 sm:mt-1.5   transition ease-in-out duration-500 hover:text-black"
      >
        about
      </Link>
      <Link
        href="/donate"
        className="underline  text-sm sm:text-base ml-1 sm:ml-6 mt-0.5 sm:mt-1.5   transition ease-in-out duration-500 hover:text-black"
      >
        donate
      </Link>
      <Link
        href="/app"
        className="underline  text-sm sm:text-base ml-1 sm:ml-6 mt-0.5 sm:mt-1.5   transition ease-in-out duration-500 hover:text-black"
      >
        app
      </Link>
      <FullScreenButton />
      <ProfileIcon />
    </header>
  );
}

export default Header;
