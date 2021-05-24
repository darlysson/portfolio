import * as React from "react"
import "@fontsource/roboto"
import "@fontsource/poppins"
import "@fontsource/poppins/600.css"

import Header from "../components/Header"
import Home from "../components/Home"

import "../styles/global.scss"
import { Container } from "../styles/index.module.scss"

export default function Index() {
  return (
    <main className={Container}>
      <Header />
      <Home />
    </main>
  )
}
