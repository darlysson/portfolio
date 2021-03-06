import React from "react"
import { Link } from "gatsby"
import { GrGatsbyjs } from "react-icons/gr"
import { SiReact } from "react-icons/si"

import Emoji from "components/Emoji"

import { container, content, me } from "./styles.module.scss"

export default function Footer() {
  return (
    <footer className={container}>
      <div className={content}>
        Built by
        <Link to="/about" className={me}>
          myself
        </Link>
        <Emoji emoji="😃" ariaLabel="smilingFace-emoji" />, using
        <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
          <SiReact color="#61DAFB" />
          React
        </a>
        and
        <a href="https://www.gatsbyjs.com/" rel="noreferrer" target="_blank">
          <GrGatsbyjs color="#7026B9" />
          Gatsby JS
        </a>
      </div>
    </footer>
  )
}
