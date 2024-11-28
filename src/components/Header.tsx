"use client";

import HeaderInfo from "./HeaderInfo";
import Wrapper from "./Wrapper";
import { BsTelephone, BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Link from "next/link";
import ButtonLink from "./ButtonLink";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState, useRef } from "react";
import MobileMenu from "./MobileMenu";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  useLockBodyScroll(menuIsOpen);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="w-full py-2 border-b border-[#88888830] hidden sm:block">
        <Wrapper className="flex items-center gap-4 text-xs text-secondary font-medium">
          <HeaderInfo Icon={<BsTelephone />} text="722 983 2893" />
          <HeaderInfo
            Icon={<GoLocation />}
            text="Shop 205, Pink City Commercial, Pune"
          />
          <HeaderInfo Icon={<BsClock />} text="Mon-Fri. 06:00AM - 9:00PM" />
        </Wrapper>
      </div>
      <div className="w-full py-4">
        <Wrapper className="flex items-center justify-between">
          <Link
            className="text-2xl font-bold transition hover:opacity-80"
            href="/"
          >
            <span className="text-accent">PD</span>IC
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a className="transition hover:text-accent" href="#services">
              Services
            </a>
            <a className="transition hover:text-accent" href="#benefits">
              Benefits
            </a>
            <a className="transition hover:text-accent" href="#team">
              Team
            </a>
            <ButtonLink className="px-7 py-3" href="#booking">
              Booking
            </ButtonLink>
          </div>
          <button className="md:hidden block" onClick={toggleMenu}>
            <HiOutlineMenuAlt3 className="w-8 h-8" />
          </button>
        </Wrapper>
      </div>
      <MobileMenu
        isOpen={menuIsOpen}
        onCloseClick={toggleMenu}
        menuRef={menuRef}
      />
    </header>
  );
};

export default Header;
