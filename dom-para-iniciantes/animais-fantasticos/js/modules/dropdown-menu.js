export default function initDropDownMenu() {
  const dropdownmenu = document.querySelectorAll("[data-dropdown]");

  dropdownmenu.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.toggle("active");
  }
}