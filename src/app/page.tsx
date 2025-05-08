import Body from "../../components/Content";
import MainTextWrapper from "../../components/MainTextWrapper";
import Sidebar from "../../components/Header";

export default function Home() {
  return (
    <main>
      <MainTextWrapper>
        <p>Hey.</p>
        <p>
          I'm a learning 21 year-old trying to find my way through life. This is
          mainly where I blog, which doesn't have a specific niche. I just love
          to write about the things that I've enjoyed, experienced or learnt.
          This can include anything from travel experiences, book reviews,
          mindset, fitness, and any other new things that pop up as I venture
          through life.
        </p>
        <p>
          As for exactly who I am, I don't like to give myself a label as things
          are constantly changing. But... I graduated <i>(soon)</i> in Computer
          Science at The University of Sheffield. I love to stay active - my
          current go-to's are football and working out at the gym. Otherwise,
          I'm young and I love to try new things, so my interests, character and
          even aspirations are constantly evolving.
        </p>
        <p>
          If you're an employer, there is also useful information such as my
          career experiences so far, a downloadable résumé and the mandatory
          GitHub profile.
        </p>
      </MainTextWrapper>
    </main>
  );
}
