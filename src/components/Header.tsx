import { NavLink } from 'react-router'
import styles from './header.module.css'

function Header() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/colors">
        Colors
      </NavLink>
      <NavLink to="/create">
        Create
      </NavLink>
    </nav>
  )
}

export default Header