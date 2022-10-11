export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-scroll='scroll']");

  if (sections.length) {
    function animaScroll() {
      sections.forEach((item) => {
        const sectionTop =
          item.getBoundingClientRect().top - window.innerHeight * 0.7;
        if (sectionTop < 0) {
          item.classList.add("ativo");
        } else if (item.classList.contains("ativo")) {
          item.classList.remove("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
