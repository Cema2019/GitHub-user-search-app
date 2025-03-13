import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github user search",
  description: "Github user finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={robotoMono.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="p-x-4 grid place-content-center min-h-screen bg-page">
          <div className="sm:w-[500px] md:w-[600px] lg:w-[700px]">
            <Navbar />
            {children}
          </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
