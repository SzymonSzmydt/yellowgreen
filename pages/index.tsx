import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Intro from "./../components/body/intro";

export default function Home() {
  return (
    <>
      <Head>
        <title>North Shape</title>
        <meta
          name='description'
          content='Meble od projektantów, nietuzinkowe kształty'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Intro />
    </>
  );
}
