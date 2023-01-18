import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import SliderFilter from '../components/sliderFilter'
import ListImoveis from '../components/listImoveis'
import ListCorretores from '../components/listCorretores'

export default function Home() {
  return (
    <>
      <Head>
        <title>Imobiliária</title>
        <meta name="description" content="Imobiliária em construção" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <SliderFilter/>
        <ListImoveis titulo={'destaque'}/>
        {/* <ListCorretores/> */}
        
      </main>
    </>
  )
}
