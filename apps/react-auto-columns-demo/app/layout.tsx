import "./globals.css";

export const metadata = {
  title: "React Auto Columns Demo",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
