import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import TopBar from "@/components/top-bar";
import { SessionProvider } from "next-auth/react"
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Toaster } from "@/components/ui/sonner"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets : ["latin",'latin-ext','vietnamese']
})

export const metadata: Metadata = {
  title: "Snapweb",
  description: "Your own gallery.",
  icons : ["https://www.svgrepo.com/show/506220/image-1.svg"]
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
            <Toaster />
            <MaxWidthWrapper>
              <TopBar />
              <NextSSRPlugin
                routerConfig={extractRouterConfig(ourFileRouter)}
              />
              {children}
            </MaxWidthWrapper>
          </SessionProvider> 
        </ThemeProvider>
      </body>
    </html>
  );
}
