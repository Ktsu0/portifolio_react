import React, { useState } from "react";
import LogoProfession from "../../ui/header/LogoProfession";
import MenuButton from "../../ui/header/MenuButton";
import ButtonContainer from "./ButtonContainer";

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
      <LogoProfession />

      <MenuButton menuOpen={menuOpen} switchMenu={switchMenu} />

      <ButtonContainer menuOpen={menuOpen} pages={pages} currentPage={currentPage} />
    </header>
  );
}
export default Header