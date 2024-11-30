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
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  useLockBodyScroll(menuIsOpen);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="w-full py-2 border-b border-[#88888830]">
        <Wrapper className="flex flex-wrap items-center sm:justify-between gap-4 text-xs text-secondary font-medium">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <BsTelephone />
              <div className="flex items-center">
                <Link
                  href="https://wa.me/917028332893"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  70283 32893,&nbsp;
                </Link>
                <Link
                  href="https://wa.me/917229832893"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  72298 32893
                </Link>
              </div>
            </div>
            <HeaderInfo
              href="https://maps.app.goo.gl/cBNCf7LNa55UvcS16"
              Icon={<GoLocation />}
              text="Shop 205, Pink City Commercial, Pune"
            />
            <HeaderInfo
              href=""
              Icon={<BsClock />}
              text="All Day. 10:00AM-2:00PM | 5:00PM-9:00PM"
            />
          </div>
          <div className="flex wrap gap-4">
            <HeaderInfo
              href="https://www.instagram.com/prateek.dentalcare"
              Icon={<BiLogoInstagramAlt size={16} />}
              text="Instagram"
            />
            <HeaderInfo
              href="https://www.facebook.com/profile.php?id=61559897704462"
              Icon={<FaFacebookSquare size={14} />}
              text="Facebook"
            />
          </div>
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
            <Link className="transition hover:text-accent" href="/services">
              Services
            </Link>
            <Link className="transition hover:text-accent" href="/gallery">
              Gallery
            </Link>
            <Link className="transition hover:text-accent" href="/#about">
              About
            </Link>
            <Link className="transition hover:text-accent" href="/#benefits">
              Benefits
            </Link>
            <ButtonLink className="px-7 py-3" href="/#booking">
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
