import Head from "next/head";
import HorizontalFilter from "../../components/horizontalFilter";
import ListImoveis from "../../components/listImoveis";
import Rodape from "../../components/rodape";
import Topo from "../../components/topo";


export default function Venda(){
    return(
        <>
            <Head>
                <title>Venda - Imobiliária</title>
                <meta name="description" content="Imóveis à venda" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <body>
                <Topo/>
                <HorizontalFilter/>
                <ListImoveis titulo={'venda'}/>
                <Rodape/>
            </body>
        </>
    )
}
