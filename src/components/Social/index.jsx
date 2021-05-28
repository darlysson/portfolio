import React from "react"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { container } from "./styles.module.scss"

export default function Social() {
  return (
    <div className={container}>
      <a
        aria-label="github-link"
        href="https://github.com/darlysson"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        aria-label="linkedin-link"
        href="https://www.linkedin.com/in/darlyssonalves"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        aria-label="email-link"
        href="mailto:felipetads2012@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineMail />
      </a>
    </div>
  )
}
