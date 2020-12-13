import Head from 'next/head'
import styles from '../../styles/OurRecipes.module.css'
import Title from '../../components/Title'
import RecipeCard from '../../components/RecipeCard'

const data = Array(3).fill({
  name: 'Bebida',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
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

      <Title variant='h2'>
        Lista de Receitas
      </Title>
      <div className={styles.recipes}>
        {data.map(recipe => <RecipeCard 
          key={recipe.name}
          title={recipe.name}
          description={recipe.description}
          image={recipe.image} 
        />)}
      </div>
    </div>
  )
}
