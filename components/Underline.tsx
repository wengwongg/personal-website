export default function Underline({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline underline decoration-zinc-300 underline-offset-[5px]">
      {children}
    </span>
  );
}
