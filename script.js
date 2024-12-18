function confirmAgreement() {
  // Exibe o loader
  const loader = document.getElementById("loader");
  loader.classList.remove("hidden");

  // Simula a análise de dados (3 segundos)
  setTimeout(() => {
    loader.classList.add("hidden");
    alert("Parabéns! Você aceitou o acordo. Entraremos em contato para finalizar.");
  }, 30000);
}
