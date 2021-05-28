import React from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"

import DownloadCVButton from "../DownloadCVButton"

import { container, hamburgerIcon, links } from "./styles.module.scss"

export default function Header({ onOpenModal }) {
  return (
    <header className={container}>
      <nav>
        <DownloadCVButton />

        <button
          className={hamburgerIcon}
          aria-label="Hamburger Menu"
          onClick={onOpenModal}
        >
          <GiHamburgerMenu />
        </button>

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
          </ul>
        </div>
      </nav>
    </header>
  )
}
