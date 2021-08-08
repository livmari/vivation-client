import type { FC } from 'react'
import Image from 'next/image'
import { nanoid } from 'nanoid'

import { Blockquote } from '@components/index'
import { SectionTestimonialsProps } from '@components/pages/home'

const SectionTestimonials: FC<SectionTestimonialsProps> = ({
  testimonials,
}) => {
  return (
    <section>
      <Image
        src={'/images/home3.jpeg'}
        height={1000}
        width={1000}
        alt={'Lakshmi smiling on the beach.'}
      />

      {/* TODO: Loop over testimonials instead of just showing one blockquote.*/}
      {testimonials.map(testimonial => (
        <Blockquote
          key={nanoid()}
          quote={testimonial.quote}
          cite={testimonial.cite}
        />
      ))}
      <Blockquote
        quote={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc donec arcu at neque, feugiat at sed eget ac. Tincidunt bibendum diam habitasse elementum, dui orci tortor egestas egestas.'
        }
        cite={'Firstname Lastname'}
      />
    </section>
  )
}

export default SectionTestimonials
