import type { FC } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Menu } from 'react-feather'

import { Button } from '@components/index'

import { SectionHeroProps } from '@components/pages/home'

const SectionHero: FC<SectionHeroProps> = ({ heroText }) => {
  return (
    <header>
      <Button
        iconStart={<Menu />}
        label={'Meny' /* TODO: make translatable */}
      />

      <Image
        src={'/images/home1.jpeg'}
        height={1000}
        width={1000}
        alt={'Lakshmi smiling on the beach.'}
      />

      <div>
        <h2>Finn ditt inre lugn</h2>
        <h1>med Lakshmi</h1>

        {heroText ? <ReactMarkdown>{heroText}</ReactMarkdown> : null}
      </div>
    </header>
  )
}

export default SectionHero
