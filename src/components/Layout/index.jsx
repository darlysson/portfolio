import React, { useState } from "react"

import "@fontsource/roboto"
import "@fontsource/poppins"
import "@fontsource/jost"
import "@fontsource/poppins/600.css"

import Seo from "components/Seo"
import Header from "components/Header"
import Footer from "components/Footer"
import MobileModal from "components/MobileModal"

import "styles/global.scss"
import { container, content } from "./styles.module.scss"

export default function Layout({ children, showFooter = true }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  return (
    <main className={container}>
      <Seo />
      <Header onOpenModal={handleOpenModal} />
      <div className={content}>{children}</div>
      {showFooter && <Footer />}

      <MobileModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </main>
  )
}
