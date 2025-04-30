import Body from "../../components/Content";
import MainTextWrapper from "../../components/MainTextWrapper";
import Sidebar from "../../components/Header";

export default function Home() {
  return (
    <main>
      <MainTextWrapper>
        <p>
          Hey, my name is{" "}
          <span className="font-bold text-slate-600 text-lg">George</span>.
        </p>
        <p>
          I'm a learning 21 year-old trying to find my way through life. This is
          mainly where I put my blog posts, which can contain anything from book
          reviews to life reflections. If you're an employer, there is also
          useful information such as my career experiences so far, a
          downloadable résumé and the mandatory GitHub profile.
        </p>
        <p>
          I don't like to give myself a label as things are constantly changing
          in my life. Anyhow, I graduated <i>(soon)</i> in Computer Science at
          The University of Sheffield. I love to stay active - my current go-to
          activities are football and just working out at the gym. I'd say that
          these are the two things that are at the core of my being. Otherwise,
          I'm young and I love to try new things, so my interests, character and
          even aspirations are constantly evolving.
        </p>
        <p></p>
      </MainTextWrapper>
    </main>
  );
}
