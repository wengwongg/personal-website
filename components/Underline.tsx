export default function Underline({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline underline decoration-zinc-400 underline-offset-[5px]">
      {children}
    </span>
  );
}
