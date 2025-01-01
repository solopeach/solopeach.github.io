import '../styles/global.css';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import localFont from 'next/font/local'
import Head from 'next/head'

export const metadata = {
    title: "My Awesome App",
    description: "Nice Description"
}


export const regular = localFont({
    src: '../public/fonts/Satoshi-Regular.otf',
    weight: 'normal',
    style: 'normal',
    variable: '--regular'
})

export const medium = localFont({
    src: '../public/fonts/Satoshi-Medium.otf',
    weight: 'bold',
    style: 'normal',
    variable: '--medium'
});
export const bold = localFont({
    src: '../public/fonts/Satoshi-Bold.otf',
    weight: 'normal',
    style: 'normal',
    variable: '--bold'
});

function MyApp({ Component, pageProps, router }) {
    const isHome = router.pathname === '/';

    return <>
        <Head>
            <title>Roni Wu</title>
            <meta name="description" content="Roni Wu's dev portfolio" />
        </Head>
        <Layout isHome={isHome}>
            <Component {...pageProps} />
        </Layout>
    </>;
}

export default MyApp;
