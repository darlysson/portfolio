import React from "react"

import Layout from "../../components/Layout"
import ProjectCard from "../../components/ProjectCard"

import { projectList, projects, sectionTitle } from "./styles.module.scss"

export default function Projects() {
  return (
    <Layout>
      <section className={projects}>
        <h2 className={sectionTitle}>Projects 💻</h2>
        <div className={projectList}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </Layout>
  )
}
