import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/CreateRecipe.module.css'
import Title from '../../components/Title'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Backdrop from '../../components/Backdrop'
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
  const [drinkName, setDrinkName] = useState('')
  const [username, setUsername] = useState('')
  const [instructions, setInstructions] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const modal = `${styles.modal} ${isModalOpen ? '' : styles.closed }`

  const handleSelection = id => {
    setIngredients([...ingredients, id])
  }

  const handleDeselection = id => {
    setIngredients(ingredients.filter(i => i !== id))
  }

  const openModal = () => {
   setIsModalOpen(true)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const { data } = await api.post('/drinks', {name: drinkName, creator: username, ingredients, instructions})
    if (data._id) {
      router.push(`/bebidas-da-galera/${data._id}`)
    }
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
      <Title variant='h1'>Monte seu drink</Title>
      <p>Escolha os ingredientes para montar seu drink na lista a seguir. Sua receita vai ficar disponível pra todo mundo depois!</p>
      {categories.map(category => {
        const itemsFromCategory = items.filter(item => item.category === category)
        if (itemsFromCategory.length > 0) {
          return (
            <section key={category}>
              <Title variant='h2' size='small'>{category}</Title>
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
      <Button variant='action' onClick={openModal} disabled={ingredients.length < 2}>
        Criar
      </Button>
      <div className={modal}>
        <h2>Quase lá!</h2>
        <p>Só precisamos de mais algumas informações antes de registrar sua receita</p>
        <form onSubmit={handleSubmit} className={styles['drink-form']}>
          <Input value={username} onChange={e => setUsername(e.target.value)} placeholder='Seu nome' required />
          <Input value={drinkName} onChange={e => setDrinkName(e.target.value)} placeholder='Nome do drink' required />
          <Input value={instructions} onChange={e => setInstructions(e.target.value)} placeholder='Modo de preparo (opcional caso seja só misturar...)' />
          <Button variant='action' type='submit'>
            Enviar
          </Button>
        </form>
      </div>
      <Backdrop open={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </div>
  )
}

export default CreateRecipe
