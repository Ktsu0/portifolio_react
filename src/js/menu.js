export function switchMenu() {
  const div_menu = document.getElementById('menu_container');
  if (!div_menu) {
    console.log("Menu container não encontrado");
    return;
  }

  if (div_menu.style.left === '50vw') {
    div_menu.style.left = '100vw';
  } else {
    div_menu.style.left = '50vw';
  }
}
