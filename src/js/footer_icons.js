export function footerIcons() {
  const github = document.getElementById('btnGithub');
  const whatsapp = document.getElementById('btnWhatsapp');
  const instagram = document.getElementById('btnInstagram');

  if (!github || !whatsapp || !instagram) return;

  function openGithub() {
    window.open('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWA95xyqlA7IbQCxAHEgWODhG3ufcsf_RmLw&s', '_blank');
  }

  function openWhatsapp() {
    window.open('https://i.gifer.com/origin/6b/6bd435618b6c7e8c3faa24527442fe89_w200.webp', '_blank');
  }

  function openInstagram() {
    window.open('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmpkb2Y3aXFnYnQ4dWQ4OTE3d3MxamFrNmV0Z2ZjZmtzcTE2Zms4NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WXB88TeARFVvi/200w.webp', '_blank');
  }

  github.addEventListener('click', openGithub);
  whatsapp.addEventListener('click', openWhatsapp);
  instagram.addEventListener('click', openInstagram);

  return () => {
    github.removeEventListener('click', openGithub);
    whatsapp.removeEventListener('click', openWhatsapp);
    instagram.removeEventListener('click', openInstagram);
  };
}
