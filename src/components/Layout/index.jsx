import React, { useState } from "react"
import MobileModal from "../MobileModal"

import "@fontsource/roboto"
import "@fontsource/poppins"
import "@fontsource/poppins/600.css"

import Header from "../Header"
import Footer from "../Footer"

import "../../styles/global.scss"
import { container, content } from "./styles.module.scss"
import Seo from "../Seo"

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
