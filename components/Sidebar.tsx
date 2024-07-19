import Nav from "./Nav";
import Portrait from "./Portrait";

export default function Sidebar() {
  return (
    <div className="p-5">
      <Portrait src="/portrait.png" alt="George Hum" />
      <h1 className="text-2xl text-primary font-semibold text-primary z-10 mb-3 inline-block rakkas -rotate-2">
        George H.
      </h1>
      <Nav />
    </div>
  );
}
