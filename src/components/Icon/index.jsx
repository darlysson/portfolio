import React from "react"
import { socialIcon } from "./styles.module.scss"

export default function Icon({ ariaLabel, url, icon }) {
  return (
    <a
      className={socialIcon}
      aria-label={ariaLabel}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  )
}
