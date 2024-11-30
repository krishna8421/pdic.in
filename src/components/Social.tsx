import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import HeaderInfo from "./HeaderInfo";

const Social = () => {
  return (
    <div className="flex flex-col gap-4 text-white text-sm font-medium max-w-44">
      <HeaderInfo
        href="https://www.instagram.com/prateek.dentalcare"
        Icon={<BiLogoInstagramAlt size={20} />}
        text="Instagram"
      />
      <HeaderInfo
        href="https://www.facebook.com/profile.php?id=61559897704462"
        Icon={<FaFacebookSquare size={17} className="ml-[2px]" />}
        text="Facebook"
      />
      <HeaderInfo
        href="https://wa.me/917229832893"
        Icon={<FaSquareWhatsapp size={17} className="ml-[2px]" />}
        text="+91 72298 32893"
      />
      <HeaderInfo
        href="https://maps.app.goo.gl/cBNCf7LNa55UvcS16"
        Icon={<IoLocationSharp size={17} className="ml-[2px] flex-shrink-0" />}
        text="Shop 205, Pink City Commercial, Pune"
      />
    </div>
  );
};

export default Social;
