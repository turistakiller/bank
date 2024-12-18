function confirmAgreement() {
  // Exibe o modal
  const loaderModal = document.getElementById("loaderModal");
  loaderModal.classList.remove("hidden");

  // Simula a análise de dados (3 segundos)
  setTimeout(() => {
    loaderModal.classList.add("hidden");
    alert("Parabéns! Você aceitou o acordo. Entraremos em contato para finalizar.");
  }, 3000);
}
