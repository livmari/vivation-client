import type { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Menu } from 'react-feather'

import { Button } from '@components/index'

import { SectionHeroProps } from '@components/pages/home'
import styles from './SectionHero.module.sass'

const SectionHero: FC<SectionHeroProps> = ({ heroText }) => {
  return (
    <header className={styles.sectionHero}>
      <div className={styles.buttonContainer}>
        <Button
          iconStart={<Menu />}
          label={'Meny' /* TODO: make translatable */}
        />
      </div>

      <div className={styles.imageContainer}>
        <img
          src={'/images/home1.jpeg'}
          alt={'Lakshmi smiling on the beach.'}
          className={styles.image}
        />
      </div>

      <div className={styles.textContainer}>
        <h2>Finn ditt inre lugn</h2>
        <h1>med Lakshmi</h1>

        {heroText ? <ReactMarkdown>{heroText}</ReactMarkdown> : null}
      </div>
    </header>
  )
}

export default SectionHero
