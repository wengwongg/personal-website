import UnderlinedLink from "../../components/UnderlinedLink";

export default function NotFound() {
  return (
    <main>
      <h2 className="rakkas text-primary text-2xl dark:text-primary-light">
        404 SUM TING WENG WONG!
      </h2>
      <p>
        Go back to <UnderlinedLink href="/">home</UnderlinedLink>.
      </p>
    </main>
  );
}
