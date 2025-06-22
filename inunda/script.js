document.addEventListener("DOMContentLoaded", () => {
  // Simulação de dados (substitua com API real depois)
  const nivelRio = 4.75; // metros
  const risco = nivelRio >= 5 ? "Alto" : nivelRio >= 4 ? "Moderado" : "Baixo";
  const agora = new Date().toLocaleString("pt-BR");

  document.getElementById("nivel").textContent = `${nivelRio} m`;
  document.getElementById("risco").textContent = risco;
  document.getElementById("atualizacao").textContent = agora;

  const lista = document.getElementById("lista-alertas");
  lista.innerHTML = "";

  if (risco === "Alto") {
    lista.innerHTML = `<li>🚨 Risco de alagamento crítico! Evite áreas ribeirinhas.</li>`;
  } else if (risco === "Moderado") {
    lista.innerHTML = `<li>⚠️ Atenção: risco moderado de cheia, acompanhe atualizações.</li>`;
  } else {
    lista.innerHTML = `<li>✅ Nenhum alerta crítico no momento.</li>`;
  }
});
