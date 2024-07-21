"use client";

import Modal from "./Modal";
import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav>
      <ul className="list-none flex gap-5 md:gap-0 md:flex-col">
        <div className="mb-5 flex flex-col items-start md:items-end">
          <NavLink key="home" href="/" text="home" />
          <NavLink key="blog" href="/blog" text="blog" />
        </div>

        <div className="flex flex-col items-start md:items-end">
          <NavLink
            key="resume"
            href=""
            text="résumé"
            isMisc={true}
            onClick={() =>
              (
                document.getElementById(
                  "download_confirmation_modal"
                ) as HTMLDialogElement
              ).showModal()
            }
          />

          <Modal
            id="download_confirmation_modal"
            heading="Heads up!"
            message="You are going to download my résumé. Click 'Download' to proceed."
            additionalButtons={
              <button
                onClick={() =>
                  (
                    document.getElementById(
                      "download_confirmation_modal"
                    ) as HTMLDialogElement
                  ).close()
                }
              >
                <a className="btn" href="/wengwonghumresume.pdf" download>
                  Download
                </a>
              </button>
            }
          />
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
