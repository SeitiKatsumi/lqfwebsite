import Image from "next/image";

export function Logo({
  variant = "horizontal",
  priority = false
}: {
  variant?: "horizontal" | "vertical";
  priority?: boolean;
}) {
  const isHorizontal = variant === "horizontal";
  return (
    <Image
      src={isHorizontal ? "/logos/lqf-logo-horizontal.png" : "/logos/lqf-logo-vertical.png"}
      alt="LQF Farmacêutica"
      width={isHorizontal ? 1080 : 1080}
      height={isHorizontal ? 155 : 610}
      priority={priority}
      sizes={isHorizontal ? "(max-width: 768px) 120px, 210px" : "(max-width: 768px) 180px, 240px"}
      className={isHorizontal ? "h-auto w-[116px] sm:w-[168px] lg:w-[210px]" : "h-auto w-[180px] sm:w-[220px]"}
    />
  );
}
