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

function initScroolSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  console.log(linksInternos);

  function scrollSuave(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}

initScroolSuave();
