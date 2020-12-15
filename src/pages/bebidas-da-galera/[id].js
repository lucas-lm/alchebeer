import Head from 'next/head'
import styles from '../../styles/Recipe.module.css'
import Title from '../../components/Title'
import Divider from '../../components/Divider'
import FakeComments from '../../components/FakeComments'
import { api } from '../../utils'

export const getServerSideProps = async ({ params }) => {
  const { data } = await api.get(`/drinks/${params.id}`)
  console.log(data)
  return {
    props: {
      data
    }
  }
}

export default function Recipe({ data }) {
  const { ingredients, name, description, creator, instructions } = data
  return (
    <div className={styles.root}>
      <Head>
        <title>Alchebeer | {name} por {creator}</title>
        <meta 
          name="description" 
          content={`Veja a receita de ${creator}: ${name}`}
        />
      </Head>
      <section>
        <Title variant='h2' style={{marginBottom: 0}}>{name}</Title>
        <small style={{display: 'block'}}>Criado por {creator}</small>
        {description && <p>{description}</p>}
        <img src='/assets/generic.jpg' className={styles['drink-picture']} />
        <Title variant='h4' size='small'>Ingredientes</Title>
        <ul style={{listStyle: 'none'}}>
          {ingredients.map(i => <li key={i.name}>{i.name}</li>)}
        </ul>
        <Title variant='h4' size='small'>Modo de preparo</Title>
        <p>
          {instructions || 'Não tem segredo, é só misturar tudo em uma coqueteleira e tá feito!'}
        </p>
      </section>
      <Divider />
      <FakeComments />
    </div>
  )
}
