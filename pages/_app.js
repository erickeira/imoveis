import Topo from '../components/topo'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Topo/>
      <Component {...pageProps} />
    </>
  )
}
