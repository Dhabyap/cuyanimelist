import Navbar from "./components/Navbar";
import "@/app/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight :['600'] });

export const metadata = {
  title: "CuyAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-color-dark `}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
