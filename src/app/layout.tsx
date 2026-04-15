import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'مطاعم المحمدي العامرات | أفضل مطاعم مسقط',
  description: 'اكتشف مطاعم المحمدي العامرات في مسقط، حيث نقدم أفضل الأطباق التقليدية بتجربة فريدة. مطعمنا هو خيارك الأفضل للعائلات والأفراد في مسقط.',
  openGraph: {
    "title": "مطاعم المحمدي العامرات - وجهة الطعام المفضلة",
    "description": "تجربة طعام أصيلة في قلب العامرات.",
    "siteName": "مطاعم المحمدي"
  },
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
