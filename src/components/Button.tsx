import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white text-white bg-transparent",
    },
    size: {
      sm: "h-10",
    },
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof classes> {
  // more extends here
}
export default function Button(props: ButtonProps) {
  const { variant, className, size, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        className,
        size,
      })}
      {...otherProps}
    />
  );
}
