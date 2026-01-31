import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
        <Header />
        <main role="main" id="main" tabIndex={-1} className="focus-visible:outline-none pt-[73px]">
          {children}
        </main>
      </body>
    </html>
  );
}
