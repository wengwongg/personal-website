interface Props {
  children: React.ReactNode;
}
export default function Heading({ children }: Props) {
  return <h2 className="text-black font-bold text-lg mb-2">{children}</h2>;
}
