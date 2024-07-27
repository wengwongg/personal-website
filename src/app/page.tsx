import Body from "../../components/Content";
import MainTextWrapper from "../../components/MainTextWrapper";
import Sidebar from "../../components/Header";

export default function Home() {
  return (
    <main>
      <MainTextWrapper>
        <p>
          Hey! 👋 My name is{" "}
          <span className="rakkas text-primary text-xl dark:text-primary-light">
            George
          </span>{" "}
          (legally Weng Wong) Hum, and I'm a final-year Computer Science student
          at the University of Sheffield. 👨‍💻
        </p>
        <p>
          I enjoy getting my head stuck in code. Designing and building software
          to solve problems is my jam. Got a problem? Let me know and I'll see
          if I can build something for you!
        </p>
        <p>
          When I'm not staring at the computer, I enjoy watching anime, playing
          video games, lifting weights and I also dabble in a little bit of
          Brazilian Jiu-Jitsu! 😎
        </p>
        <p>
          Welcome to my very own website! This is a space for me to share my
          work and thoughts with the world. Programming tips, personal
          experiences, life advice. You'll find it all here.
        </p>
      </MainTextWrapper>
    </main>
  );
}
