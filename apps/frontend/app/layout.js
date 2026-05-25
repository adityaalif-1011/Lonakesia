import { Inter } from "next/font/google";
import "./globals.css";

import { AuthModalProvider } from "@/context/AuthModalContext";
import AuthModal from "@/components/auth/AuthModal";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Lokanesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthModalProvider>
          {children}
          <AuthModal />
        </AuthModalProvider>
      </body>
    </html>
  );
}