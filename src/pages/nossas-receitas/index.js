import Head from 'next/head'
import styles from '../../styles/OurRecipes.module.css'
import Title from '../../components/Title'
import RecipeCard from '../../components/RecipeCard'
import { api } from '../../utils'

export const getServerSideProps = async () => {
  const { data } = await api.get('/drinks/house')
  return {
    props: {
      data
    }
  }
}

export default function OurRecipes({ data }) {
  return (
    <div className={styles.root}>
      <Head>
        <title>Alchebeer | Nossas Receitas</title>
        <meta 
          name="description" 
          content="Receitas de bebidas aprovadas por nós"
        />
      </Head>

      <Title variant='h1'>
        Nossas Receitas
      </Title>
      <p>Se liga só nessas receitas que a nossa equipe preparou pra galera 🍻🍸🥂🍹</p>
      <div className={styles.recipes}>
        {data.map(recipe => <RecipeCard 
          key={recipe.name}
          title={recipe.name}
          description={recipe.description}
          image={recipe.image}
          link={`/nossas-receitas/${recipe.id}`}
        />)}
      </div>
    </div>
  )
}
