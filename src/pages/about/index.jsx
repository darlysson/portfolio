import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Emoji from "../../components/Emoji"

import Layout from "../../components/Layout"
import {
  container,
  content,
  profileImg,
  sectionTitle,
  blockquoteWrapper,
} from "./styles.module.scss"

export default function About() {
  return (
    <Layout>
      <section className={container}>
        <h2 className={sectionTitle}>
          About me
          <Emoji emoji="👨‍💻" ariaLabel="programmer-emoji" />
        </h2>

        <div className={content}>
          <StaticImage
            src="../../images/lisbon.jpg"
            alt="A picture of myself in Eduardo 2nd park, in Lisbon city centre."
            placeholder="blurred"
            layout="fixed"
            width={200}
            height={200}
            className={profileImg}
            jpgOptions
          />

          <div className={blockquoteWrapper}>
            <blockquote>
              <h4>Growth and comfort do not coehist.</h4>
              <cite>&mdash; IBM Former CEO, Ginni Rometty</cite>
            </blockquote>
          </div>

          <p>
            I'm a Brazilian boy currently living in the lovely city of Lisbon,
            Portugal. Being here is all about the sun, good food, good beaches,
            etc. So, yeah, I just love it :)
          </p>
          <p>
            I'm curious, enthusiastic and a student most of the time. Fast
            learner and passionate about <strong>learning new things</strong>,
            especially related to the front-end world and this project is
            evidence of that. Able to switch between perfectionism and
            pragmatism, able and willing to{" "}
            <strong>think outside the box</strong>, and always{" "}
            <u>looking for improvement</u>.
          </p>

          <ul>
            <li>
              <Emoji emoji="👀" ariaLabel="eyes-emoji" />
              I’m interested in the JamStack (<strong>GatsbyJS</strong> &{" "}
              <strong>Next.js</strong>), CSS, <strong>ReactJS</strong> &{" "}
              <strong>Typescript</strong>.
            </li>
            <li>
              <Emoji emoji="⚙️" ariaLabel="settings-emoji" />
              Some of the technologies I have been working with are{" "}
              <strong>Outsystems</strong>, <strong>HTML</strong>,{" "}
              <strong>CSS (Sass)</strong>, Handlebars, Gulp...
            </li>
            <li>
              <Emoji emoji="👨‍💻" ariaLabel="programmer-emoji" />I have also an
              understanding of databases and <strong>RESTful APIs</strong>.
            </li>
            <li>
              <Emoji emoji="⚡️" ariaLabel="lightning-emoji" />
              Fact about me: I'm a big fan of sports in general, but{" "}
              <strong>football</strong> is special to me. I love to play and
              watch it as much as I can.
              <Emoji emoji="⚽" ariaLabel="football-emoji" />
            </li>
          </ul>

          <p>
            The quote above is what I have been guided by for the past few
            years, not only for professional matters but for life itself. I have
            concluded that there's a <u>better version of myself</u> and it is{" "}
            <strong>always</strong> <u>outside of my comfort zone</u>. That's
            why is so important to me to keep in mind that whenever I face
            troubles or tricky challenges, in life or at work, it will work for
            my personal growth.{" "}
            <strong>Trouble is always an opportunity to be better.</strong>
          </p>
        </div>
      </section>
    </Layout>
  )
}
