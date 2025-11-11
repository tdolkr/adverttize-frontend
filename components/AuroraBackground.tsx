import type { HTMLAttributes } from "react";

type AuroraVariant = "default" | "invest" | "advertise" | "about" | "careers" | "contact";

type AuroraBackgroundProps = HTMLAttributes<HTMLDivElement> & {
  variant?: AuroraVariant;
};

export function AuroraBackground({
  className,
  variant = "default",
  ...props
}: AuroraBackgroundProps) {
  const classes = ["aurora", variant !== "default" ? `aurora--${variant}` : undefined, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...props} className={classes}>
      <span className="aurora__layer aurora__layer--one" />
      <span className="aurora__layer aurora__layer--two" />
      <span className="aurora__layer aurora__layer--three" />
      <span className="aurora__layer aurora__layer--four" />
      <span className="aurora__pulse" />
    </div>
  );
}
