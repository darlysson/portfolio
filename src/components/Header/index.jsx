import React from "react"
import { BsCodeSlash } from "react-icons/bs"
import { container } from "./styles.module.scss"

export default function Header() {
  return (
    <header className={container}>
      <BsCodeSlash />

      <nav>
        <button type="button">Download CV</button>
      </nav>
    </header>
  )
}
