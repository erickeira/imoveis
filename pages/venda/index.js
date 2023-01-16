import Head from "next/head";
import ListImoveis from "../../components/listImoveis";

export default function Venda(){
    return(
        <>
            <Head>
                <title>Imobiliária - Venda</title>
                <meta name="description" content="Imóveis à venda" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <body>
                <ListImoveis titulo={'venda'}/>
            </body>
        </>
    )
}
