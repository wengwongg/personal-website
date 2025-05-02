import Link from "next/link";

interface UnderlinedLinkProps {
  href: string;
  children: React.ReactNode;
  highlight?: boolean;
  newTab?: boolean;
}

export default function UnderlinedLink({
  href,
  children,
  highlight,
  newTab,
}: UnderlinedLinkProps): JSX.Element {
  return (
    <Link
      className={`underline transition-all hover:underline-offset-[2px] ${
        highlight && "text-blue-700 decoration-blue-700"
      }`}
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
}
