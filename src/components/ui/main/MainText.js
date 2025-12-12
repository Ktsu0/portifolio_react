function MainText() {
    return <>
        <div className="main_text">
            <h1 id="name" className="text_effect">Gabriel</h1>
            <h2 id="last_name" className="text_effect">Wagner</h2>
            <p className="text_info">
                Sou um Desenvolvedor Front-end especializado em criar experiências digitais intuitivas e 
                de alto impacto. Com sólida base em design e programação, transformo conceitos complexos 
                em interfaces elegantes e funcionais. Comprometido com a excelência técnica e a inovação 
                contínua, busco sempre superar expectativas e entregar soluções que agregam valor real.
            </p>
            <div className="button_container">
                 <button className="btn_primary" onClick={() => window.open('https://github.com/seu-github?tab=repositories', '_blank')}>PROJETOS</button>
                 <button className="btn_secondary" onClick={() => window.open('https://www.linkedin.com/in/seu-linkedin/', '_blank')}>FORMAÇÕES</button>
            </div>
        </div>
    </>
}

export default MainText
