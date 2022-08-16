import '../styles/globals.css';
import { createTheme } from '@mui/material';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import { ScrollToTop } from '../components/scroll';
import '@fontsource/roboto-mono';
import HeaderTwo from '../components/HeaderTwo';
import { AuthContextProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <themeprovider>
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="shortcut icon" href="../favicon.ico" />
          </Head>
          <HeaderTwo />
          <Component {...pageProps} />
          <ScrollToTop />
        </Layout>
      </themeprovider>
    </AuthContextProvider>
  );
}

export default MyApp;
