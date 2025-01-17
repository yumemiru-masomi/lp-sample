import type { Metadata } from "next";
import { Inter } from "next/font/google";

import * as styles from "./styles.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.container}>{children}</body>
    </html>
  );
}
