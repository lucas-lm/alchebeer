import { useState } from 'react'
import styles from './Navbar.module.css'
import Navlink from './Navlink'
import Logo from '../Logo'
import Backdrop from '../Backdrop'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuOpen = () => {
    setIsOpen(true)
  }

  const handleMenuClose = () => {
    setIsOpen(false)
  }

  const menuStyle = `${styles.menu} ${styles[isOpen ? 'menu-open' : 'menu-closed']}`

  return (
    <header className={styles.root}>
      <div className={styles.filler}/>
      <Logo />
      <ul className={menuStyle}>
        <Navlink to='/' onClick={handleMenuClose}>Home</Navlink>
        <Navlink to='/criar-receita' onClick={handleMenuClose}>Criar Receita</Navlink>
        <Navlink to='/bebidas-da-galera' onClick={handleMenuClose}>Bebidas da Galera</Navlink>
        <Navlink to='/nossas-receitas' onClick={handleMenuClose}>Nossas Receitas</Navlink>
      </ul>
      <button className={styles.hamburger} onClick={handleMenuOpen}>
        <FaBars />
      </button>
      <Backdrop open={isOpen} onClose={handleMenuClose}/>
    </header>
  )
}

export default Navbar
