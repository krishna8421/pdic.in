import Wrapper from "./Wrapper";
// import logo from "@/assets/logo.jpeg";
// import Image from "next/image";
import Social from "./Social";
import Link from "next/link";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Benefits",
    href: "/#benefits",
  },
  {
    title: "Booking",
    href: "/#booking",
  },
];

const Footer = () => (
  <footer className="w-full text-center bg-accent mt-8">
    <Wrapper className="py-12">
      <div>
        <div className="flex flex-col items-center sm:flex-row justify-between">
          <h1 className="max-w-96 font-semibold text-white text-3xl">
            Prateek Dental Care and Implant Centre
          </h1>
          <div className="flex gap-8 py-12 sm:py-0">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-white font-medium text-sm mr-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <Social />
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3775245922398!2d73.7703083!3d18.6020818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9d4046792f5%3A0xb1bad92a7987bca5!2sPrateek%20Dental%20Care%20%26%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1732964685338!5m2!1sen!2sin"
          className="w-full h-96 my-12 rounded-md"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Prateek Dental Care and Implant Centre.
          All rights reserved.
        </p>
      </div>
    </Wrapper>
  </footer>
);

export default Footer;
