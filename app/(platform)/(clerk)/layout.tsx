export default function PlatfromLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex justify-center items-center">{children}</div>
  );
}
