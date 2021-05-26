import React from "react"

import { GrReactjs } from "react-icons/gr"
import { AiFillGithub } from "react-icons/ai"
import { GiWorld } from "react-icons/gi"

import { project, techs, title } from "./styles.module.scss"

export default function ProjectCard() {
  return (
    <div class={project}>
      <h2 className={title}>Gatsby JS</h2>
      <p>
        Gatsby is a React-based, GraphQL powered, static site generator. Overall
        think, part Jekyll, part create-react-app.
      </p>
      <div className={techs}>
        <a href="#">
          <GiWorld />
        </a>
        <a href="#">
          <AiFillGithub />
        </a>
        <a href="#">
          <GrReactjs />
        </a>
      </div>
    </div>
  )
}
