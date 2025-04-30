import Heading from "../../../components/Heading";
import Semibold from "../../../components/Semibold";

export default function Experience() {
  return (
    <div>
      <Heading>work experiences</Heading>
      <div>
        <div className="font-semibold flex justify-between underline">
          <p>Goodlord</p>
          <p>July - August 2024</p>
        </div>
        <div className="space-y-2">
          <p>
            This was a 2-month internship at a prop-tech firm located in
            Sheffield, UK. I would say this was a core experience where my
            software engineering abilities really took a leap forward. Previous
            to this, I was unable to code anything from scratch or more so did
            not have the confidence to. On top of the technical and industry
            skills, this short but valuable experience reinforced that I could
            deliver real value with my programming skills, and the power in
            jumping into an unfamiliar task and learning quickly and on the go.
          </p>
          <p>
            <Semibold>Technologies used:</Semibold> Symfony, React
          </p>
          <p>
            <Semibold>Main project:</Semibold> collaboration with another intern
            to improve data collection system for new agency signups.
          </p>
          <p>
            <Semibold>Key outcomes: </Semibold> applied Agile practices (e.g.
            group stand-ups, sizing sessions), reduced support tickets, created
            first company A/B test, learned robust testing principles.
          </p>
        </div>
      </div>
    </div>
  );
}
