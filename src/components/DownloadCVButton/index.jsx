import React from "react"
import { BiLinkExternal } from "react-icons/bi"
import { downloadButton } from "./styles.module.scss"

export default function DownloadCVButton() {
  return (
    <a
      role="button"
      className={downloadButton}
      rel="noreferrer"
      href="https://drive.google.com/file/d/1DyNhVUw8rK7XNrF_7Buq5ObNRBgJhQFX/view?usp=drive_link"
      target="_blank"
      data-testid="downloadButton"
    >
      Download CV
      <BiLinkExternal />
    </a>
  )
}
