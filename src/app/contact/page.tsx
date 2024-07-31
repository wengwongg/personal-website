import MainTextWrapper from "../../../components/MainTextWrapper";
import Underline from "../../../components/Underline";
import UnderlinedLink from "../../../components/UnderlinedLink";

export default function Contact() {
  return (
    <main>
      <MainTextWrapper>
        <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary-light">
          Want to contact me?
        </h2>
        <p>
          Find me on my LinkedIn or shoot me an email at{" "}
          <Underline>hmw.geo@gmail.com</Underline>! 📧
        </p>
        <p>
          I'm always checking my emails, but if you still can't get a hold of
          me, look me up on Instagram:{" "}
          <UnderlinedLink
            href="https://www.instagram.com/george_huum/"
            highlight={true}
            newTab={true}
          >
            @george_huum
          </UnderlinedLink>
          .
        </p>
      </MainTextWrapper>
    </main>
  );
}
