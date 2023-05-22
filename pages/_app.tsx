import { AppProps } from 'next/app';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import 'tailwindcss/tailwind.css';
import Layout from '@/components/Layout';

const montserrat = Montserrat({ subsets: ['cyrillic'] });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={montserrat.className}>
      <Head>
        <title>NextTravel Company - Experience World Adventures with Us</title>
        <meta
          name="description"
          content="NextTravel Company offers unforgettable journeys to the best tourist destinations. Join us to experience world adventures!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
