

import type { Metadata, Viewport } from "next";
import "./globals.css";
import AOSWrapper from '@/components/AOSWrapper';

// ✅ Viewport settings (important for mobile scaling)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: true,
};


// ✅ Page metadata
export const metadata: Metadata = {
  title: "Azkiya Rifa Khan-Portfolio",
  description: "Portfolio of Azkiya Rifa Khan, Full Stack Developer. Explore projects, skills, and ways to connect for collaboration or hiring.",
};

// ✅ Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className="antialiased">
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}


