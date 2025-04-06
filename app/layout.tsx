import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "IndexNavigator - Smart Trading for DAX and NASDAQ",
  description: "Navigate the Markets with Precision - Advanced algorithmic trading platform for DAX and NASDAQ markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
