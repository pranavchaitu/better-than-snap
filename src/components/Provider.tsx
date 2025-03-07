"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"

export default function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>
    <SessionProvider>
        <div className="w-full flex justify-center">
            <div className="border border-white max-w-4xl m-2 lg:m-0 lg:mt-2 m">
                {children}
            </div>
        </div>
    </SessionProvider>
  </NextThemesProvider>
}
