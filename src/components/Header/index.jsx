import React from "react"
import { BiLinkExternal } from "react-icons/bi"
import { GrClose } from "react-icons/gr"
import { GiHamburgerMenu } from "react-icons/gi"

import {
  container,
  downloadButton,
  mobileIcon,
  links,
} from "./styles.module.scss"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header className={container}>
      <nav>
        <a
          role="button"
          className={downloadButton}
          rel="noreferrer"
          href="https://app.box.com/s/0jexa7jax6j3klmt66pzjzhiqin096jl"
          target="_blank"
        >
          Download CV
          <BiLinkExternal />
        </a>

        <button className={mobileIcon}>
          <GiHamburgerMenu />
        </button>

        {/* <GrClose className={mobileIcon} /> */}
        <div className={links}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
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
