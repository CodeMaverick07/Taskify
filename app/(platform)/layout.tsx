import { ClerkProvider } from "@clerk/nextjs";

export default function PlatfromLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
