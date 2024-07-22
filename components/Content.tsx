interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <div className="text-black dark:text-white body w-full md:w-[30rem] font-light leading-relaxed text-sm">
      {children}
    </div>
  );
}
