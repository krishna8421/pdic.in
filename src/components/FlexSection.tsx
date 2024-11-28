import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import Wrapper from "./Wrapper";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children?: React.ReactNode;
  sectionClassName?: string;
  wrapperClassName?: string;
  [x: string]: any;
}

const FlexSection = ({
  children,
  sectionClassName = "",
  wrapperClassName = "",
  ...rest
}: IProps) => (
  <section className={cn("w-full py-16 lg:py-24", sectionClassName)} {...rest}>
    <Wrapper
      className={cn(
        "w-full flex flex-col max-w-3xl ml-0",
        "lg:max-w-[1248px] lg:ml-auto lg:items-center lg:justify-between lg:gap-x-20 lg:flex-row lg:flex-wrap",
        wrapperClassName
      )}
    >
      {children}
    </Wrapper>
  </section>
);

export default FlexSection;
