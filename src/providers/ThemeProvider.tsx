import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

// Wrapper component for next-themes
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
    </NextThemeProvider>
  );
}

// Export useTheme hook from next-themes
export { useTheme } from "next-themes";