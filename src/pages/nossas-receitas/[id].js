import Head from 'next/head'
import styles from '../../styles/Recipe.module.css'
import Title from '../../components/Title'
import { api } from '../../utils'

export const getServerSideProps = async ({ params }) => {
  const { data } = await api.get(`/drinks/house/${params.id}`)
  return {
    props: {
      data
    }
  }
}

export default function Recipe({ data }) {
  const { ingredients, name, image, description, instructions='' } = data
  return (
    <div className={styles.root}>
      <Head>
        <title>Alchebeer | {name}</title>
        <meta 
          name="description" 
          content={`Veja a receita ${name} no alchebeer`}
        />
      </Head>
      <section className={styles.recipe}>
        <div>
          <Title variant='h2' style={{marginBottom: 0}}>{name}</Title>
          {description && <p>{description}</p>}
          <img src={image} className={styles['drink-picture']}/>
          <Title variant='h4' size='small'>Ingredientes</Title>
          <ul style={{listStyle: 'none'}}>
            {ingredients.map(i => <li key={i.name}>{i.name}</li>)}
          </ul>
          <Title variant='h4' size='small'>Modo de preparo</Title>
          <p>
            {instructions || 'Não tem segredo, é só misturar tudo em uma coqueteleira e tá feito!'}
          </p>
        </div>
      </section>
    </div>
  )
}
