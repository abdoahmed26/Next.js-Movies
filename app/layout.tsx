import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Providers/theme-provider";
import StoreProvider from "@/Providers/StoreProvider";
import SessionProvid from "@/Providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streamtub",
  description: "I make this website for movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SessionProvid>
              <StoreProvider>
                {children}
              </StoreProvider>
            </SessionProvid>
        </ThemeProvider>
      </body>
    </html>
  );
}
