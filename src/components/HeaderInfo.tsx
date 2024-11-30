import { cn } from "@/lib/utils";
import Link from "next/link";

interface IProps {
  Icon: React.ReactNode;
  text: React.ReactNode;
  href: string;
  [x: string]: any;
}

const HeaderInfo = ({ Icon, text, className = "", href, ...rest }: IProps) => {
  const finalClassName = cn("flex items-center gap-2", className);
  if (!href) {
    return (
      <div className={finalClassName} {...rest}>
        {Icon}
        {text}
      </div>
    );
  }
  return (
    <Link href={href} target="_blank" className={finalClassName} {...rest}>
      {Icon}
      {text}
    </Link>
  );
};

export default HeaderInfo;
