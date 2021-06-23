import React from "react"

export default function Emoji({ emoji, ariaLabel, style }) {
  return (
    <span role="img" aria-label={ariaLabel} style={style}>
      {emoji}
    </span>
  )
}
