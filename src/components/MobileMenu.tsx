import { MouseEventHandler } from "react";
import FocusLock from "react-focus-lock";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Ref } from "react";
import { cn } from "@/lib/utils";

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
        "relative h-full w-full max-w-xs flex pt-10 bg-white transition duration-300",
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
        <a
          className="transition hover:text-accent"
          href="#services"
          onClick={onCloseClick}
        >
          Services
        </a>
        <a
          className="transition hover:text-accent"
          href="#benefits"
          onClick={onCloseClick}
        >
          Benefits
        </a>
        <a
          className="transition hover:text-accent"
          href="#team"
          onClick={onCloseClick}
        >
          Team
        </a>
        <a
          className="transition hover:text-accent"
          href="#booking"
          onClick={onCloseClick}
        >
          Booking
        </a>
      </nav>
    </FocusLock>
  </div>
);

export default MobileMenu;
