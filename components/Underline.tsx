export default function Underline({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline underline decoration-slate-900 underline-offset-[5px]">
      {children}
    </span>
  );
}
