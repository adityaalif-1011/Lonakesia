import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Lokanesia - Belajar Bahasa Daerah Indonesia",
  description: "Platform interaktif untuk belajar bahasa daerah Indonesia dengan cara yang menyenangkan dan efektif.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}



