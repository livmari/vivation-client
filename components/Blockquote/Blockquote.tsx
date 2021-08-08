import type { FC } from 'react'

import type { BlockquoteProps } from './Blockquote.props'
import styles from './Blockquote.module.sass'

const Blockquote: FC<BlockquoteProps> = ({ quote, cite }) => {
  return (
    <blockquote className={styles.container}>
      <q className={styles.quote}>{quote}</q>

      <cite className={styles.cite}>- {cite}</cite>
    </blockquote>
  )
}

export default Blockquote
