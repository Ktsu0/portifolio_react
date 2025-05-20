export function precione_btn() {
  const btn = document.getElementById("btn_menu");
  if (!btn) return;

  function handleClick() {
    btn.classList.toggle("open");
  }

  btn.addEventListener("click", handleClick);

  return () => {
    btn.removeEventListener("click", handleClick);
  };
}
