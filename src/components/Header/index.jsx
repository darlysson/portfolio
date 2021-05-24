import React from "react"
import { container, downloadButton, links } from "./styles.module.scss"
import { BiLinkExternal } from "react-icons/bi"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header className={container}>
      <nav>
        <a
          className={downloadButton}
          rel="noreferrer"
          href="https://app.box.com/s/0jexa7jax6j3klmt66pzjzhiqin096jl"
          target="_blank"
        >
          Download CV
          <BiLinkExternal />
        </a>

        <div className={links}>
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
