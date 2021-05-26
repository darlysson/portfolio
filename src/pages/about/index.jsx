import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/Layout"
import {
  container,
  content,
  profileImg,
  sectionTitle,
} from "./styles.module.scss"

export default function About() {
  return (
    <Layout>
      <section className={container}>
        <h2 className={sectionTitle}>About me 👨‍💻</h2>

        <div className={content}>
          <StaticImage
            src="../../images/me.jpeg"
            alt="Profile picture of me."
            placeholder="blurred"
            layout="fixed"
            width={200}
            height={200}
            className={profileImg}
          />

          <p>
            A native New Yorker by way of Manhattan, current New Jerseyan. I've
            spent half of my life moving back and forth between the two, so you
            could say I like the pizza and bagels here enough to stick around.
            🍕🥯
          </p>
          <p>
            I've had a passion for technology and all things nerdy since I was
            first old enough to hold a Game Boy and tinker with my dad's MS-DOS
            work laptop, and that love of software and gadgets has been the core
            of my identity ever since.
          </p>
          <p>
            I've also maintained a love of the arts and humanities thanks to
            wonderful parents who took me to museums, plays, and everything
            in-between while growing up. I loved it so much that I pursued a BFA
            from NYU (with a Minor in Web Design and Applications), and have
            spent the past 10 years pursuing acting and voice-over
            professionally in NYC. As an actor and narrator I've worked with
            some amazing clients, such as Audible, Scholastic, Microsoft,
            Blizzard Entertainment, Nickelodeon, and many more.
          </p>
        </div>
      </section>
    </Layout>
  )
}
