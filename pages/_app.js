import Topo from '../components/topo'
import Rodape from '../components/rodape'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Topo/>
      <Component {...pageProps} />
      <Rodape/>
    </>
  )
}
