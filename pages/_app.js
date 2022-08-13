import '../styles/globals.css';
import { createTheme } from '@mui/material';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import { ScrollToTop } from '../components/scroll';
import '@fontsource/roboto-mono';


function MyApp({ Component, pageProps }) {
  return (
    <themeprovider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <link rel="shortcut icon" href="../favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <ScrollToTop />
      </Layout>
    </themeprovider>
  );
}

export default MyApp;
