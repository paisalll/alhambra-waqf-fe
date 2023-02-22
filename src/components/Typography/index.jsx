import React from "react";
import Typography from "./Typography";
export default function Typography({ children, variant, type, ...props }) {
  return (
    <Typography variant={variant} type={type}>
      {children}
    </Typography>
  );
}
