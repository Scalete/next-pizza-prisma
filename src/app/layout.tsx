import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/globals.scss";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <main>{children}</main>
      </body>
    </html>
  );
}
