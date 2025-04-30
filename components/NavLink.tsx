import Link from "next/link";

interface NavLinkProps {
  href: string;
  text: string;
  isMisc?: boolean;
  newTab?: boolean;
  onClick?: () => void;
}

export default function NavLink({
  href,
  text,
  isMisc = false,
  newTab = false,
  onClick,
}: NavLinkProps): JSX.Element {
  return (
    <li className="text-base transition-all hover:underline inline-block text-slate-900">
      <Link
        className={`${isMisc && "text-slate-500"}`}
        href={href}
        target={newTab ? "_blank" : "_self"}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  );
}
