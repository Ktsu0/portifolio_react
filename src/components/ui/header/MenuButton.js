function MenuButton({ menuOpen, switchMenu }){
    return<>
    <div
        id="btn_menu"
        className={`column ${menuOpen ? "open" : ""}`}
        onClick={switchMenu}
        style={{ cursor: "pointer" }}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}

      >
        <span className="menu_btn menu_btn1"></span>
        <span className="menu_btn menu_btn2"></span>
        <span className="menu_btn menu_btn3"></span>
      </div>
    </>
}

export default MenuButton