import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav>
      <ul className="list-none m-5">
        <div className="mb-5 flex flex-col items-start">
          <NavLink key="home" href="/" text="home" />
          <NavLink key="blog" href="" text="blog" />
        </div>

        <div className="flex flex-col items-start">
          <NavLink key="resume" href="" text="résumé" isMisc={true} />
          <NavLink key="github" href="" text="github" isMisc={true} />
          <NavLink key="linkedin" href="" text="linkedin" isMisc={true} />
          <NavLink key="contact" href="" text="contact" isMisc={true} />
        </div>
      </ul>
    </nav>
  );
}
