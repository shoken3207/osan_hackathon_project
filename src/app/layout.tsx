import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import StoreProvider from "@/components/StoreProvider";
import { Toaster } from "@/components/ui/toaster";

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
      <body>
        <StoreProvider>
          <div className="w-full min-h-screen bg-[#f5fbfd] flex flex-col gap-y-8 pb-10">
            <Header />
            {children}
            <Toaster />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
