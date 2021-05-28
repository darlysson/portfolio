import React from "react"

import { GrReactjs } from "react-icons/gr"
import { AiFillGithub } from "react-icons/ai"
import { GiWorld } from "react-icons/gi"
import { SiTypescript } from "react-icons/si"
import { DiSass } from "react-icons/di"

import { project, Techs, Title } from "./styles.module.scss"

export default function ProjectCard({
  title,
  description,
  url,
  github_url,
  techs,
}) {
  return (
    <div className={project}>
      <h2 className={Title}>{title}</h2>
      <p>{description}</p>
      <div className={Techs}>
        <a href={url}>
          <GiWorld />
        </a>
        <a href={github_url}>
          <AiFillGithub />
        </a>

        {techs.includes("React") && <GrReactjs color="#61DAFB" />}
        {techs.includes("Sass") && <DiSass color="#CF649A" />}
        {techs.includes("Typescript") && <SiTypescript color="#3178C6" />}
      </div>
    </div>
  )
}
