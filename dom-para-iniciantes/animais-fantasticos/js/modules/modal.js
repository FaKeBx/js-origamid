export default function initModal() {
  const modal = document.querySelector('[data-modal="container"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const login = document.querySelector('[data-modal="abrir" ]');

  if (modal && botaoFechar && login) {
    login.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("ativo");
    });

    botaoFechar.addEventListener("click", () => {
      modal.classList.remove("ativo");
    });

    modal.addEventListener("click", (e) => {
      if (e.target == modal) {
        modal.classList.remove("ativo");
      }
    });
  }
}
