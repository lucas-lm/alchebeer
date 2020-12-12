import styles from './Navbar.module.css'
import Navlink from './Navlink'

const Navbar = () => {
  return (
    <header className={styles.root}>
      <p>LOGO</p>
      <ul className={styles.menu}>
        <Navlink to='/'>Home</Navlink>
        <Navlink to='/criar-receita'>Criar Receita</Navlink>
        <Navlink to='/receitas-da-galera'>Receitas da Galera</Navlink>
        <Navlink to='/nossas-receitas'>Nossas Receitas</Navlink>
        <Navlink to='/bebidas'>Bebidas</Navlink>
      </ul>
    </header>
  )
}

export default Navbar
