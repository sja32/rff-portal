import "./globals.css";

export const metadata = {
  title: "RequestFlowForge",
  description: "Secure. Approve. Deploy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}