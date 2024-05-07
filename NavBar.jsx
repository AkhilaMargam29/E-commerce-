import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from"./project.module.css"

const NavBar = () => {
  return (
    <div className={styles.nav}>
        <article className={styles.left}>logo</article>
        <article className={styles.right}>
           <NavLink to="/">product</NavLink>
           <NavLink to="/cart">cart</NavLink>
           <NavLink to="/order">order</NavLink>
           <NavLink to="/checkout">Checkout</NavLink>
        </article>
    </div>
  )
}
export default NavBar