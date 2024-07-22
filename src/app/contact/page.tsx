import MainTextWrapper from "../../../components/MainTextWrapper";
import Underline from "../../../components/Underline";

export default function Contact() {
  return (
    <main>
      <MainTextWrapper>
        <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary-light">
          Want to contact me?
        </h2>
        <p>
          You can reach me at my email <Underline>hmw.geo@gmail.com</Underline>.
        </p>
      </MainTextWrapper>
    </main>
  );
}
