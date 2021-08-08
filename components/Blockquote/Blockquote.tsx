import type { FC } from 'react'

interface BlockquoteProps {
  quote: string
  cite: string
}

const Blockquote: FC<BlockquoteProps> = ({ quote, cite }) => {
  return (
    <blockquote>
      <q>{quote}</q>

      <cite>- {cite}</cite>
    </blockquote>
  )
}

export default Blockquote
