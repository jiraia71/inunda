document.addEventListener("DOMContentLoaded", () => {
  // Dados simulados (pode trocar por uma API real depois)
  const nivelRio = 4.75; // em metros
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

  // Atualiza os elementos do site
  document.getElementById("nivel").textContent = `${nivelRio.toFixed(2)} m`;
  document.getElementById("risco").textContent = risco;
  document.getElementById("atualizacao").textContent = agora;

  // Atualiza a seção de alertas
  const lista = document.getElementById("lista-alertas");
  lista.innerHTML = "";

  if (risco === "Alto") {
    lista.innerHTML = `<li>🚨 Risco de alagamento crítico! Evite áreas ribeirinhas e acompanhe os alertas oficiais.</li>`;
  } else if (risco === "Moderado") {
    lista.innerHTML = `<li>⚠️ Risco moderado: mantenha atenção em áreas baixas e próximas ao rio.</li>`;
  } else {
    lista.innerHTML = `<li>✅ Situação estável. Nenhum risco iminente no momento.</li>`;
  }
});
