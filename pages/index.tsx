import type { FC } from 'react'

import { getStrapiCollection, getStrapiSingleType } from '@helpers/strapi'
import {
  SectionHero,
  SectionCallout,
  SectionTestimonials,
} from '@components/pages/home'
import type {
  SectionHeroProps,
  SectionTestimonialsProps,
} from '@components/pages/home'

import styles from '@styles/Home.module.sass'

type Props = SectionHeroProps & SectionTestimonialsProps

const Home: FC<Props> = ({ heroText, testimonials }) => {
  return (
    <div className={styles.homePage}>
      <SectionHero heroText={heroText} />

      <main>
        <SectionCallout />

        <SectionTestimonials testimonials={testimonials} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const pageContent = await getStrapiSingleType('home-page')
  const testimonials = await getStrapiCollection('testimonials')

  return {
    props: { heroText: pageContent.heroText, testimonials },
    revalidate: 1800,
  }
}

export default Home
