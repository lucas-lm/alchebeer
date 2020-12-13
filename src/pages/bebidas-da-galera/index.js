import Head from 'next/head'
import styles from '../../styles/Recipes.module.css'
import RecipeCard from '../../components/RecipeCard'
import { api } from '../../utils'

export const getServerSideProps = async () => {
  const { data } = await api.get('/drinks')

  return {
    props: {
      data
    }
  }
}

const getImage = ings => {
  const sum = ings.reduce((curr, prev) => curr + prev)
  const n = sum % 4 + 1
  return `/assets/drink${n}.png`
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

      <h2>Bebidas da Galera</h2>
      <div className={styles.recipes}>
        {data.map(recipe => <RecipeCard 
          key={recipe.name}
          title={recipe.name}
          description={recipe.description}
          image={getImage(recipe.ingredients)}
          creator={recipe.creator}
        />)}
      </div>
    </div>
  )
}
