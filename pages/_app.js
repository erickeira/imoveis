import Topo from '../components/topo'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Topo/>
      <Component {...pageProps} />
    </>
  )
}
