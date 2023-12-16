import { Inter } from "next/font/google";
import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Make CV",
  description:
    "Quick and easy CV builder CVmaker allows you to create a professional CV for any job that you apply for. ➜ Check how easy it is to write a perfect CV!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
