import React from "react"
import "@fontsource/roboto"
import "@fontsource/poppins"
import "@fontsource/poppins/600.css"

import Header from "../Header"
import Footer from "../Footer"

import "../../styles/global.scss"
import { container, content } from "./styles.module.scss"

export default function Layout({ children, showFooter = true }) {
  return (
    <main className={container}>
      <Header />
      <div className={content}>{children}</div>
      {showFooter && <Footer />}
    </main>
  )
}
