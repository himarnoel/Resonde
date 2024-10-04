import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sofiaPro = localFont({
  src: "./fonts/Sofia Pro.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Optional second font
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Virtual Garden",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sofiaPro.variable} antialiased`}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
