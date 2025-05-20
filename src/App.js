import React, { useEffect } from "react"

import Header from './js/header.js'

import {
  switchMenu,
  precione_btn,
  footerIcons,
  textHeader,
  ghost,
  ghostShadow
} from './js/seusModulos.js'

import './css/App.css'

function App() {
  useEffect(() => {
    const cleanupBtn = precione_btn() // listener botão menu
    textHeader()                      // animação texto header
    ghostShadow()                    // fantasma efeito dispersão
    const cleanupGhost = ghost()     // olhos fantasma seguindo mouse e piscar
    const cleanupFooter = footerIcons() // listeners footer icons

    window.switchMenu = switchMenu // função global (se precisar usar no HTML)

    return () => {
      cleanupBtn && cleanupBtn()
      cleanupGhost && cleanupGhost()
      cleanupFooter && cleanupFooter()
    }
  }, [])

  return (
    <div className="App">
      <Header></Header>

      <main>
        <div id="img_p">
          <div id="img_s"></div>
        </div>
        <div className="main_text">
          <h1 id="name" className="text_effect">Gabriel</h1>
          <h2 id="last_name" className="text_effect">Wagner</h2>
          <p className="text_info">
            Sou um estudante apaixonado por programação e design, sempre buscando
            aprender novas tecnologias e ferramentas.

            Tenho experiência em desenvolvimento front-end, com foco em criar interfaces
            intuitivas e responsivas. Minha abordagem é sempre centrada no usuário,
            visando uma experiência única e eficiente.

            Gosto de trabalhar em projetos desafiadores que me permitam crescer tanto
            profissionalmente quanto pessoalmente.

            Com um olhar atento aos detalhes, busco entregar soluções criativas e
            funcionais. Estou empolgado para fazer parte de novos projetos e contribuir
            com meu conhecimento.
          </p>
        </div>
      </main>

      <footer id="footer">
        <div id="btns_footer">
          <button className="btn_footer" id="btnGithub">
            <i className="icon fa-brands fa-github iconone"></i>
          </button>
          <button className="btn_footer" id="btnWhatsapp">
            <i className="icon fa-brands fa-whatsapp icontwo"></i>
          </button>
          <button className="btn_footer" id="btnInstagram">
            <i className="icon fa-brands fa-instagram icontheer animate-drop"></i>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
