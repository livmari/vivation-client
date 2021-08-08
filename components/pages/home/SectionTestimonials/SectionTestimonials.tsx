import { useEffect, useState } from 'react'
import type { FC } from 'react'

import { Blockquote } from '@components/index'

import { SectionTestimonialsProps } from '@components/pages/home'
import styles from './SectionTestimonials.module.sass'

const SectionTestimonials: FC<SectionTestimonialsProps> = ({
  testimonials,
}) => {
  const [count, setCount] = useState(0)
  const [testimonial, setTestimonial] = useState(testimonials[count])

  useEffect(() => {
    const blockquote = document.getElementById('blockquote')

    const interval = setInterval(() => {
      if (blockquote) blockquote.style.opacity = '0' // Takes 500 ms.

      setTimeout(() => {
        if (testimonials[count + 1]) setCount(count + 1)
        else setCount(0)

        setTestimonial(testimonials[count])
      }, 500)

      setTimeout(() => {
        if (blockquote) blockquote.style.opacity = '1' // Takes 500 ms.
      }, 1000)
    }, 8000)

    return () => clearInterval(interval)
  })

  return (
    <section className={styles.sectionTestimonials}>
      <div className={styles.imageContainer}>
        <img
          src={'/images/home3.jpeg'}
          alt={'Lakshmi smiling on the beach.'}
          className={styles.image}
        />
      </div>

      <Blockquote
        id={'blockquote'}
        classes={styles.blockquote}
        quote={testimonial.quote}
        cite={`${testimonial.citeName}${
          testimonial.citeOccupation && testimonial.citeOrganisation
            ? `, ${testimonial.citeOccupation} ${testimonial.citeOrganisation}`
            : `, ${testimonial.citeOccupation}` ?? ''
        }`}
      />
    </section>
  )
}

export default SectionTestimonials
