// import { Geist, Geist_Mono } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Inklune",
  description: "A Platform for Inclusive Storytelling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={`${manrope.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
