import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Faq',
  description: 'Faq section component',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
