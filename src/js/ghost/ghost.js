export function ghost() {
  const eye = document.querySelector(".eye");
  const pupil = document.querySelector(".pupil");

  if (!eye || !pupil) return;

  // Pupila segue o mouse
  const onMouseMove = (e) => {
    const eyeRect = eye.getBoundingClientRect();
    const centerX = eyeRect.left + eyeRect.width / 2;
    const centerY = eyeRect.top + eyeRect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const maxOffset = 10;
    const offsetX = Math.max(-maxOffset, Math.min(deltaX / 10, maxOffset));
    const offsetY = Math.max(-maxOffset, Math.min(deltaY / 10, maxOffset));

    pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };

  document.addEventListener("mousemove", onMouseMove);

  // Piscar a cada 5 segundos
  function blink() {
    if (!pupil) return;

    pupil.style.transition = "height 0.15s ease";
    pupil.style.height = "0px";

    setTimeout(() => {
      if (pupil) pupil.style.height = "2rem"; // ajuste conforme o tamanho original
    }, 150);
  }

  const blinkInterval = setInterval(blink, 5000);

  // Cleanup para remover listener e intervalo
  return () => {
    document.removeEventListener("mousemove", onMouseMove);
    clearInterval(blinkInterval);
  };
}
