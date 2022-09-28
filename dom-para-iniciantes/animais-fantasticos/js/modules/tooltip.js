export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  console.log(tooltips);

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(e) {
    const tooltipBox = criarTooltip(this);
    console.log(tooltipBox);
  }

  function criarTooltip(element) {
    const tooltipBox = document.createElement("div");
    const textBox = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = textBox;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
