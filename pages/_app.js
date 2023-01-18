import Topo from '../components/topo'
import Rodape from '../components/rodape'
import '../styles/globals.scss'
import "react-image-gallery/styles/scss/image-gallery.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Topo/>
      <Component {...pageProps} />
      <Rodape/>
    </>
  )
}
