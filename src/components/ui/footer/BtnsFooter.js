function BtnsFooter({ id, iconClass }) {
    return <>
        <button className="btn_footer" id={id}>
            <i className={iconClass}></i>
        </button>
    </>
}

export default BtnsFooter