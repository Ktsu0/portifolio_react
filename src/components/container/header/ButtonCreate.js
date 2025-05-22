function ButtonCreate({ name, href, iconClass, isCurrent }) {
  return (
    <button
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
}

export default ButtonCreate;
