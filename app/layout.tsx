import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-felipe-sigma-jade.vercel.app"),
  title: "Felipe Defendi | Desenvolvedor Full-Stack",
  description:
    "Portfólio de Felipe Defendi — Desenvolvedor Full-Stack e Engenheiro de Software especializado em bancos de dados e sistemas corporativos.",
  keywords: [
    "Felipe Defendi",
    "Desenvolvedor Full-Stack",
    "Full-Stack Developer",
    "Engenheiro de Software",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Felipe Defendi" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Felipe Defendi | Desenvolvedor Full-Stack",
    description:
      "Portfólio de Felipe Defendi — Desenvolvedor Full-Stack e Engenheiro de Software.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Defendi | Desenvolvedor Full-Stack",
    description:
      "Portfólio de Felipe Defendi — Desenvolvedor Full-Stack e Engenheiro de Software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          <main id="top" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
