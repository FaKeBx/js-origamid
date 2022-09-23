export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabDescricao = document.querySelectorAll(
    "[data-tab='descricao'] section"
  );

  if (tabMenu.length && tabDescricao.length) {
    tabDescricao[0].classList.add("ativo");
    tabDescricao[0].dataset.anime;

    function activeTab(index) {
      tabDescricao.forEach((section) => {
        section.classList.remove("ativo");
      });
      const descricao = tabDescricao[index].dataset.anime;
      tabDescricao[index].classList.add("ativo", descricao);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
