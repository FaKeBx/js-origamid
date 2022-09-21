function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabDescricao = document.querySelectorAll(".js-descricao section");

  if (tabMenu.length && tabDescricao.length) {
    tabDescricao[0].classList.add("ativo");

    function activeTab(index) {
      tabDescricao.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabDescricao[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionItem = document.querySelectorAll(".js-accordion dt");
  const ativoClass = "ativo";

  if (accordionItem.length) {
    accordionItem[0].classList.add(ativoClass);
    accordionItem[0].nextElementSibling.classList.add(ativoClass);

    accordionItem.forEach((item) => {
      item.addEventListener("click", function () {
        item.classList.toggle(ativoClass);
        item.nextElementSibling.classList.toggle(ativoClass);
      });
    });
  }
}

initAccordion();
