import React from "react"

import Layout from "../../components/Layout"
import ProjectCard from "../../components/ProjectCard"

import { projectList, container, sectionTitle } from "./styles.module.scss"
import { projects } from "../../api/data.json"

export default function Projects() {
  return (
    <Layout>
      <section className={container}>
        <h2 className={sectionTitle}>
          Projects
          <span role="img" aria-label="computer-emoji">
            💻
          </span>
        </h2>
        <div className={projectList}>
          {projects.map(project => {
            return <ProjectCard key={project.id} {...project} />
          })}
        </div>
      </section>
    </Layout>
  )
}
