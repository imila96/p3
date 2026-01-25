import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Online Storefronts - Index 101",
  description: "With flexible options for how you build and the highest-converting checkout, Index 101 stores sell more products, lower your costs, and save you time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className="overscroll-y-none">
        <main role="main" id="main" tabIndex={-1} className="focus-visible:outline-none">
          {children}
        </main>
      </body>
    </html>
  );
}
