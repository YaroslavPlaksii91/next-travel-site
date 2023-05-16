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
        <link rel="icon" href="/public/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
