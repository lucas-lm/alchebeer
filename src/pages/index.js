import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Alchebeer | Home</title>
        <meta 
          name="description" 
          content="Crie, compartilhe e experimente novas bebidas"
        />
      </Head>
      <Hero />
      <div className={styles.buttons}>
        <Button to='/criar-receita'>Faça sua bebida</Button>
        <Button to='/bebidas-da-galera  '>Bebidas da galera</Button>
        <Button to='/nossas-receitas'>Nossas sugestões</Button>
      </div>

    </div>
  )
}
