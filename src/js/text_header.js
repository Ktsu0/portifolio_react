export function textHeader() {
  const title = document.getElementById("programming-title");
  if (!title) {
    console.log("Elemento #programming-title não encontrado");
    return;
  }

  const phrase = "ALUNO DE PROGRAMAÇÃO";

  function createLetters() {
    title.innerHTML = "";
    [...phrase].forEach((char, index) => {
      const span = document.createElement("span");
      span.classList.add("letter");

      if (index % 2 === 0) {
        span.classList.add("up");
      } else {
        span.classList.add("down");
      }

      span.textContent = char === " " ? "\u00A0" : char;
      title.appendChild(span);
    });
  }

  function animateIn() {
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, i) => {
      setTimeout(() => {
        letter.classList.add("enter");
      }, i * 200);
    });

    const totalInTime = letters.length * 200;
    setTimeout(() => animateOut(letters), totalInTime + 5000);
  }

  function animateOut(letters) {
    letters.forEach((letter, i) => {
      setTimeout(() => {
        letter.classList.remove("enter");
        if (i % 2 === 0) {
          letter.classList.add("exit-up");
        } else {
          letter.classList.add("exit-down");
        }
      }, i * 200);
    });

    const totalOutTime = letters.length * 200;
    setTimeout(() => startCycle(), totalOutTime + 2000);
  }

  function startCycle() {
    createLetters();
    animateIn();
  }

  startCycle();
}
