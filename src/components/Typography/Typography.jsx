import React from "react";
import clsx from "clsx";

export default function Typography({
  children,
  color,
  variant,
  type,
  className,
}) {
  return (
    <div
      className={clsx(
        {
          "text-white": color === "white",
          "text-primary-90": color === "primary-90",
          "text-primary-80": color === "primary-80",
          "text-primary-70": color === "primary-70",
          "text-primary-60": color === "primary-60",
          "text-neutral-80": color === "neutral-80",
          "text-neutral-90": color === "neutral-90",
          "text-text01": color === "navy",
          "text-text02": color === "text02",
          "text-subText": color === "subText",
          "text-btnColor": color === "btnColor",
        },
        {
          "text-[52px] leading-[64px]": variant === "h1",
          "text-5xl leading-[52px]": variant === "h2",
          "text-[32px] leading-9": variant === "h3",
          "text-2xl leading-7": variant === "h4",
          "text-xl leading-6": variant === "h5",
          "text-lg leading-7": variant === "body1",
          "text-base leading-6": variant === "body2",
          "text-sm leading-5": variant === "body3",
          "text-lg leading-6": variant === " btnL",
          "text-sm leading-4": variant === "btnS",
          "text-xs leading-4": variant === "btnXS",
          "text-xs": variant === "text",
        },
        {
          "font-normal": type === "normal",
          "font-medium": type === "medium",
          "font-semibold": type === "semibold",
          "font-bold": type === "bold",
          "font-extrabold": type === "extrabold",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
