import { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/CreateRecipe.module.css'
import Button from '../../components/Button'
import IngrediendCard from '../../components/IngredientCard'
import { api } from '../../utils'

export const getServerSideProps = async () => {
  const { data } = await api.get('/ingredients')

  return {
    props: {
      data
    }
  }
}

const CreateRecipe = ({ data }) => {
  const { items, categories } = data
  const [ingredients, setIngredients] = useState([])

  const handleSelection = id => {
    setIngredients([...ingredients, id])
  }

  const handleDeselection = id => {
    setIngredients(ingredients.filter(i => i !== id))
  }

  const handleSubmit = () => {
    console.log(ingredients)
  }

  return (
    <div className={styles.root}>
      <Head>
        <title>Alchebeer | Nova Receita</title>
        <meta 
          name="description" 
          content="Crie e compartilhe receitas de drinks com a galera!"
        />
      </Head>
      {categories.map(category => {
        const itemsFromCategory = items.filter(item => item.category === category)
        if (itemsFromCategory.length > 0) {
          return (
            <section key={category}>
              <h2>{category}</h2>
              <div className={styles.ingredients}>
                {itemsFromCategory.map(item => (
                  <IngrediendCard 
                    key={item.id} 
                    id={item.id}
                    name={item.name} 
                    image={item.image} 
                    onSelect={handleSelection}
                    onDeselect={handleDeselection}
                  />
                ))}
              </div>
            </section>
          )
        }
      })}
      <Button variant='action' onClick={handleSubmit} disabled={ingredients.length === 0}>
        Criar
      </Button>
    </div>
  )
}

export default CreateRecipe
