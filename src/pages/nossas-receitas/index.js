import Head from 'next/head'
import styles from '../../styles/OurRecipes.module.css'
import RecipeCard from '../../components/RecipeCard'

const data = Array(3).fill({
  title: 'Bebida',
  description: 'Muito boa',
  image: 'https://www.bebidasfamosas.com.br/blog/wp-content/uploads/2018/12/drinks-faceis-batida-de-frutas.jpg'
})

export default function OurRecipes() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Alchebeer | Nossas Receitas</title>
        <meta 
          name="description" 
          content="Receitas de bebidas aprovadas por nós"
        />
      </Head>

      <h2>Lista de Receitas</h2>
      <div className={styles.recipes}>
        {data.map(recipe => <RecipeCard 
          title={recipe.title}
          description={recipe.description}
          image={recipe.image} 
        />)}
      </div>
    </div>
  )
}
