import Link from "next/link";

interface NavLinkProps {
  href: string;
  text: string;
  isMisc?: boolean;
}

export default function NavLink({
  href,
  text,
  isMisc = false,
}: NavLinkProps): JSX.Element {
  return (
    <li className="text-base transition-all hover:text-[1.063rem] inline-block font-light">
      <Link className={`${isMisc && "text-background-dark"}`} href={href}>
        {text}
      </Link>
    </li>
  );
}
