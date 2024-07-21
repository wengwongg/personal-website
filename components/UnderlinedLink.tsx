import Link from "next/link";

interface UnderlinedLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function UnderlinedLink({
  href,
  children,
}: UnderlinedLinkProps): JSX.Element {
  return (
    <Link
      className="underline decoration-zinc-300 underline-offset-[5px] transition-all hover:underline-offset-[6px]"
      href={href}
    >
      {children}
    </Link>
  );
}
