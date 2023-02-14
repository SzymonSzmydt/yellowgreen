import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import Header from "./../components/header/header";
import Aside from "../components/dashboard/aside";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <title> Panel administracyjny </title>
        </Head>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <div className={"general"}>
          <Aside />
          <Component {...pageProps} />
        </div>
      </>
    );
  }
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
