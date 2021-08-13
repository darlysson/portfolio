import React from "react"

import { BiLinkExternal } from "react-icons/bi"
import { downloadButton } from "./styles.module.scss"

export default function DownloadCVButton() {
  return (
    <a
      role="button"
      className={downloadButton}
      rel="noreferrer"
      href="https://app.box.com/s/0jexa7jax6j3klmt66pzjzhiqin096jl"
      target="_blank"
      data-testid="downloadButton"
    >
      Download CV
      <BiLinkExternal />
    </a>
  )
}
