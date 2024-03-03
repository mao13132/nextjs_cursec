import { AppProps } from "next/app";
import Head from "next/head";
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div>
            <Head>
                <title>
                    Гланый тайтл
                </title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&display=swap" rel="stylesheet" />

            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;