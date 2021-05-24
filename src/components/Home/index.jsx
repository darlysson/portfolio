import React from "react"
import Social from "../Social"

import {
  container,
  intro,
  title,
  titleDesc,
  description,
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
        <span role="img" aria-label="portugal-flag">
          &#x1F1F5;&#x1F1F9;
        </span>
      </span>

      <Social />
    </section>
  )
}
