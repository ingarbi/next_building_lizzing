import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lizzing Buildings | Найди свой вариант",
  description: "Подходящий вариант",
  keywords: "lizzing, buildings, nextjs, next, js, js, nextjs, next, js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
