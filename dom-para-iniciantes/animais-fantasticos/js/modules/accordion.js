export default function initAccordion() {
  const accordionItem = document.querySelectorAll(
    "[data-lista='accordion'] dt"
  );
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
