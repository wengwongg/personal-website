export default function MainTextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="space-y-7">{children}</div>;
}
