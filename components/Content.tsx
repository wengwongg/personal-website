interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <div className="body w-[30rem] font-light leading-relaxed text-sm">
      {children}
    </div>
  );
}
