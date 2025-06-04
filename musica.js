document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleMusic");
  const musicContainer = document.getElementById("musicContainer");

  toggleButton.addEventListener("click", () => {
    const isHidden = musicContainer.classList.contains("hidden");
    
    if (isHidden) {
      musicContainer.classList.remove("hidden");
      toggleButton.textContent = "Álbum - Dibujame Otra Vez";
    } else {
      musicContainer.classList.add("hidden");
      toggleButton.textContent = "Álbum - Dibujame Otra Vez";
    }
  });
});