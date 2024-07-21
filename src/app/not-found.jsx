import UnderlinedLink from "../../components/UnderlinedLink";

export default function NotFound() {
  return (
    <main>
      <h2 className="rakkas text-primary text-2xl">404 SUM TING WENG WONG!</h2>
      <p>
        Go back to <UnderlinedLink href="/">home</UnderlinedLink>.
      </p>
    </main>
  );
}
