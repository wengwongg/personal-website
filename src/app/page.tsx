import Body from "../../components/Content";
import MainTextWrapper from "../../components/MainTextWrapper";
import Sidebar from "../../components/Header";

export default function Home() {
  return (
    <main>
      <MainTextWrapper>
        <p>
          Hey! My name is{" "}
          <span className="rakkas text-primary text-xl">George</span> (legally
          Weng Wong) Hum, and I'm a third-year Computer Science student at the
          University of Sheffield. 👨‍💻
        </p>
        <p>
          I enjoy getting my head stuck in code, and love to design and build
          things from scratch. I hope to one day build and run my own SaaS, but
          I am first looking to finish my degree, create more projects and rack
          up experience in the industry.
        </p>
        <p>
          When I'm not at the computer, I enjoy me-time lifting in the gym and I
          also dabble in a little bit of Brazilian Jiu-Jitsu!
        </p>
      </MainTextWrapper>
    </main>
  );
}
