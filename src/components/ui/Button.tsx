import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-seal text-paper hover:bg-seal-dark active:bg-seal-dark",
  secondary:
    "bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink/5",
  ghost:
    "bg-paper/90 text-ink hover:bg-paper",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-tight transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none";

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  variant?: Variant;
}

interface ButtonAsAnchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
  variant?: Variant;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button(props: ButtonProps) {
  const { variant = "primary", className, ...rest } = props;

  if (props.as === "a") {
    const { as, ...anchorProps } = rest as ButtonAsAnchor;
    return (
      <a
        className={clsx(baseStyles, variantStyles[variant], className)}
        {...anchorProps}
      />
    );
  }

  const { as, ...buttonProps } = rest as ButtonAsButton;
  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...buttonProps}
    />
  );
}
