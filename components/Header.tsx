import Nav from "./Nav";
import Portrait from "./Portrait";

export default function Header() {
  return (
    <div className="md:sticky md:top-14 inline-block md:self-start flex md:flex-col gap-10 md:gap-0 justify-between md:justify-start">
      <div className="flex flex-col justify-center">
        <Portrait src="/portrait.png" alt="George Hum" />
        <h1 className="text-center text-2xl text-primary font-black text-primary z-10 mb-3 inline-block rakkas -rotate-2 dark:text-primary-dark">
          George H.
        </h1>
      </div>
      <Nav />
    </div>
  );
}
