interface Props {
  children: React.ReactNode;
}
export default function Semibold({ children }: Props) {
  return <span className="font-semibold">{children}</span>;
}
