import type { FC } from 'react'
import { Facebook, Instagram, Linkedin } from 'react-feather'

import styles from './Footer.module.sass'

const Footer: FC = () => {
  return (
    <footer className={styles.appFooter}>
      <h2>
        Vivation
        <br />
        Skandinavien
      </h2>

      <ul>
        <li>info@vivation.se</li>

        <li>+4676-626 50 50</li>

        <li>Göteborg, Sverige</li>
      </ul>

      <ul>
        <li>
          <Facebook />
        </li>
        <li>
          <Instagram />
        </li>
        <li>
          <Linkedin />
        </li>
      </ul>

      <small>Lakshmi Ina Lervik &copy; 2021</small>
    </footer>
  )
}

export default Footer
