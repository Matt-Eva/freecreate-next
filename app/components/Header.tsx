import Link from "next/link";
import FullScreenButton from "./FullScreenButton";
import ProfileIcon from "./ProfileIcon";

import { AlignJustify } from "lucide-react";

function Header() {
  return (
    <header className="fixed top-0 z-10 bg-white w-screen flex items-center h-[40px] sm:h-[45px] mb-[10px]">
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

      <h1 className=" mt-0.5 ml-1 sm:ml-2 sm:text-2xl font-bold  align-bottom  hover:text-black transition ease-in-out duration-500">
        <Link href="/">FreeCreate</Link>
      </h1>
      <Link
        href="/about"
        id="about"
        className="underline text-sm sm:text-base ml-2 sm:ml-6 mt-0.5 sm:mt-1.5   transition ease-in-out duration-500 hover:text-black"
      >
        about
      </Link>
      <Link
        href="/donate"
        className="underline  text-sm sm:text-base ml-2 sm:ml-6 mt-0.5 sm:mt-1.5   transition ease-in-out duration-500 hover:text-black"
      >
        donate
      </Link>
      <Link
        href="/app"
        className="underline  text-sm sm:text-base ml-2 sm:ml-6 mt-0.5 sm:mt-1.5   transition ease-in-out duration-500 hover:text-black"
      >
        app
      </Link>
      <Link
        href="/blog"
        className="underline hidden sm:block text-sm sm:text-base  sm:ml-6 mt-0.5 sm:mt-1.5 "
      >
        blog
      </Link>
      <FullScreenButton />
      <ProfileIcon />
    </header>
  );
}

export default Header;
