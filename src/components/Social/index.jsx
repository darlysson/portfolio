import React from "react"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { container } from "./styles.module.scss"
import { Link } from "gatsby"

export default function Social() {
  return (
    <div className={container}>
      <Link to="https://github.com/darlysson" target="_blank">
        <FaGithub />
      </Link>
      <Link to="https://www.linkedin.com/in/darlyssonalves" target="_blank">
        <FaLinkedin />
      </Link>
      <Link to="mailto:felipetads2012@gmail.com" target="_blank">
        <AiOutlineMail />
      </Link>
    </div>
  )
}
