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
      className={`hover:underline underline-offset-[5px] ${
        highlight && "text-blue-700 decoration-blue-700"
      }`}
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
}
