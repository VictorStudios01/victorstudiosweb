const toggleBtn = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggleBtn.addEventListener("click", () => {
  const isVisible = !navbar.classList.contains("hidden");

  if (isVisible) {
    // Ocultar con animación
    navbar.classList.remove("scale-100", "opacity-100");
    navbar.classList.add("scale-95", "opacity-0");
    setTimeout(() => navbar.classList.add("hidden"), 300);
  } else {
    // Mostrar con animación
    navbar.classList.remove("hidden");
    setTimeout(() => {
      navbar.classList.remove("scale-95", "opacity-0");
      navbar.classList.add("scale-100", "opacity-100");
    }, 10);
  }
});