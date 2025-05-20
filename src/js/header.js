import React, { useState } from "react";

 function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function switchMenu() {
    setMenuOpen(prev => !prev);
  }

  const pages = [
    { name: "HOME", href: "index.html", iconClass: "fa-solid fa-house-chimney" },
    { name: "PROJETOS", href: "projects.html", iconClass: "fa-solid fa-folder" },
    { name: "FORMAÇÕES", href: "formations.html", iconClass: "fa-solid fa-graduation-cap" }
  ];

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  return (
    <header id="header" className="start">
      <div id="logo_profession" className="start">
        <div className="ghost_fog"></div>
        <div id="ghost" className="loader">
          <div className="head"></div>
          <div className="flames">
            <div className="particle"></div>
          </div>
          <div className="eye">
            <div className="pupil"></div>
          </div>
        </div>
        <h1 id="programming-title" className="center_alignment"></h1>
      </div>

      <div 
        id="btn_menu" 
        className={`column ${menuOpen ? "open" : ""}`} 
        onClick={switchMenu}
        style={{ cursor: "pointer" }}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        // onKeyDown={(e) => { if(e.key === "Enter") switchMenu() }}
      >
        <span className="menu_btn menu_btn1"></span>
        <span className="menu_btn menu_btn2"></span>
        <span className="menu_btn menu_btn3"></span>
      </div>

      <div 
        id="menu_container" 
        className={`space-around ${menuOpen ? "show" : "hide"}`} 
        style={{
          transition: "all 2s ease-in-out",
          maxHeight: menuOpen ? "500px" : "0",
          overflow: "hidden"
        }}
      >
        <div id="btns_header" className="space_around">
          {pages.map(({ name, href, iconClass }) => {
            const isCurrent = currentPage === href;
            return (
              <button
                key={name}
                className="btn_53"
                disabled={isCurrent}
                style={{
                  opacity: isCurrent ? 0.6 : 1,
                  cursor: isCurrent ? "default" : "pointer"
                }}
                onClick={() => {
                  if (!isCurrent) window.location.href = href;
                }}
              >
                <i className={`icon_h ${iconClass}`}></i>
                <div className="original center_alignment">
                  <i className={`icon_h ${iconClass}`}></i>
                  <p>{name}</p>
                </div>
                <div className="letters" data-text={name}>
                  {name.split("").map((char, i) => (
                    <span key={i}>{char}</span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
export default Header