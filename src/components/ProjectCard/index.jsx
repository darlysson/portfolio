import React from "react"
import { GrReactjs } from "react-icons/gr"
import { AiFillGithub } from "react-icons/ai"
import { GiWorld } from "react-icons/gi"
import { DiSass } from "react-icons/di"
import { SiTypescript, SiTailwindcss, SiHtml5 } from "react-icons/si"

import Icon from "../Icon"
import Emoji from "../../components/Emoji"
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
        <Icon url={url} icon={<GiWorld />} />
        <Icon url={github_url} icon={<AiFillGithub />} />

        {techs.map(tech => {
          switch (tech) {
            case "React":
              return <GrReactjs color="#61DAFB" title="React JS" />
            case "Sass":
              return <DiSass color="#CF649A" title="Sass" />
            case "Typescript":
              return <SiTypescript color="#3178C6" title="Typescript" />
            case "Tailwind":
              return <SiTailwindcss color="#06B6D4" title="Tailwind CSS" />
            case "Html":
              return <SiHtml5 color="#E96228" title="HTML" />
            case "Styled Components":
              return (
                <Emoji
                  emoji="💅"
                  ariaLabel="nails-emoji"
                  style={{ marginLeft: "0.5rem" }}
                  title="Styled Components"
                />
              )

            default:
              return <SiHtml5 color="#E96228" title="HTML" />
          }
        })}
      </div>
    </div>
  )
}
