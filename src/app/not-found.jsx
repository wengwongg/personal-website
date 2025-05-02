import UnderlinedLink from "../../components/UnderlinedLink";
import Heading from "../../components/Heading";

export default function NotFound() {
  return (
    <main>
      <Heading>Couldn't find the page you're looking for.</Heading>
      <p>
        Go back to <UnderlinedLink href="/">home</UnderlinedLink>.
      </p>
    </main>
  );
}
