import type { FC, ReactElement } from 'react'

import styles from './Button.module.sass'

interface ButtonProps {
  iconEnd?: ReactElement
  iconStart?: ReactElement
  label?: string
  onClick?: () => void
  priority?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'
}

const Button: FC<ButtonProps> = ({
  iconEnd,
  iconStart,
  label,
  priority = 'tertiary',
  size = 'medium',
  type = 'button',
  ...props
}) => {
  const setPriority = () => {
    if (priority === 'primary') return styles.primary
    if (priority === 'secondary') return styles.secondary
    if (priority === 'tertiary') return styles.tertiary
    return ''
  }

  const setSize = () => {
    if (size === 'large') return styles.large
    if (size === 'medium') return styles.medium
    if (size === 'small') return styles.small
    return ''
  }

  return (
    <button
      className={[setPriority(), setSize()].join(' ')}
      type={type}
      {...props}
    >
      {iconStart ?? null}
      {label ?? null}
      {iconEnd ?? null}
    </button>
  )
}

export default Button
