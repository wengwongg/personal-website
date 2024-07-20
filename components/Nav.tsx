import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav>
      <ul className="list-none">
        <div className="mb-5 flex flex-col items-start">
          <NavLink key="home" href="/" text="home" />
          <NavLink key="blog" href="/blog" text="blog" />
        </div>

        <div className="flex flex-col items-start">
          <NavLink key="resume" href="" text="résumé" isMisc={true} />
          <NavLink
            key="github"
            href="https://github.com/wengwongg"
            text="github"
            isMisc={true}
            newTab={true}
          />
          <NavLink
            key="linkedin"
            href="https://www.linkedin.com/in/wengwonghum/"
            text="linkedin"
            isMisc={true}
            newTab={true}
          />
          <NavLink key="contact" href="/contact" text="contact" isMisc={true} />
        </div>
      </ul>
    </nav>
  );
}
