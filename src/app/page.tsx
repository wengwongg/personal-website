import Body from "../../components/Content";
import Sidebar from "../../components/Sidebar";

export default function Home() {
  return (
    <main>
      <p>
        Hey! My name is{" "}
        <span className="rakkas text-primary text-xl">George</span> (legally
        Weng Wong) Hum, and I'm a third-year Computer Science student at the
        University of Sheffield. 👨‍💻
      </p>
      <br />
      <p>
        I enjoy getting my head stuck in code, and love to design and build
        things from scratch. I hope to one day build and run my own SaaS
        company, but I am first looking to finish my degree, create more
        projects and rack up experience in the industry.
      </p>
      <br />
      <p>
        When I'm not at the computer, I enjoy me-time lifting in the gym and I
        also dabble in a little bit of Brazilian Jiu-Jitsu!
      </p>
    </main>
  );
}
