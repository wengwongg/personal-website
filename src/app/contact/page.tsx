import MainTextWrapper from "../../../components/MainTextWrapper";
import Underline from "../../../components/Underline";

export default function Contact() {
  return (
    <main>
      <MainTextWrapper>
        <h2 className="text-2xl font-semibold mb-6">Want to contact me?</h2>
        <p>
          You can reach me at <Underline>hmw.geo@gmail.com</Underline>.
        </p>
        <p>
          I am also active on my Instagram! Look me up:{" "}
          <Underline>@george_huum</Underline>.
        </p>
      </MainTextWrapper>
    </main>
  );
}
