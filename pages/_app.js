import Topo from '../components/topo'
import Rodape from '../components/rodape'
import '../styles/globals.scss'
import "react-image-gallery/styles/scss/image-gallery.scss";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </>
  )
}
