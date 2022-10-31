import styles from '../styles/globals.css'
import Header from "../components/header/Header"

/**
 * This function is added to each NextJS route, which can be great for general layouts
 */
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
