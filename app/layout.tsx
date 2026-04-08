import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { Topbar } from "@/components/topbar";
import { Footer } from "@/components/footer";

const GA_ID = "G-CCH8RW3GEG";

export const metadata: Metadata = {
  metadataBase: new URL("https://realityscientist.com"),
  title: { default: "Reality Scientist , Dr. David Benson", template: "%s · Reality Scientist" },
  description: "Theories of time, identity, memory, and the structure of experience by Dr. David Benson.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <ThemeProvider>
          <Topbar />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
