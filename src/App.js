import React, { useEffect } from "react"

import Header from './components/header/header.js'
import Main from "./components/main/main.js"

import {
  switchMenu,
  precione_btn,
  footerIcons,
  textHeader,
  ghost,
  ghostShadow
} from './js/seusModulos.js'

import './css/App.css'
import Footer from "./components/footer/Footer.js"

function App() {
  useEffect(() => {
    const cleanupBtn = precione_btn()
    textHeader()
    ghostShadow()
    const cleanupGhost = ghost()
    const cleanupFooter = footerIcons()

    window.switchMenu = switchMenu

    return () => {
      cleanupBtn && cleanupBtn()
      cleanupGhost && cleanupGhost()
      cleanupFooter && cleanupFooter()
    }
  }, [])

  return (
    <div className="App">
      <Header />

      <Main />

      <Footer />
    </div>
  )
}

export default App
