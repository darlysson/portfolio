import React from "react"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { container } from "./styles.module.scss"

export default function Social() {
  return (
    <div className={container}>
      <a href="https://github.com/darlysson" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/darlyssonalves"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:felipetads2012@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineMail />
      </a>
    </div>
  )
}
