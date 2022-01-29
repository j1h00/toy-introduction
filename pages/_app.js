import Head from "next/head";
import cn from "classnames";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>jihoo</title>
      </Head>
      <Component {...pageProps} />
      <footer className={cn(styles.footer)}>
        <a
          href="https://github.com/j1h00/portfolio"
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
