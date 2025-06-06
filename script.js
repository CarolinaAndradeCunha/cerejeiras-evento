const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

function atualizarContagem() {
  const dataEvento = new Date("2025-07-05T10:00:00");
  const agora = new Date();
  const diff = dataEvento - agora;

  if (diff <= 0) {
    diasEl.textContent = "00";
    horasEl.textContent = "00";
    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
    return;
  }

  const segundos = Math.floor(diff / 1000) % 60;
  const minutos = Math.floor(diff / 1000 / 60) % 60;
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  diasEl.textContent = dias.toString().padStart(2, "0");
  horasEl.textContent = horas.toString().padStart(2, "0");
  minutosEl.textContent = minutos.toString().padStart(2, "0");
  segundosEl.textContent = segundos.toString().padStart(2, "0");
}

setInterval(atualizarContagem, 1000);
atualizarContagem(); // chamar já na abertura

const botaoCompartilhar = document.getElementById("botaoCompartilhar");

if (navigator.share) {
  botaoCompartilhar.addEventListener("click", () => {
    navigator.share({
      title: "Festival das Cerejeiras 2025",
      text: "Venha para o Festival das Cerejeiras em São Roque, SP! 🌸",
      url: window.location.href
    }).catch(console.error);
  });
} else {
  botaoCompartilhar.addEventListener("click", () => {
    alert("Seu navegador não suporta compartilhamento direto. Copie o link: " + window.location.href);
  });
}
