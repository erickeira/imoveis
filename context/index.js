import React,{useState, createContext, useEffect, useRef} from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import styles from './context.module.scss'

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [isLogado, setIsLogado] = useState(false)

    async function fazerLogin (){
        setIsLogado(true)
        return true
    }

    async function deslogar(){
        setIsLogado(false)
        return true
    }

    const [dadosAlert, setDadosAlert] = useState({
        tipo: 'success',
        titulo: '',
        mensagem: ''
    })
    const [alertaVisivel, setAlertaVisivel] = useState(false)
    const showAlert = {
        success : (titulo, mensagem, tempo) => mostrarAlerta('success', titulo, mensagem, tempo),
        error : (titulo, mensagem, tempo) => mostrarAlerta('error', titulo, mensagem, tempo),
        warning : (titulo, mensagem, tempo) => mostrarAlerta('warning', titulo, mensagem, tempo),
        info : (titulo, mensagem, tempo) => mostrarAlerta('info', titulo, mensagem, tempo)
    }

    function mostrarAlerta(tipo, titulo, mensagem, tempo){
        setDadosAlert({ tipo: tipo || 'success', titulo: titulo || '', mensagem: mensagem || ''})
        setAlertaVisivel(true)
        setTimeout(() => {
            setAlertaVisivel(false)
        }, tempo || 3000)
    }

    console.log(isLogado)
    return(
        <AuthContext.Provider 
            value={{ 
                showAlert,
                fazerLogin,
                isLogado,
                deslogar
            }}
        >
            {children}
            {
            alertaVisivel ?
                <div className={styles.containerAlert}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity={dadosAlert.tipo}>
                            <AlertTitle>{dadosAlert.titulo}</AlertTitle>
                            {dadosAlert.mensagem}
                        </Alert>
                    </Stack>
                </div>
                : null
            }
        </AuthContext.Provider>
    )
}