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
      className={`underline decoration-zinc-400 underline-offset-[5px] transition-all hover:underline-offset-[6px] ${
        highlight &&
        "text-blue-700 dark:text-blue-300 decoration-blue-800 dark:decoration-blue-400"
      }`}
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
}
