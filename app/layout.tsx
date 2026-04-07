import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Topbar } from "@/components/topbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://realityscientist.com"),
  title: { default: "Reality Scientist , Dr. David Benson", template: "%s · Reality Scientist" },
  description: "Theories of time, identity, memory, and the structure of experience by Dr. David Benson.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Topbar />
          <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
