export function ghostShadow() {
  const ghost = document.querySelector('.loader');
  const particles = ghost?.querySelectorAll('.particle');

  if (!ghost || !particles) {
    console.log("Fantasma ou partículas não encontrados!");
    return () => {}; // Retorna função vazia para cleanup
  }

  function hideGhost() {
    console.log("Fantasma clicado!");

    particles.forEach(p => {
      const dx = (Math.random() - 0.5) * 200;
      const dy = (Math.random() - 0.5) * 200;
      p.style.setProperty('--dx', `${dx}px`);
      p.style.setProperty('--dy', `${dy}px`);
      p.style.animation = 'disperse 1s forwards';
    });

    ghost.classList.add('hidden');

    setTimeout(() => {
      particles.forEach(p => {
        p.style.animation = '';
      });
    }, 1000);

    setTimeout(() => {
      ghost.classList.remove('hidden');
      console.log("Fantasma reapareceu!");
    }, 10000);
  }

  ghost.addEventListener('click', hideGhost);

  // Retorna função de cleanup para remover listener quando desmontar
  return () => {
    ghost.removeEventListener('click', hideGhost);
  };
}
