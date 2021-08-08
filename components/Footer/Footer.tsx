import type { FC } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'react-feather'

import { Button } from '@components/index'

import styles from './Footer.module.sass'

const Footer: FC = () => {
  return (
    <footer className={styles.appFooter}>
      <div className={styles.brandContainer}>
        <Link href={'/'}>
          <a className={styles.brand}>
            <h2>
              Vivation
              <br />
              Skandinavien
            </h2>
          </a>
        </Link>
      </div>

      <div className={styles.buttonContainer}>
        <Button label={'Boka en konsultation'} />
      </div>

      <ul className={styles.contactInfoList}>
        <li>info@vivation.se</li>

        <li>+4676-626 50 50</li>

        <li>Göteborg, Sverige</li>
      </ul>

      <ul className={styles.socialMediaList}>
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
