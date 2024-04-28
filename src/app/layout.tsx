import type { Metadata } from "next";
import "../app/globals.scss";
import { SplashScreen } from "../app/components/SplashScreen/SplashScreen/SplashScreen";
import localFont from "next/font/local";
import { NavBar } from "./components/NavBar/NavBar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "The INFIN",
  description: "To know your true value,  Help others understand theirs.",
};

const neueFont = localFont({
  src: [
    {
      path: "../app/fonts/NeueHaasDisplay-Light.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../app/fonts/NeueHaasDisplay-Mediu.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/NeueHaasDisplay-Roman.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neueFont",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/favicon.svg" sizes="any" />
      </head>
      <body className={neueFont.className}>
        <Providers>
          <SplashScreen>
            <NavBar />
            {children}
            <footer style={{ height: "7777px", background: "white" }}></footer>
          </SplashScreen>
        </Providers>
      </body>
    </html>
  );
}
