import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import Button from "../../components/button"
import InputTexto from "../../components/inputTexto"
import Loader from "../../components/loader"
import Title from "../../components/title"
import TopoAdmin from "../../components/topoAdmin"
import { AuthContext } from "../../context"
import { loaderImg } from "../../utils"
import styles from './admin.module.scss'

export default function Login(){
    const { showAlert, fazerLogin, isLogado } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const [formularioLogin, setFormularioLogin ] = useState({
        login: '',
        senha: ''
    }) 

    useEffect(() => {
        if(isLogado) return () => {
            router.push('/admin/imoveis')
        }
        setIsLoading(false)
    },[])

    function mudarFormularioLogin(e){
        setFormularioLogin({...formularioLogin, ...e})
    }

    function handleLogin(){
        fazerLogin().then(() => {
            router.push('/admin/imoveis')
        }) 
    }

    
    return(
        <>
            <Head>
                <title>Entrar - Admin</title>
                <meta name="description" content="Entrar - Admin" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopoAdmin/>
            <div className={`${styles.container} bgAdmin`}>
                <div className={`${styles.containerDentro} containerTelaAdmin`}>
                    {/* <div className={`${styles.titulo}`}>
                        Painel Administrativo
                    </div> */}
                    {
                        isLoading ? 
                        <div className={`${styles.loader}`}>
                            <Loader/>
                        </div>
                        :
                        <div className={`${styles.containerCard}`}>
                            <Image
                                loader={loaderImg}
                                src="/avatar.png"
                                alt="Casa"
                                width={100}
                                height={100}
                                style={{marginBottom: 50}}
                                unoptimized
                            />
                            <InputTexto 
                                titulo={'Login'} 
                                value={formularioLogin.login} 
                                onChange={e => mudarFormularioLogin({login: e})} 
                                className={`${styles.input}`}
                            />
                            <InputTexto 
                                titulo={'Senha'} 
                                value={formularioLogin.senha}
                                type={'password'}
                                onChange={e => mudarFormularioLogin({senha: e})} 
                                className={`${styles.input}`}
                            />
                            <Button color={'#00A3DE'} size={'100%'} style={{marginTop: 20}} onClick={() => handleLogin()} titulo={'Entrar'}/>
                        </div>
                    }

                    <div style={{height: 300}}/>
                </div> 
            </div>
        </> 
    ) 
}