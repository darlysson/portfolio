import React from "react"

import { GrReactjs } from "react-icons/gr"
import { AiFillGithub } from "react-icons/ai"
import { GiWorld } from "react-icons/gi"
import { SiTypescript } from "react-icons/si"
import { DiSass } from "react-icons/di"

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
        <a href="https://faqs.pages.dev/">
          <GiWorld />
        </a>
        <a href="https://github.com/darlysson/faqs">
          <AiFillGithub />
        </a>
        <DiSass color="#CF649A" />
        <GrReactjs color="#61DAFB" />
        <SiTypescript color="#3178C6" />
      </div>
    </div>
  )
}
