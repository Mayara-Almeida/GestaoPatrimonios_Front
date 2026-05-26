import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  variable: "--font-padrao",
  subsets: ["latin"],
  weight: ["700"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={mont.variable}>
      <Component {...pageProps} />

    </main>
  )
}