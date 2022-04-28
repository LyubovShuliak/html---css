function extend() {
  const gamburger = document.querySelector(".gamburger");
  const mobileMenu = document.querySelector(".dp_menu_extend");

  if (gamburger) {
    gamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("not_visible");
    });
  }
}
extend();
