import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import TopBar from "@/components/TopBar";
import { SessionProvider } from "next-auth/react"
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets : ["latin",'latin-ext','vietnamese']
})

export const metadata: Metadata = {
  title: "Snapweb",
  description: "Your own gallery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolageGrotesque.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <MaxWidthWrapper>
              <TopBar />
              {children}
            </MaxWidthWrapper>
          </SessionProvider> 
        </ThemeProvider>
      </body>
    </html>
  );
}
