import { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NextTravel Company - Experience World Adventures with Us</title>
        <meta
          name="description"
          content="NextTravel Company offers unforgettable journeys to the best tourist destinations. Join us to experience world adventures!"
        />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
