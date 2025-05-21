import ButtonCreate from "./ButtonCreate";

function ButtonContainer({ menuOpen, pages, currentPage }) {
    return <>
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
                        <ButtonCreate key={name} name={name} href={href} iconClass={iconClass} isCurrent={isCurrent} />
                    );
                })}
            </div>
        </div>
    </>
}
export default ButtonContainer