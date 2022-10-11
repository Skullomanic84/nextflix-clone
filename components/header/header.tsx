import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../assets/Logonetflix.png";
import AccountIcon from "../../assets/profileIcon.png";
import Link from "next/link";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/solid";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
    }}

    window.addEventListener("scroll", handleScroll);
    return () => {  
        window.removeEventListener("scroll", handleScroll);
     }
  }, [])
  // scroll   to bottom   of screen   when    scrolling
  
return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      {/* logo section */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          width={100}
          height={100}
          src={Logo}
          alt="netflix logo"
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">Home</li>
          <li className="headerLink">Tv Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      {/* profile section */}
      <div className="flex items-center space-x-6 text-sm font-light">
        <MagnifyingGlassIcon className="sm hidden h-6 w-6 sm:inline " />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <Image
            src={AccountIcon}
            alt="account icon"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
