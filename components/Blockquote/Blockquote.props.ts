export interface BlockquoteProps {
  /** Used for ev. animations. */
  id?: string

  /** Styles if any. */
  classes?: string

  /** The quote text of the blockquote. */
  quote: string

  /** The source of the quote. */
  cite: string
}
