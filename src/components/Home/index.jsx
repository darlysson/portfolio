import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

import Emoji from "components/Emoji"
import Icon from "components/Icon"

import {
  container,
  intro,
  title,
  titleDesc,
  description,
  socialContainer,
} from "./styles.module.scss"

export default function Home() {
  return (
    <section className={container}>
      <span className={intro}>Hey! My name is</span>
      <h2 className={title}>
        Darlysson Alves<span>.</span>
      </h2>
      <h2 className={titleDesc}>I build things for the web.</h2>
      <span className={description}>
        Frontend Web Developer currently based in Lisbon
        <Emoji
          emoji="&#x1F1F5;&#x1F1F9;"
          ariaLabel="portugalFlag-emoji"
          style={{ marginLeft: "8px" }}
        />
      </span>

      <div className={socialContainer}>
        <Icon
          ariaLabel="github-link"
          url="https://github.com/darlysson"
          icon={<FaGithub />}
        />
        <Icon
          ariaLabel="linkedin-link"
          url="https://www.linkedin.com/in/darlyssonalves"
          icon={<FaLinkedin />}
        />
        <Icon
          ariaLabel="email-link"
          url="mailto:felipetads2012@gmail.com"
          icon={<AiOutlineMail />}
        />
      </div>
    </section>
  )
}
