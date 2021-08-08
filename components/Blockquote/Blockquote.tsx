import type { FC } from 'react'

import type { BlockquoteProps } from './Blockquote.props'
import styles from './Blockquote.module.sass'

const Blockquote: FC<BlockquoteProps> = ({ id, classes, quote, cite }) => {
  return (
    <blockquote id={id ?? ''} className={[styles.container, classes].join(' ')}>
      <q className={styles.quote}>{quote}</q>

      <cite className={styles.cite}>- {cite}</cite>
    </blockquote>
  )
}

export default Blockquote
