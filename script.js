document.addEventListener("DOMContentLoaded", () => {
  const nivelRio = 4.75; // metros
  const risco =
    nivelRio >= 5
      ? "Alto"
      : nivelRio >= 4
      ? "Moderado"
      : "Baixo";

  const agora = new Date().toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });

  document.getElementById("nivel").textContent = `${nivelRio.toFixed(2)} m`;
  document.getElementById("risco").textContent = risco;
  document.getElementById("atualizacao").textContent = agora;

  const lista = document.getElementById("lista-alertas");
  lista.innerHTML = "";

  if (risco === "Alto") {
    lista.innerHTML = `<li>🚨 Risco de alagamento crítico! Evite áreas ribeirinhas.</li>`;
  } else if (risco === "Moderado") {
    lista.innerHTML = `<li>⚠️ Risco moderado. Mantenha atenção em áreas próximas ao rio.</li>`;
  } else {
    lista.innerHTML = `<li>✅ Situação normal. Nenhum risco no momento.</li>`;
  }
});

