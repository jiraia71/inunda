document.addEventListener("DOMContentLoaded", () => {
  let contadorAtualizacoes = 0;
  const historico = [];
  const intervaloAtualizacao = 10 * 1000; // 10 segundos (simulação)

  function gerarNivelAleatorio() {
    // Simula um nível do rio entre 3.2m e 5.8m
    return (Math.random() * 2.6 + 3.2).toFixed(2);
  }

  function classificarRisco(nivel) {
    if (nivel >= 5.0) return "Alto";
    if (nivel >= 4.0) return "Moderado";
    return "Baixo";
  }

  function atualizarEstiloPagina(risco) {
    const body = document.body;
    body.style.transition = "background-color 1s";

    if (risco === "Alto") {
      body.style.backgroundColor = "#ffcccc";
    } else if (risco === "Moderado") {
      body.style.backgroundColor = "#fff5cc";
    } else {
      body.style.backgroundColor = "#e0f7fa";
    }
  }

  function atualizarPainel() {
    const nivel = parseFloat(gerarNivelAleatorio());
    const risco = classificarRisco(nivel);
    const agora = new Date().toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    });

    document.getElementById("nivel").textContent = `${nivel} m`;
    document.getElementById("risco").textContent = risco;
    document.getElementById("atualizacao").textContent = agora;

    const listaAlertas = document.getElementById("lista-alertas");
    listaAlertas.innerHTML = "";

    const alerta = document.createElement("li");

    if (risco === "Alto") {
      alerta.innerHTML = "🚨 Alerta crítico! Áreas próximas ao rio devem ser evacuadas.";
      alerta.style.background = "#ffcccc";
    } else if (risco === "Moderado") {
      alerta.innerHTML = "⚠️ Atenção: risco moderado de cheia, acompanhe novas medições.";
      alerta.style.background = "#fff5cc";
    } else {
      alerta.innerHTML = "✅ Situação normal, sem risco imediato de inundações.";
      alerta.style.background = "#ccffcc";
    }

    alerta.style.padding = "0.5rem";
    alerta.style.borderLeft = "5px solid #555";
    listaAlertas.appendChild(alerta);

    atualizarEstiloPagina(risco);

    // Armazena histórico
    historico.push({ nivel, risco, data: agora });
    contadorAtualizacoes++;

    console.log(`Atualização ${contadorAtualizacoes}:`, nivel, risco, agora);
  }

  // Primeira atualização imediata
  atualizarPainel();

  // Atualiza automaticamente a cada X segundos
  setInterval(atualizarPainel, intervaloAtualizacao);
});

