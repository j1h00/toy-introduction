import Head from "next/head";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>jihoo</title>
      </Head>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Written by jihoo
        </a>
      </footer>
    </>
  );
}

export default MyApp;
