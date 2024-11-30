import { MouseEventHandler } from "react";
import FocusLock from "react-focus-lock";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Ref } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface IProps {
  isOpen: boolean;
  onCloseClick: MouseEventHandler<HTMLElement>;
  menuRef: Ref<HTMLElement>;
}

const MobileMenu = ({ isOpen = false, onCloseClick, menuRef }: IProps) => (
  <div
    className={cn(
      "fixed top-0 left-0 w-screen h-screen flex z-50 bg-[#00000050]",
      isOpen ? "visible" : "invisible"
    )}
  >
    <FocusLock
      className={cn(
        "relative h-full w-full flex pt-10 bg-white transition duration-300 flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
      disabled={!isOpen}
      autoFocus
      returnFocus
      ref={menuRef}
    >
      <button
        className="absolute top-4 left-4 flex justify-center items-center rounded-full transition hover:opacity-80"
        onClick={onCloseClick}
      >
        <AiOutlineCloseCircle className="w-8 h-8" />
      </button>
      <nav className="m-auto flex flex-col items-start text-lg font-medium gap-5">
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
      </nav>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3775245922398!2d73.7703083!3d18.6020818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9d4046792f5%3A0xb1bad92a7987bca5!2sPrateek%20Dental%20Care%20%26%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1732964685338!5m2!1sen!2sin"
        className="w-full h-96 my-12 px-2 rounded-md"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </FocusLock>
  </div>
);

export default MobileMenu;
