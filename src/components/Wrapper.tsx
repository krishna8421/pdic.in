import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  [x: string]: any;
}

const Wrapper = ({ children, className = "", ...rest }: IProps) => (
  <div
    className={cn("max-w-[1248px] w-full mx-auto px-6", className)}
    {...rest}
  >
    {children}
  </div>
);

export default Wrapper;
