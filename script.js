document.querySelectorAll(".project-card .toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    const isOpen = card.classList.toggle("open");
    button.textContent = isOpen ? "접기" : "성과 보기";
  });
});
