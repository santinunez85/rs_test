import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="main__layout">
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
export default MyApp
