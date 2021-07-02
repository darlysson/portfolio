import React from "react"

export default function Emoji({ emoji, ariaLabel, style, title }) {
  return (
    <span role="img" aria-label={ariaLabel} style={style} title={title}>
      {emoji}
    </span>
  )
}
