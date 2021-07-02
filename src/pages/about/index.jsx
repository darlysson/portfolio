import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Emoji from "components/Emoji"
import Layout from "components/Layout"

import {
  container,
  content,
  profileImg,
  sectionTitle,
  blockquoteWrapper,
  highlight,
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
            I am a Brazilian boy living in the lovely city of Lisbon, Portugal.
            Being here is all about the sun, good food, good beaches, etc. So,
            yeah, I love it :)
          </p>
          <p>
            I am curious, enthusiastic, and a student most of the time. I am a
            fast learner and passionate about{" "}
            <span className={highlight}>learning new things</span>, especially
            related to the front-end world. I can switch between perfectionism
            and pragmatism. I am able and willing{" "}
            <span className={highlight}>to be creative</span> and always{" "}
            <span className={highlight}>look for improvement</span>.
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
              Some technologies I have been working with are{" "}
              <span className={highlight}>Outsystems</span>,{" "}
              <span className={highlight}>HTML</span>,{" "}
              <span className={highlight}>CSS (Sass)</span>, Vanilla JS, jQuery,
              Handlebars, and Gulp
            </li>
            <li>
              <Emoji emoji="👨‍💻" ariaLabel="programmer-emoji" />I also understand
              a little about databases and <strong>RESTful APIs</strong>.
            </li>
            <li>
              <Emoji emoji="⚡️" ariaLabel="lightning-emoji" />
              Fact about me: I'm a big fan of sports, but{" "}
              <strong>football</strong> is special to me. I love to play and
              watch it as much as I can
              <Emoji emoji="⚽" ariaLabel="football-emoji" />
            </li>
          </ul>

          <p>
            The quote above has been guiding me in recent years, not only for
            professional matters but for life itself. I have concluded that
            there is always a <u>better version of myself</u> sitting outside my{" "}
            <span class={highlight}>comfort zone</span>. That’s why it is so
            important to me to keep in mind that whenever I face troubles or
            tricky challenges in life or at work, it will finally work for my
            personal growth.
            <strong>Trouble is always an opportunity to grow.</strong>
          </p>
        </div>
      </section>
    </Layout>
  )
}
