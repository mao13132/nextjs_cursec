import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div>
            <Head>
                <title>
                    Гланый тайтл                    
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;