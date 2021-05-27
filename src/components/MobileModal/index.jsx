import React from "react"
import Modal from "react-modal"
import { Link } from "gatsby"

import { CgClose } from "react-icons/cg"
import DownloadCVButton from "../DownloadCVButton"

import {
  link,
  modalContent,
  modalHeader,
  closeIcon,
} from "./styles.module.scss"

Modal.setAppElement("#___gatsby")

export default function MobileModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={modalContent}
    >
      <div className={modalContent}>
        <div className={modalHeader}>
          <button onClick={onRequestClose} className={closeIcon} type="button">
            <CgClose />
          </button>
        </div>

        <ul>
          <li>
            <Link to="/" onClick={onRequestClose} className={link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className={link}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className={link}>
              About
            </Link>
          </li>
          <li>
            <DownloadCVButton />
          </li>
        </ul>
      </div>
    </Modal>
  )
}
