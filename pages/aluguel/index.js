import Head from "next/head";
import HorizontalFilter from "../../components/horizontalFilter";
import ListImoveis from "../../components/listImoveis";

export default function Aluguel(){
    return(
        <>
            <Head>
                <title>Imobiliária - Aluguel</title>
                <meta name="description" content="Imoveis para aluguel" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <body>
                <HorizontalFilter/>
                <ListImoveis titulo={'aluguel'}/>
            </body>
        </>
    )
}
