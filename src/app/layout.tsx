import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../../providers/ReactQueryProvider";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata: Metadata = {
  title: `Air's Gallery Challenge`,
};

export default function RootLayout( {
  children,
}: {
  children: React.ReactNode;
} ) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
