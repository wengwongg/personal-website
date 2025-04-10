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
          to solve problems is my jam. Although I currently do not have many
          Leetcode problems solved, this is something I'm working on. I actually
          do enjoy the thrill of diving into unfamiliar concepts and banging my
          head in for hours to finally arrive at the satisfaction of a solution.
          🤪
        </p>
        <p>
          When I'm not staring at the computer, I enjoy being active, connecting
          with my friends, and playing football ⚽. I also had a phase of
          Brazilian Jiu-jitsu which I would like to get back into in the near
          future. I don't like the notion of staying still. I'm always busy
          doing something, looking for the next challenge to have fun in. 😎
        </p>
        <p>
          Welcome to my very own website! 👋 This is a space for me to share my
          work, experiences and thoughts with the world. I've experienced a lot,
          learned a lot and felt many different ways about different things. I'm
          also often the person people come to for advice so I'm very wise 🧙.
          This is also for you, mum - now you have a dedicated place to remind
          yourself of the things that I tell you!
        </p>
      </MainTextWrapper>
    </main>
  );
}
