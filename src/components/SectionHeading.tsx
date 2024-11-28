import { cn } from "@/lib/utils";

interface IProps {
  direction: "left" | "right";
  title: React.ReactNode;
  subtitle: React.ReactNode;
  className?: string;
}

const SectionHeading = ({
  direction,
  title,
  subtitle,
  className = "",
}: IProps) => (
  <div
    className={cn(
      "relative flex flex-grow justify-between items-center",
      direction === "left" ? "flex-row" : "flex-row-reverse",
      className
    )}
  >
    <h2
      className={cn(
        "flex-1 text-3xl xl:text-4xl font-semibold tracking-wide",
        direction === "left" ? "lg:text-left" : "lg:text-right"
      )}
    >
      {title}
    </h2>
    <h3
      className={cn(
        "flex-1 text-3xl xl:text-4xl font-semibold hidden lg:block",
        direction === "left" ? "text-right" : "text-left"
      )}
    >
      {subtitle}
    </h3>
    <hr
      className={cn(
        "absolute bottom-0 w-2/3 h-[1px] bg-[#88888830] hidden lg:block",
        direction === "left" ? "right-0" : "left-0"
      )}
    />
  </div>
);

export default SectionHeading;
