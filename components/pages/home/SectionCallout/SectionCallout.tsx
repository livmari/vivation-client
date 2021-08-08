import type { FC } from 'react'

import styles from './SectionCallout.module.sass'

const SectionCallout: FC = () => {
  return (
    <section className={styles.sectionCallout}>
      <div className={styles.imageContainer}>
        <img
          src={'/images/home2.jpeg'}
          alt={'Lakshmi smiling on the beach.'}
          className={styles.image}
        />
      </div>

      <h2 className={styles.callout}>
        Över 30 års erfarenhet inom mindfulness & personlig utveckling
      </h2>
    </section>
  )
}

export default SectionCallout
