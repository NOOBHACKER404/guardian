import type { AnchorHTMLAttributes, ReactNode } from "react";

export function Link({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode }) {
  const target = typeof href === "string"
    ? (href.startsWith("#/") ? href : `#${href.startsWith("/") ? href : `/${href}`}`)
    : "#/";
  return <a href={target} {...props}>{children}</a>;
}
