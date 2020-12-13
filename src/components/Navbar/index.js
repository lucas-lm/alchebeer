import styles from './Navbar.module.css'
import Navlink from './Navlink'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <header className={styles.root}>
      <Logo />
      <ul className={styles.menu}>
        <Navlink to='/'>Home</Navlink>
        <Navlink to='/criar-receita'>Criar Receita</Navlink>
        <Navlink to='/receitas-da-galera'>Receitas da Galera</Navlink>
        <Navlink to='/nossas-receitas'>Nossas Receitas</Navlink>
      </ul>
    </header>
  )
}

export default Navbar
