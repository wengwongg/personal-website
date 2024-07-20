import Link from "next/link";

interface NavLinkProps {
  href: string;
  text: string;
  isMisc?: boolean;
  newTab?: boolean;
}

export default function NavLink({
  href,
  text,
  isMisc = false,
  newTab = false,
}: NavLinkProps): JSX.Element {
  return (
    <li className="text-base transition-all hover:text-[1.063rem] inline-block">
      <Link
        className={`${isMisc && "text-secondary-dark"}`}
        href={href}
        target={newTab ? "_blank" : "_self"}
      >
        {text}
      </Link>
    </li>
  );
}
