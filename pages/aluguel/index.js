import Head from "next/head";
import HorizontalFilter from "../../components/horizontalFilter";
import ListImoveis from "../../components/listImoveis";
import Rodape from "../../components/rodape";
import Topo from "../../components/topo";

export default function Aluguel(){
    return(
        <>
            <Head>
                <title>Aluguel - Imobiliária</title>
                <meta name="description" content="Imoveis para aluguel" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <body>
                <Topo/>
                <ListImoveis titulo={'aluguel'}/>
                <Rodape/>
            </body>
        </>
    )
}
