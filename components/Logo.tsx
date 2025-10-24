import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Adverttize"
      width={240}
      height={68}
      priority={priority}
      className={className}
    />
  );
}
