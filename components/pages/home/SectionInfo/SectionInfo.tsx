import type { FC } from 'react'
import Image from 'next/image'

const SectionInfo: FC = () => {
  return (
    <section>
      <Image
        src={'/images/home2.jpeg'}
        height={1000}
        width={1000}
        alt={'Lakshmi smiling on the beach.'}
      />

      <h2>Över 30 års erfarenhet inom mindfulness & personlig utveckling</h2>
    </section>
  )
}

export default SectionInfo
