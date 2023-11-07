import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});
const iranSans = localFont({
  src: [
    {
      path: "../../public/fonts/iransans/IRAN Sans Regular (mmrostami.blog.ir).ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRAN Sans Bold (mmrostami.blog.ir).ttf",
      weight: "200",
      style: "bold",
    },
  ],
  variable: "--font-iranSans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="rtl" className={`dark ${figtree.variable} ${iranSans.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
