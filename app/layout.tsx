import type { Metadata } from "next";
import { Geist_Mono, Poppins, Abril_Fatface } from "next/font/google";
import "./globals.css";

// import { SEO_CONFIG } from "@/lib/seo";

const fontSerif = Abril_Fatface({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const fontSans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lightfolios",
  description: "lightweight portfolio templates with Next.js and motion div",
};

// SEO for you.

// export const metadata = {
//   title: SEO_CONFIG.title,
//   description: SEO_CONFIG.description,
//   openGraph: {
//     title: SEO_CONFIG.title,
//     description: SEO_CONFIG.description,
//     url: SEO_CONFIG.url,
//     images: [{ url: SEO_CONFIG.ogImage }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: SEO_CONFIG.twitterHandle,
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body
        className={`${fontSerif.variable} ${fontSans.variable} ${geistMono.variable} cream antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
